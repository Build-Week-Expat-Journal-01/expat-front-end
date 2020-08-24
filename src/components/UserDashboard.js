import React from 'react'
import AxiosWithAuth from '../utils/AxiosWithAuth'
import axios from 'axios'
import UserStoryCard from './UserStoryCard'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const UserDashboard = (props) => {

    const {push} = useHistory()

    const logout=() => {
        localStorage.clear()
        push('/')
    }

    const addStory = () => {
        push('/addStory')
    }

    return(
        <>
        <button onClick={logout}>Logout</button>
        <h1>User DAAAAAAASH</h1>
        <button onClick={addStory}>Add Story</button>
        {props.posts.map(post => 
        <UserStoryCard key={post.postID} post={post}/>
        )}
        </>
    )
}

const mapStateToProps = state => {
    return{
        posts: state.posts
    }

}

export default connect(mapStateToProps,{})(UserDashboard)