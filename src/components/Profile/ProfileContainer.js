import React from "react";
import Profile from "./Profile";
import {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "../../Redux/profile-reduser";
import {connect} from "react-redux";
import * as axios from "axios";
import MyPosts from "./MyPosts/MyPosts";
import Textarea from "../Textarea/Textarea";
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // debugger
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
export default connect(dapStateToProps, {setUserProfile})(ProfileContainer2)

// export default ProfileContainer;
