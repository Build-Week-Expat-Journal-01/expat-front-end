import React from 'react'
import {useState, useEffect} from 'react';
// import AxiosWithAuth from '../utils/AxiosWithAuth'

const AddStory = () => {

    //Shaq: useState for story, haven't looked for whats need for the backend hopefully this is close.
    const {storyData, setStoryData} = useState({
        postID: "", //this would just be a number that automatically goes up 1 for each unique story
        postText: "", //i guess this is the actual text of a story
        postImgURL: "", //this is the input for the location of the image
    })

    const inputChange =()=>{

    }

    const formSubmit =()=>{

    }


    return(
        <>
            <form onSubmit={formSubmit}>
                <label htmlFor="uploadPic">
                    Please input image location: 
                    <br/>
                    <input type="text" name="uploadPic" onChange={inputChange}/>
                    <button onClick="">UPLOAD</button>(This is a required field)
                    <br/>
                </label>
                    <br/>
                <label htmlFor="postText">
                    Caption?
                    <br/>
                    <textarea id="caption" placeholder="Whats on your mind?"/>
                </label>
            </form>
        </>
    )
}

export default AddStory