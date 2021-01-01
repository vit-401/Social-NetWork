import React from "react";
import Profile from "./Profile";
import {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "../../Redux/profile-reduser";
import {connect} from "react-redux";
import * as axios from "axios";
import MyPosts from "./MyPosts/MyPosts";
import Textarea from "../Textarea/Textarea";
import withRouter from "react-router-dom/es/withRouter";
//
// const ProfileContainer = () => {
//
//     function onAddPost() {
//         props.dispatch(addPostActionCreator())
//     }
//
//     function onPostChange(text) {
//         let action = updateNewPostTextActionCreator(text);
//         props.dispatch(action)
//     }
//
//     return (
//         <Profile addPost={onAddPost} postChange={onPostChange} posts={props.profilePage.posts}
//                  value={props.profilePage.newPostText}/>
//     )
// };

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data)
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

// export default ProfileContainer;
