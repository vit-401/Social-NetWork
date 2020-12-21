import React from "react";
import Profile from "./Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reduser";
import {connect} from "react-redux";

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


export default ProfileContainer;
