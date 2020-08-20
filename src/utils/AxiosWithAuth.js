import axios from 'axios'

const AxiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return(
        axios.create({
            baseURL:(''),
            headers:{
                Authorization:token
            }
        })
    )
}

export default AxiosWithAuth