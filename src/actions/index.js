
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
        // console.log('addPost in action',newPost) 
        AxiosWithAuth()
            .post('api/stories',newPost)
            .then(res => console.log('post res in actions', res))
            .catch(err => console.log('err in action add-', err))
    return{

        type:ADD_POST,
        payload:newPost
    }
}

export const editPost = (id,updated) => {
    console.log('editing in actions editPost:id and updated', id, updated)
    AxiosWithAuth()
        .put(`api/stories/${id}`,updated)
        .then(res => console.log('post res in actions', res))
        .catch(err => console.log('err in action add-', err))
    return{
        type:EDIT_POST,
        payload:updated 
    }
}


export const deletePost = id => {
    // console.log('delete in action deletePost',id)
    AxiosWithAuth()
        .delete(`api/stories/${id}`)
        .then(res => console.log('post res in actions', res))
        .catch(err => console.log('err in action add-', err))

    return{
        type:DELETE_POST,
        payload:id
    }
}