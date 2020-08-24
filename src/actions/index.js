
import AxiosWithAuth from '../utils/AxiosWithAuth'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const addPost = newPost => {
        console.log('addPost in action',newPost.postText) 
        AxiosWithAuth()
            .post('addStory',newPost.postText)
            .then(res => console.log('res', res))
            .catch(err => console.log('err', err))
    return{

        type:ADD_POST,
        payload:newPost
    }
}