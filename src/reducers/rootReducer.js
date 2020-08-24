import React from 'react'
import {ADD_POST, DELETE_POST,EDIT_POST,FETCHING_START,FETCHING_SUCCESS,FETCHING_FAIL} from '../actions'

const initialState = {
    isFetching:false,
    fetchingErr:'',
    posts:[
        {   id:1,
            postText:'took a trip to alaska',
            postImgURL:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fthumbor%2FfZbJ-EetmPwmORs8Dn8Pog4aL9s%3D%2F900x600%2Fmedia%2Fimg%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2Fa01_aeq00071%2Foriginal.jpg&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2F100746%2F&tbnid=Vmf8iDAYFZWOYM&vet=12ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ..i&docid=otGs_R-RzCLcnM&w=900&h=600&q=img%20alaska&ved=2ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ"
        },
        {
            id:2,
            postText:'took a trip to Oregon',
            postImgURL:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fthumbor%2FfZbJ-EetmPwmORs8Dn8Pog4aL9s%3D%2F900x600%2Fmedia%2Fimg%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2Fa01_aeq00071%2Foriginal.jpg&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2F100746%2F&tbnid=Vmf8iDAYFZWOYM&vet=12ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ..i&docid=otGs_R-RzCLcnM&w=900&h=600&q=img%20alaska&ved=2ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ"
        },
        {
            id:3,
            postText:'took a trip to BC',
            postImgURL:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fthumbor%2FfZbJ-EetmPwmORs8Dn8Pog4aL9s%3D%2F900x600%2Fmedia%2Fimg%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2Fa01_aeq00071%2Foriginal.jpg&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fphoto%2F2014%2F05%2F1964-alaskas-good-friday-earthquake%2F100746%2F&tbnid=Vmf8iDAYFZWOYM&vet=12ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ..i&docid=otGs_R-RzCLcnM&w=900&h=600&q=img%20alaska&ved=2ahUKEwiZxd3GsavrAhXIsFMKHak-DZQQMygDegUIARCyAQ"
        }
    ]}

export const rootReducer = ( state = initialState, action) => {
    switch(action.type){

        case FETCHING_START:
            return{
                ...state,
                isFetching:true,
                fetchingErr:''
            }
        
        case FETCHING_SUCCESS:
            return{
                ...state,
                isFetching:false,
                fetchingErr:''
            }

        case FETCHING_FAIL:
            return{
                ...state,
                isFetching:false,
                fetchingErr:'Fetching error'
            }

        case ADD_POST:
            console.log("ADD in reducer")
            console.log("payload",action.payload.postText)

            return {...state,
            posts:[...state.posts,{
                id:action.payload.postID,
                postText:action.payload.postText,
                postImgURL:action.payload.postImgURL       
            }]
            }

        case EDIT_POST:
            return{
                ...state
            }

        case DELETE_POST:
            return{...state}
         
    }

    return state
}

