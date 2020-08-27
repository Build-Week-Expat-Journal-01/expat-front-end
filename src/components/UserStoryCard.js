import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import {deletePost, editPost} from '../actions/index'
import {Container, Row, Col, Button} from 'reactstrap';

const UserStoryCard = (props) => {

    // const params = useParams();
    const {push} = useHistory();
    // console.log('useParams in storyCard',params)

    const editFunc=(e) => {
        console.log('editfunc in userstoryCard', e)
        push(`postStory/${e.target.value}`)
    }
    // id in param
    const deleteFunc = (e) => {
        console.log('deletefunc in userstorycard card id',e.target.value)
        props.deletePost(e.target.value)

    }


    return(
        <Container>
            <Row>
                <Col>
               {props.posts.map(res => 
                    <div style={{border:'1px solid black'}}>
                    {res.photos.map(pic => 
                    <img src={pic.image_url} key={pic.id} value={pic.id} alt={pic.desc}/>   
                )}
                        <h2>{res.title}</h2>
                        <h3>{res.content}</h3>
                        <button value={res.id} onClick={editFunc}>edit story</button>
                        <button value={res.id}onClick={deleteFunc}>Delete</button>        
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