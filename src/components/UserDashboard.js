import React from 'react'
import AxiosWithAuth from '../utils/AxiosWithAuth'
import axios from 'axios'
import UserStoryCard from './UserStoryCard'

const UserDashboard = () => {

    axios.post('https://build-week-expat-journal-1.herokuapp.com/')

    return(
        <>
        <h1>User DAAAAAAASH</h1>
        <UserStoryCard/>
        </>
    )
}

export default UserDashboard