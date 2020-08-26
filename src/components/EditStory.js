import React from 'react'
import {useState, useEffect} from 'react';
// import AxiosWithAuth from '../utils/AxiosWithAuth'

//1. pull data from server with current logged in user
//2. Array of user post
//3. Take specific post ID
//4. change properties with in post.
//WARNING: we have to check the array's size before sending back to server arr.length() must be maintained


const EditStory = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        //pull userData here and save to state
    })


    return(
        <>
        </>
    )
}

export default EditStory