
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useNavigate, } from 'react-router-dom'
import { AppButton } from '..'
import { joinClub, leaveClub, } from '../../redux/actions/clubActions'


const MemberButton_proto = ({ isUserAMember, joinClub, leaveClub, currentId, clubName, }) => {
    const navigate                       = useNavigate()
    
    const handleMemberButtonCLick = () => {
        if (!isUserAMember) { 
            joinClub(clubName, currentId)
            return
        }
        leaveClub(clubName, currentId, navigate)
    }

    return (
        <AppButton
            $alertButton={isUserAMember}
            onClick={handleMemberButtonCLick}
        >{isUserAMember ? 'Leave Club' : 'Join Club'}</AppButton>
    )
}

MemberButton_proto.propTypes = {
    joinClub: PropTypes.func.isRequired,
    leaveClub: PropTypes.func.isRequired,
    isUserAMember: PropTypes.bool.isRequired,
    currentId: PropTypes.string.isRequired,
    clubName: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    joinClub: state.clubs.joinClub,
    leaveClub: state.clubs.leaveClub,
    isUserAMember: state.clubs.isUserAMember,
})


const MemberButton = connect(mapStateToProps, { joinClub, leaveClub, })(MemberButton_proto)
export { MemberButton }
