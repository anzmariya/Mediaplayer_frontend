import { commonAPI } from "../server/commonAPI"
import { serverURL } from "../server/serverURL"


// api to upload video
    export const uploadAllVideo = async(reqBody)=>{
        return await commonAPI('POST',`${serverURL}/video`,reqBody)
    }

// api to get all video
export const getAllVideos=async()=>{
    return await commonAPI('GET',`${serverURL}/video`,"")
}

// api to delete a video
export const deleteVideo=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

// add watch history
export const addToHistory=async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

// to get data from the history
export const getAllHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

// api to delete history
export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

// api to add category
export const addCategory = async(body)=>{
    return await commonAPI('POST',`${serverURL}/category`,body)
} 

// api to get all category
export const getAllCategory = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
} 

// api to delete category
export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

// api to get a video
export const getVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}

// api call to update the category
export const updateCategory=async(id, body)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}