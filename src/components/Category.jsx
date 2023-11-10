import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAllCategory, getVideo, updateCategory } from '../services/allAPI';
import { Row,Col } from 'react-bootstrap';
import VideoCard from './VideoCard';


function Category() {

const[categoryName,setCategoryName]=useState({})
const[allCategory,setAllCategory]=useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory=async()=>
  {
    console.log(categoryName);
    if(categoryName)
    {
      let body={
        categoryName,
        allVideos:[]
      }

      // make api call
      const response=await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300)
      {
        alert('Category succesfully added')
        setCategoryName("")
        // close modal
        handleClose()
      }
      else
      {
        console.log(response);
        alert('something went wrong')
      }
    }
      

    else
    {
      alert('please fill catgeory name')
    }
  }


  const getallCategory=async()=>
  {
    const{data}=await getAllCategory()
    // console.log(data);
    setAllCategory(data)
  }
  console.log(allCategory);

  // dragover event listener
  const dragover=(e)=>
  {
    // this will prevent reload so that the data that we send from videocard.jsx wont be lost
    e.preventDefault()
    console.log('inside dragover');
  }

  const videoDrop=async(e,categoryId)=>
  {
    console.log(`dropped inside ${categoryId}`);
    const videoid=e.dataTransfer.getData("videoID")
    console.log(videoid);
    
    // api to get the particular video that is draged
    const {data} = await getVideo(videoid)
    console.log(data);

    // to find the particular category with the specified id
    let selectedCategory= allCategory?.find((item)=>item.id===categoryId)
    // console.log(selectedCategory);
    // data is added to the allvideos array in the particular category with the specified id
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    await updateCategory(categoryId,selectedCategory)
    getAllCategory()
  }

  

  const handleDeleteCategory=async(id)=>{
    await deleteCategory(id)
    getallCategory()
  }

  useEffect(()=>
  {
    getallCategory()
  },[])


  return (
    <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add new category</button>
      </div>

      {allCategory?.length>0?
      allCategory?.map((item)=>(<div className='ms-3 p-3 mt-3 border border-secondary'>
      <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragover(e)}
      onDrop={(e)=>videoDrop(e, item?.id)}>
        <h6>{item.categoryName}</h6>
        <button onClick={()=>handleDeleteCategory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </div>
      <Row>
        <Col sm={12}>
          {
            item.allVideos?.length>0?
            item.allVideos.map((card)=>(<VideoCard displayVideo={card}/>)):
            <p>Nothing to display</p>
          }
        </Col>
      </Row>
      </div>))
      :<p>Nothing to display</p>}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil text-warning me-3"></i>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form className="border border-secondary rounded p-3">
           <Form.Label>Category Name</Form.Label>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter category name" onChange={(e)=>setCategoryName(e.target.value)} />
           </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category