import React from 'react'
import {ADD_POST, DELETE_POST,EDIT_POST} from '../actions'

const initialState = {
    posts:[
        {   postID:1,
            story:'took a trip to alaska',
            img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fthumbor%2FfZbJ-EetmPwmORs8Dn8Pog4aL9s%3D%2F900x600%2Fmedia%2Fimg%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2Fa01_aeq00071%2Foriginal.jpg&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2F100746%2F&tbnid=Vmf8iDAYFZWOYM&vet=12ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ..i&docid=otGs_R-RzCLcnM&w=900&h=600&q=img%20alaska&ved=2ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ"
        },
        {
            postID:2,
            story:'took a trip to Oregon',
            img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fthumbor%2FfZbJ-EetmPwmORs8Dn8Pog4aL9s%3D%2F900x600%2Fmedia%2Fimg%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2Fa01_aeq00071%2Foriginal.jpg&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2F100746%2F&tbnid=Vmf8iDAYFZWOYM&vet=12ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ..i&docid=otGs_R-RzCLcnM&w=900&h=600&q=img%20alaska&ved=2ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ"
        },
        {
            postID:3,
            story:'took a trip to BC',
            img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fthumbor%2FfZbJ-EetmPwmORs8Dn8Pog4aL9s%3D%2F900x600%2Fmedia%2Fimg%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2Fa01_aeq00071%2Foriginal.jpg&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2F100746%2F&tbnid=Vmf8iDAYFZWOYM&vet=12ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ..i&docid=otGs_R-RzCLcnM&w=900&h=600&q=img%20alaska&ved=2ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ"
        }
    ]}

export const rootReducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            console.log("ADD in reducer")
            console.log("payload",action.payload.postText)

            return {...state,
            posts:[...state.posts,{
                postID:action.payload.postID,
                story:action.payload.postText,
                img:action.payload.postImgURL
                            
            }]
            }

         
    }

    return state
}
