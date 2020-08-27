import React from 'react'
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {addPost} from '../actions'
import {connect} from 'react-redux'
import {Container, Row, Col, Button, FormGroup, Label, Input, FormText} from 'reactstrap';
// import AxiosWithAuth from '../utils/AxiosWithAuth'

const AddStory = (props) => {
    const {push,goBack} = useHistory()

    const [storyData, setStoryData] = useState({
        content: "test content",
        teaser: "test teaser",
        title: "test title 2",        
        photos:[
            {
                image_url:'testerInInputForm',
                desc:'TesterInInputForm'
            }
        ]

    })

    console.log('storyData', storyData)

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
                    
                        <FormGroup onSubmit={formSubmit}>
                            <label htmlFor="uploadPic">
                                Please input image location: 
                            <br/>
                            <Input type="text" name="image_url" onChange={photoChange}/>
                    {/* <button onClick="">UPLOAD</button>(This is a required field) */}
                            <br/>
                            </label>    
                    <Button size="lg" onClick={cancelEdit}>cancel </Button>
                    <Button>Save</Button>
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




                                