import React from 'react'
import {useHistory} from 'react-router-dom'





const UserStoryCard = (props) => {

    const {push} = useHistory()

    const editStory = () => {
        push('/addStory')
    }

    const deleteStory =() => {

    }

    return(
        <div style={{border:'1px solid black'}}>
            <div>
            <img src={props.post.img} alt='alaska'/>
            </div>
            <h3>{props.post.story}</h3>
            <button onClick={editStory}>edit story</button>
            <button onClick={deleteStory}>Delete</button>
        </div>
    )
}



export default UserStoryCard