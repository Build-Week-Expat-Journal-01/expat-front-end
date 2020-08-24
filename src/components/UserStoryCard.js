import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import {deletePost} from '../actions/index'

const UserStoryCard = (props) => {

    const params = useParams();
    const {push} = useHistory();

    console.log('params',params.id)

    const editPost=() => {
        push(`addStory/${params.id}`)
    }



    return(
        <div style={{border:'1px solid black'}}>
            <div>
            <img src={props.post.postImgURL} alt='alaska'/>
            </div>
            <h3>{props.post.postText}</h3>
            <button onClick={editPost}>edit story</button>
            <button onClick={deletePost}>Delete</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        posts:state.posts
    }

}

export default connect(mapStateToProps,{deletePost})(UserStoryCard)