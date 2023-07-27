import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import { LOGIN, LOGOUT, ERROR, TRIGGER_AUTH_ERROR, } from '../types'


const config = { headers: { 'Content-Type': 'application/json' } }

/* register user */
export const registerUser = (navigate, userData) => async dispatch => {
    // console.log(navigate, userData);
    try {
        const res = await axios.post('/auth/register', userData, config)
        // console.log(res)
        
        if (res.data.message) {
            navigate('/')
            dispatch({ type: TRIGGER_AUTH_ERROR, payload: 'User already exists!' })
            return
        }
        if (typeof res.data.token === 'undefined') {
            navigate('/')
            dispatch({ type: ERROR, payload: 'Something went wrong.', })
            return
        }
        
        localStorage.setItem('token', res.data.token)
        setUser()
        navigate('/dashboard')    
        dispatch({ type: LOGIN })
        
    } catch (e) {
        navigate('/')
        console.log(e)
        dispatch({ type: ERROR })
    }
}

/* authenticates user */
export const loginUser = (navigate, userData) => async dispatch => {
    console.log(userData);
    try {
        const res = await axios.post('http://localhost:5000/auth/token', userData, config)
        console.log(res)
        if (typeof res.data.token === 'undefined') {
            navigate('/')
            dispatch({ type: ERROR })
            return
        }
        
        localStorage.setItem('token', res.data.token)
        setUser()
        navigate('/dashboard')    
        dispatch({ type: LOGIN })
        
    } catch (e) {
        navigate('/')
        dispatch({ type: ERROR })
    }
}


/* authenticates user */
export const login_DEP = navigate => async dispatch => {
    try {
        const res = await axios.get('/auth/token')
        // console.log(res)
        if (typeof res.data.token === 'undefined') {
            navigate('/')
            dispatch({ type: ERROR })
            return
        }
        
        localStorage.setItem('token', res.data.token)
        setUser()
        navigate('/dashboard')    
        dispatch({ type: LOGIN })
        
    } catch (e) {
        navigate('/')
        dispatch({ type: ERROR })
    }
}

/* logs out user */
export const logout = navigate => async dispatch => {
    try {
        localStorage.removeItem('token')
        navigate('/') 
        dispatch({ type: LOGOUT })
        // const name = 'connect.sid'
        // document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        // const res = await axios.get('/auth/logout')

        // console.log(res)
                
    } catch (e) {
        navigate('/dashboard')
        dispatch({ type: ERROR })
    }
}

export const triggerAuthError = (message = 'Something went wrong.', navigate) => dispatch => {
    navigate('/') 
    dispatch({ type: TRIGGER_AUTH_ERROR, payload: message })
}

/* SET USER */
const setUser = () => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
}


