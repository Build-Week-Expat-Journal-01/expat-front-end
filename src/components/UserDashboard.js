import React from 'react'
import AxiosWithAuth from '../utils/AxiosWithAuth'
import axios from 'axios'
import UserStoryCard from './UserStoryCard'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const UserDashboard = (props) => {

    const {push} = useHistory()

    // const posts = [
    //         {   id:1,
    //             story:'took a trip to alaska',
    //             img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fthumbor%2FfZbJ-EetmPwmORs8Dn8Pog4aL9s%3D%2F900x600%2Fmedia%2Fimg%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2Fa01_aeq00071%2Foriginal.jpg&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2F100746%2F&tbnid=Vmf8iDAYFZWOYM&vet=12ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ..i&docid=otGs_R-RzCLcnM&w=900&h=600&q=img%20alaska&ved=2ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ"
    //         },
    //         {
    //             id:2,
    //             story:'took a trip to Oregon',
    //             img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fthumbor%2FfZbJ-EetmPwmORs8Dn8Pog4aL9s%3D%2F900x600%2Fmedia%2Fimg%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2Fa01_aeq00071%2Foriginal.jpg&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2F100746%2F&tbnid=Vmf8iDAYFZWOYM&vet=12ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ..i&docid=otGs_R-RzCLcnM&w=900&h=600&q=img%20alaska&ved=2ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ"
    //         },
    //         {
    //             id:3,
    //             story:'took a trip to BC',
    //             img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fthumbor%2FfZbJ-EetmPwmORs8Dn8Pog4aL9s%3D%2F900x600%2Fmedia%2Fimg%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2Fa01_aeq00071%2Foriginal.jpg&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2F100746%2F&tbnid=Vmf8iDAYFZWOYM&vet=12ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ..i&docid=otGs_R-RzCLcnM&w=900&h=600&q=img%20alaska&ved=2ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ"
    //         }
    //     ]
    

    // axios.post('https://build-week-expat-journal-1.herokuapp.com/')

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

export default connect(mapStateToProps,{})(UserDashboard)