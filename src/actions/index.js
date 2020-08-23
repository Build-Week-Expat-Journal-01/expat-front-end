export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const addPost = newPost => {
        console.log('addPost in action',newPost) 
    return{

        type:ADD_POST,
        payload:newPost
    }
}