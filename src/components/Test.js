import React from 'react'
import axios from 'axios'
import AxiosWithAuth from '../utils/AxiosWithAuth'

const Test = () => {

    const getStory = () => {
        AxiosWithAuth()
        .get('api/stories')
        .then(res=>console.log(res.data))
        .catch(err=> console.log(err))
    }

    return(
        <button onClick={getStory}> get request</button>
    )
}

export default Test