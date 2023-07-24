import { useEffect, } from 'react'
import { useNavigate, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginUser, logout } from '../../../redux/actions/authActions'
import { Spinner } from '../../../components'


const UserAuth_proto = ({ loginUser, logout, isAuthenticated, }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            console.log('loginUser')
            setTimeout(() => { loginUser(navigate) }, 1000)
        } else {
            console.log('logout')
            setTimeout(() => { logout(navigate) }, 1000)
        }
    })

    // if (isAuthenticated) { <Redirect to='/dashboard' /> }

    // if (!isAuthenticated) { <Redirect to='/Landing' /> }

    return <Spinner />
}


UserAuth_proto.propTypes = {
    loginUser: PropTypes.func,
    logout: PropTypes.func,
    navigate: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    // logout: PropTypes.func.isRequired,
    isAuthenticated: state.auth.isAuthenticated,
})

const UserAuth = connect(mapStateToProps, { loginUser, logout, })(UserAuth_proto)
export { UserAuth }
