import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";

const add_Post = 'ADD-POST'
const update_New_Post_Text = 'UPDATE-NEW-POST-TEXT'
const update_New_Massage_Body = 'UPDATE-NEW-Message-TEXT'
const send_Message = 'Send_MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi how are you", likesCount: 30},
                {id: 2, post: "This is my first post", likesCount: 12},
                {id: 3, post: "Hello Vitaliy i glad to see you", likesCount: 25},
                {id: 4, post: "Hello Dima nise to met you", likesCount: 2},
                {id: 5, post: "Its new POST", likesCount: 500},
            ],
            newPostText: "",
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: "Andrew"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Vitaliy"},
                {id: 4, name: "Dima"},
                {id: 5, name: "Pasha"},
                {id: 6, name: "kate"},
            ],
            messages: [
                {id: 1, message: "Hello Andrew"},
                {id: 2, message: "Hello Sasha"},
                {id: 3, message: "Hello Vitaliy"},
                {id: 4, message: "id-4"},
                {id: 5, message: "id-5"},
                {id: 6, message: "id-6"},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _render
        () {
        console.log("state changed");
    }
    ,

    getState() {
        return this._state;
    }
    ,
    subscribe(observer) {
        this._render = observer;
    }
    ,

    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._render(this._state);
    }
    ,
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = "";
        this._state.profilePage.newPostText = newText;
        this._render(this._state);
    }
    ,
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogPage = dialogsReduser(this._state.dialogPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);
        this._render(this._state)
    }
}



window.store = store;
export default store;
