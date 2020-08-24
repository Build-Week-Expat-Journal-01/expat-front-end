import React,{useEffect} from 'react'
import AxiosWithAuth from '../utils/AxiosWithAuth'
import axios from 'axios'
import UserStoryCard from './UserStoryCard'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchData} from '../actions/index'

const UserDashboard = (props) => {

    const {push} = useHistory()

    // useEffect(()=>{
    //     props.fetchData()
    // },[])

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
        <UserStoryCard key={post.id} post={post}/>
        )}
        </>
    )
}

const mapStateToProps = state => {
    return{
        posts: state.posts
    }

}

export default connect(mapStateToProps,{fetchData})(UserDashboard)