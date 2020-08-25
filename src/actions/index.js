
import AxiosWithAuth from '../utils/AxiosWithAuth'
import {useHistory} from 'react-router-dom'

export const FETCHING_START = 'FETCHING_START'
export const FETCHING_FAIL = 'FETCHING_FAIL'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'



export const fetchData = () => dispatch => {
    dispatch({type:FETCHING_START})
    console.log('fetch in action')
    AxiosWithAuth()
        .get('api/stories')
        .then(res=>dispatch({ type:FETCHING_SUCCESS, payload:res.data.stories}))
        .catch(err=> console.log(err),
        dispatch({ type:FETCHING_FAIL}))
}

export const addPost = newPost => {
        console.log('addPost in action',newPost) 
        AxiosWithAuth()
            .post('api/stories',newPost)
            .then(res => console.log('post res in actions', res))
            .catch(err => console.log('err in action add-', err))
    return{

        type:ADD_POST,
        payload:newPost
    }
}

export const editPost=() => {
    console.log('editPost in action')
}

export const deletePost = () => {
    console.log('delete in action')
}