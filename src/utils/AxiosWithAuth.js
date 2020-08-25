import axios from 'axios'

const AxiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return(
        axios.create({
            baseURL:('https://build-week-expat-journal-1.herokuapp.com/'),
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    )
}

export default AxiosWithAuth