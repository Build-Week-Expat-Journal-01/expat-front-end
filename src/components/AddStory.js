import React from 'react'
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {addPost} from '../actions'
import {connect} from 'react-redux'
// import AxiosWithAuth from '../utils/AxiosWithAuth'

const AddStory = (props) => {
    const {push} = useHistory()

    //Shaq: useState for story, haven't looked for whats need for the backend hopefully this is close.
    const [storyData, setStoryData] = useState({
        postID: Date.now(), //this would just be a number that automatically goes up 1 for each unique story
        postText: "", //i guess this is the actual text of a story
        postImgURL: "", //this is the input for the location of the image
    })
    console.log('storydata',storyData)

    const inputChange =(e)=>{
        setStoryData({
            ...storyData,
            [e.target.name]: e.target.value
        })

    }

    const formSubmit =(e)=>{
        console.log('formSubmit in addstory')
        e.preventDefault();
        props.addPost(storyData)
        push('/userDashboard')
    }

    const cancelEdit = () => {
        push('/userDashboard')
    }

    return(
        <>
            <button onClick={cancelEdit}>cancel </button>
            <form onSubmit={formSubmit}>
                <label htmlFor="uploadPic">
                    Please input image location: 
                    <br/>
                    <input type="text" name="postImgURL" onChange={inputChange}/>
                    <button onClick="">UPLOAD</button>(This is a required field)
                    <br/>
                </label>
                    <br/>
                <label htmlFor="postText">
                    Caption?
                    <br/>
                    <textarea id="caption" name='postText' placeholder="Whats on your mind?" onChange={inputChange}/>
                </label>
                <button>Save</button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps,{addPost})(AddStory)