import React from 'react'
import {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom'
import {addPost} from '../actions'
import {connect} from 'react-redux'
import {Container, Row, Col, Button, FormGroup, Label, Input, FormText} from 'reactstrap';
// import AxiosWithAuth from '../utils/AxiosWithAuth'

const AddStory = (props) => {
    const {push,goBack} = useHistory()
    const [storyData, setStoryData] = useState({
        content: "",
        teaser: "test teaser",
        title: "",        
        photos:[
            {
                image_url:'data:image/jpeg;base64,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',
                desc:'landscape image'
            }
        ]

    })

    // console.log('storyData', storyData)

    const inputChange =(e)=>{
        setStoryData({
            ...storyData,
            [e.target.name]: e.target.value
        })
    }

    const photoChange = (e) => {
        setStoryData({
            ...storyData,
            photos:[ ...storyData.photos,
               { [e.target.name]: e.target.value}
            ]
        })
    }

    const altChange = (e) => {
        setStoryData({
            ...storyData,
           photos:[storyData.photos.filter(pic => console.log('pic in filter',pic))]
        })
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        props.addPost(storyData)
        goBack()
    }

    const cancelEdit = () => {
        goBack()
    }

    return(
        <Container>
            <div className="form-w-bckgimg">
                <Row>
                    <Col lg="12">
                        <label htmlFor="postText">
                            <br/>
                            Title
                            <br/>
                            <textarea id="title" name='title' placeholder="Title" onChange={inputChange}/>
                        </label>
                    </Col>


                    <Col lg="12">
                                <br/>
                            <label htmlFor="postText">
                                <br/>
                                Caption
                                <br/>
                            <textarea id="caption" name='content' placeholder="Whats on your mind?" onChange={inputChange}/>
                            </label>
                    </Col>
                    

                    <Col lg="12">
                        <label htmlFor="postText">
                             Alt
                            <br/>
                            <Input id="alt" name='desc' placeholder="alt img" onChange={altChange}/>
                        </label>
                    </Col>
                    
                    <Col lg="12">
                    
                        <FormGroup >
                             <label htmlFor="uploadPic">
                                Please input image location: 
                            <br/>
                            <Input type="text" name="image_url" onChange={photoChange}/>
                     <button onClick="">UPLOAD</button>(This is a required field)
                     <br/>
                </label>{/*
                    <br/>
                    <label htmlFor="postText">
                    Alt
                    <br/>
                    <input id="alt" name='desc' placeholder="alt img" onChange={altChange}/>
                </label>
                <label htmlFor="postText">
                <br/>
                    Title
                    <br/>
                    <textarea id="title" name='title' value={storyData.title} placeholder="Title" onChange={inputChange}/>
                </label>
                <label htmlFor="postText">
                <br/>
                    Caption
                    <br/>
                    <textarea id="caption" name='content' value={storyData.content} placeholder="Whats on your mind?" onChange={inputChange}/>
                </label>
                <button>Save</button> */}
             
        
    
                    <Button color="danger" size="lg" block onClick={cancelEdit}>cancel </Button>
                    <Button color="info" size="lg" block onClick={formSubmit}>Save</Button>
                        </FormGroup>
                    </Col>
                
                </Row>
            </div>
            
        
        </Container>

    )
}

const mapStateToProps = state => {
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps,{addPost})(AddStory)




                                