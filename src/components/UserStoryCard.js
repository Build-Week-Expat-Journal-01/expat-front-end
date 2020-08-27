import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import {deletePost, editPost} from '../actions/index'
import {Container, Row, Col, Button} from 'reactstrap';

const UserStoryCard = (props) => {

    const {push} = useHistory();

    const editFunc=(e) => {
        console.log('editfunc in userstoryCard', e)
        push(`postStory/${e.target.value}`)
    }

    const deleteFunc = (e) => {
        console.log('deletefunc in userstorycard card id',e.target.value)
        props.deletePost(e.target.value)
    }


    return(
        <Container>
            <Row>
                <Col>
               {props.posts.map(res => 
                    <div key={res.title} value={res.id} style={{border:'3px groove black'},{backgroundColor:'darkgray'}}>
                    <h2>{res.title}</h2>
                    <h3>{res.content}</h3>
                    
                    {res.photos.map(pic => 
                    <img src={pic.image_url} key={pic.id} value={pic.id} alt={pic.desc}/>   
                )}
                        
                        <Button value={res.id} onClick={editFunc}>edit story</Button>
                        <Button color="danger" value={res.id}onClick={deleteFunc}>Delete</Button>        
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