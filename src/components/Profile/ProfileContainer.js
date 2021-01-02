import React from "react";
import Profile from "./Profile";
import {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "../../Redux/profile-reduser";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

class ProfileContainer2 extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        userAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <ProfileContainer {...this.props} profile={this.props.profile}/>
        )
    }
}

let dapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer2)
export default connect(dapStateToProps, {setUserProfile})(withUrlDataContainerComponent)

