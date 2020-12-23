import React from "react";
import ProfileCss from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Textarea from "../Textarea/Textarea";


const Profile = (props) => {
    const newPostElement = React.createRef();
    let postsElement = props.posts.map((item) => (
        <MyPosts text={item.post} key ={item.id} likes={item.likesCount}/>
    ));

    function addPost() {

        props.onAddPost()
    }

    function postChange() {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }

    return (
        <>
            <div className={ProfileCss.content}>
                <div className={ProfileCss.content__bg}/>
                <div className={ProfileCss.content__wrap}>
                    <div className={ProfileCss.content__img}/>
                    <div className={ProfileCss.content__info}>
                        <h1>Prisyagnuk Vitaliy</h1>
                        <p>date of Birsday: 19 May</p>
                        <p>City: Kiyev</p>
                        <p>WebSite: facebook.com</p>
                    </div>
                </div>
                <div className={ProfileCss.content__posts}>
                    <div className={ProfileCss.content__postsTitle}>My posts</div>
                    <Textarea
                        placeholder={"Some text"}
                        textTextarea="Add New post"
                        onChange={postChange}
                        getRef={newPostElement}
                        value={props.value}
                        onClick={addPost}
                        textBtn='Add post'
                    />
                    {postsElement}
                </div>
            </div>
        </>
    );
};

export default Profile;
