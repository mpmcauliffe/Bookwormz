
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Navigate, Outlet, } from 'react-router-dom'


const SecureRoute_proto = ({ isAuthenticated, }) => {

    return isAuthenticated ? <Outlet /> :  <Navigate to='/' />

    // return ( 
           
    //         render={props => isAuthenticated
    //             ?   (
    //                     <Component { ...props } />
    //             ) : (
    //                     <Navigate to='/' />
    //             )
    //         } />
    // )
}


SecureRoute_proto.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const SecureRoute = connect(mapStateToProps, { })(SecureRoute_proto)
export { SecureRoute }
