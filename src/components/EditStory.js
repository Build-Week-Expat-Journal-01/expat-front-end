import React from 'react'
import {useState, useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {editPost} from '../actions/index'

import AxiosWithAuth from '../utils/AxiosWithAuth'

//1. pull data from server with current logged in user
//2. Array of user post
//3. Take specific post ID
//4. change properties with in post.
//WARNING: we have to check the array's size before sending back to server arr.length() must be maintained


// const EditStory = () => {
//     const params = useParams()
//     console.log('paarams in edit', params)
//     const [userData, setUserData] = useState([]);

//     useEffect(() => {
//         //pull userData here and save to state
//     })


//     return(
//         <>
//         </>
//     )
// }

// export default EditStory

const EditStory = (props) => {
    const {push,goBack} = useHistory()
    const params = useParams()
    const [storyData, setStoryData] = useState({
        content: "",
        teaser: "",
        title: "",        
        photos:[
            {
                image_url:'',
                desc:''
            }
        ]

    })

    useEffect(() => {
        AxiosWithAuth()
            .get(`api/stories/${params.id}`)
            .then(res=> setStoryData(res.data.story)) 
            .catch(err => console.log(err))

    },[])

    // console.log('storyData', storyData)

    const inputChange =(e)=>{
        setStoryData({
            ...storyData,
            [e.target.name]: e.target.value
        })
    }

    const photoChange = (e) => {
        setStoryData({
            ...storyData,
            photos:[ ...storyData.photos,
               { [e.target.name]: e.target.value}
            ]
        })
    }

    const altChange = (e) => {
        setStoryData({
            ...storyData,
           photos:[storyData.photos.filter(pic => console.log('pic in filter',pic))]
        })
    }

    
    // console.log('params',props.posts.id)
                    // id post obj,
    const formSubmit =(e)=>{
        e.preventDefault();
        props.editPost(params.id,storyData)
        goBack()
    }

    const cancelEdit = () => {
        goBack()
    }

    return(
        <>
            <button onClick={cancelEdit}>cancel </button>
            <form onSubmit={formSubmit}>
                <label htmlFor="uploadPic">
                    Please input image location: 
                    <br/>
                    <input type="text" name="image_url" onChange={photoChange}/>
                    {/* <button onClick="">UPLOAD</button>(This is a required field) */}
                    <br/>
                </label>
                    <br/>
                    <label htmlFor="postText">
                    Alt
                    <br/>
                    <input id="alt" name='desc' placeholder="alt img" onChange={altChange}/>
                </label>
                <label htmlFor="postText">
                <br/>
                    Title
                    <br/>
                    <textarea id="title" name='title' value={storyData.title} placeholder="Title" onChange={inputChange}/>
                </label>
                <label htmlFor="postText">
                <br/>
                    Caption
                    <br/>
                    <textarea id="caption" name='content' value={storyData.content} placeholder="Whats on your mind?" onChange={inputChange}/>
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

export default connect(mapStateToProps,{editPost})(EditStory)