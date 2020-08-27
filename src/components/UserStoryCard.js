import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import {deletePost, editPost} from '../actions/index'

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
        <>
            {props.posts.map(res => 
                        // console.log('posts map is userstoryCard', res)
                    <div key={res.title} value={res.id} style={{border:'1px solid black'}}>
                    {res.photos.map(pic => 
                    <img src={pic.image_url} key={pic.id} value={pic.id} alt={pic.desc}/>   
                )}
                        <h2>{res.title}</h2>
                        <h3>{res.content}</h3>
                        <button value={res.id} onClick={editFunc}>edit story</button>
                        <button value={res.id}onClick={deleteFunc}>Delete</button>        
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

export default connect(mapStateToProps,{editPost ,deletePost})(UserStoryCard)