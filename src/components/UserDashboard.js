import React,{useEffect} from 'react'
import AxiosWithAuth from '../utils/AxiosWithAuth'
import axios from 'axios'
import UserStoryCard from './UserStoryCard'
import {Container, Row, Col, Button} from 'reactstrap';
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchData} from '../actions/index'

const UserDashboard = (props) => {

    const {push} = useHistory()

    useEffect(()=>{
        props.fetchData()
    },[])

    const logout=() => {
        localStorage.clear()
        push('/')
    }

    const addStory = () => {
        push('/postStory')
    }

    const homePage = () => {
        
    }

    return(
        <Container>

            <div className="form-w-bckgimg">
               <Row>
                {/*extra Col tags for positioning*/}
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col sm="12" lg="2">
                    <Button color="danger" onClick={logout}>Logout</Button>
                    <a href="https://frosty-sinoussi-0dec32.netlify.app/index.html"><Button color="info">Home</Button></a> 
                </Col>
                </Row>
                <h1>User Dashboard</h1>
                <Button color="info" onClick={addStory}>Add Story</Button>
                <br/>
                <br/>
                <UserStoryCard/> 
            </div>

            
        
        </Container>
    )
}

const mapStateToProps = state => {
    return{
        posts: state.posts
    }

}

export default connect(mapStateToProps,{fetchData})(UserDashboard)