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
        push('/addStory')
    }

    return(
        <Container>
            <Row>
                {/*extra Col tags for positioning*/}
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col sm="12" lg="2">
                    <Button color="danger" onClick={logout}>Logout</Button>
                </Col>
            </Row>
        
        <h1>User DAAAAAAASH</h1>
        <Button color="info" onClick={addStory}>Add Story</Button>
        <UserStoryCard/>
        
        </Container>
    )
}

const mapStateToProps = state => {
    return{
        posts: state.posts
    }

}

export default connect(mapStateToProps,{fetchData})(UserDashboard)