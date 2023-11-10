import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'

function WatchHistory() {

  const [history, setHistory]= useState([])
  
  const getHistory = async()=>{
    const {data}=await getAllHistory()
    console.log(data);
    setHistory(data)
  }

  useEffect(()=>{
    getHistory()
  },[])

  const handleDelete=async(id)=>{
    await deleteHistory(id)
    getHistory()
  }

  return (
    <div className='mb-4 p-5 ms-5'>
      <h3>Watch History</h3>
      <Link to={'/home'} style={{float:'right',marginRight:'170px',marginLeft:'-150px',textDecoration:'none',color:'white'}}>
        <i class="fa-solid fa-arrow-left me-2"></i>
        Back to Home
      </Link>

    <Table responsive className='mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {history.length>0?
          history.map((item)=>(<tr>
            <td>{item.id}</td>
            <td>{item.caption}</td>
            <td><a href={item.embedLink}>{item.embedLink}</a></td>
            <td>{item.timeStamp}</td>
            <td><button onClick={()=>handleDelete(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>

          </tr>)):
          <p>Nothing to Display</p>}
        </tbody>


    </Table>

    </div>
  )
}

export default WatchHistory