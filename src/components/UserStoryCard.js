import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import {deletePost, editPost} from '../actions/index'
import {Container, Row, Col, Button} from 'reactstrap';

const UserStoryCard = (props) => {

    const params = useParams();
    const {push} = useHistory();

    // console.log('params',props.posts.id)
                    // id post obj,
    const editFunc=(e) => {
        props.editPost()
        console.log('editfunc in userstoryCard', e)
        push(`addStory/${e.target.id}`)
    }
    // id in param
    const deleteFunc = (e) => {
        console.log('deletefunc in userstorycard',e)
        props.deletePost()

    }


    return(
        <Container>
            <Row>
                <Col>
               {props.posts.map(res => 
                    <div style={{border:'1px solid black'}}>
                    {res.photos.map(pic => 
                    <img src={pic.image_url} key={pic.id} alt={pic.desc}/>   
                )}
                        <h2>{res.title}</h2>
                        <h3>{res.content}</h3>
                        <Button onClick={editFunc}>edit story</Button>
                        <Button color="danger" onClick={deleteFunc}>Delete</Button>        
                    </div>        
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