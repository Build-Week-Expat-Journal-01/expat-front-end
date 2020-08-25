import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import {deletePost} from '../actions/index'

const UserStoryCard = (props) => {

    const params = useParams();
    const {push} = useHistory();

    // console.log('params',props.posts.id)

    const editPost=() => {
        push(`addStory/${props.posts.id}`)
    }

    return(
        <>

            
            {props.posts.map(res => 
                    <div style={{border:'1px solid black'}}>
                    {res.photos.map(pic => 
                    <img src={pic.image_url} key={pic.id} alt={pic.desc}/>   
                )}
                        <h2>{res.title}</h2>
                        <h3>{res.content}</h3>
                        <button onClick={editPost}>edit story</button>
                        <button onClick={deletePost}>Delete</button>        
                    </div>        
                )}
            
        </>
    )
}

const mapStateToProps = state => {
    return{
        posts:state.posts
    }

}

export default connect(mapStateToProps,{deletePost})(UserStoryCard)