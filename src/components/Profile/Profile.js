import React from "react";
import ProfileCss from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/Preloader/Preloader";
import { Redirect } from "react-router-dom";
import ProfileCity from "./ProfileCity";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../validate/validate";
const maxLength50 = maxLengthCreator(50)
const ProfileForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required,maxLength50]} name={"newPost"} />
            <button>Отправить</button>
        </form>
    )
}

const ProfileReduxForm = reduxForm({form: 'profile'})(ProfileForm)

const Profile = (props) => {
    let postsElement = props.posts.map((item) => (
        <MyPosts text={item.post} key={item.id} likes={item.likesCount}/>
    ));

    function addPost(value) {

        props.onAddPost(value)
    }
    if (!props.profile) {
        return <Preloader/>
    }
    if (props.isAuth == false) return <Redirect to={"/login"}/>
    return (
        <>
            <div className={ProfileCss.content}>
                <div className={ProfileCss.content__bg}/>
                <div className={ProfileCss.content__wrap}>
                    <img src={props.profile.photos.large} className={ProfileCss.content__img}/>
                    <div className={ProfileCss.content__info}>
                        <h1>Prisyagnuk Vitaliy</h1>
                        <p>date of Birsday: 19 May</p>
                        <p>
                            < ProfileCity/>
                        </p>
                        <p>WebSite: facebook.com</p>
                    </div>
                </div>
                <div className={ProfileCss.content__posts}>
                    <div className={ProfileCss.content__postsTitle}>My posts</div>
                    {/*<Textarea*/}
                    {/*    placeholder={"Some text"}*/}
                    {/*    textTextarea="Add New post"*/}
                    {/*    onChange={postChange}*/}
                    {/*    getRef={newPostElement}*/}
                    {/*    value={props.value}*/}
                    {/*    onClick={addPost}*/}
                    {/*    textBtn='Add post'*/}
                    {/*/>*/}
                    <ProfileReduxForm onSubmit={addPost}/>
                    {postsElement}
                </div>
            </div>
        </>
    );
};

export default Profile;
