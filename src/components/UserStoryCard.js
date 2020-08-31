import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import {deletePost, editPost} from '../actions/index'
import {Container, Row, Col, Button, Alert} from 'reactstrap';

const UserStoryCard = (props) => {

    const {push} = useHistory();

    const editFunc=(e) => {
        console.log('editfunc in userstoryCard', e)
        push(`editStory/${e.target.value}`)
    }

    const deleteFunc = (e) => {
        console.log('deletefunc in userstorycard card id',e.target.value)
        props.deletePost(e.target.value)
    }

    console.log('props in userStoryCard', props.posts)
    return(
        <Container>
            <Row>
                <Col>
               {props.posts.map(res => 
                    <Col key={res.title} value={res.id} style={{backgroundColor:'darkgray'},{paddingTop:'1.5rem'}}>
                    <Alert color="warning" style={{textDecoration:'underline'}}>{res.title}</Alert>
                    
                    {res.photos.map(pic => 
                    <img src={pic.image_url} key={pic.id} value={pic.id} alt={pic.desc} style={{width: '100%'}}/>
                    

                )}
                    <hr/>
                    <Alert color="dark">{res.content}</Alert>
                        
                        <Button value={res.id} onClick={editFunc}>Edit Story</Button>
                        <Button color="danger" value={res.id}onClick={deleteFunc}>DELETE</Button>        
                    </Col>        
                )} 
                </Col>
            </Row>

            
            
            
        </Container>
    )
}

const mapStateToProps = state => {
    return{
        posts:state.posts
    }

}

export default connect(mapStateToProps,{editPost ,deletePost})(UserStoryCard)