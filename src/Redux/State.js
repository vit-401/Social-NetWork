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
            ],
        },
        messages: [
            {id: 1, message: "Hello Andrew"},
            {id: 2, message: "Hello Sasha"},
            {id: 3, message: "Hello Vitaliy"},
            {id: 4, message: ["Hello Dima", "I am hear"]},
            {id: 5, message: ["Hello Pasha", "I am hear too", "Beceose asdafxzc"]},
        ],
    },
    _render() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._render = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._render(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = "";
        this._state.profilePage.newPostText = newText;
        this._render(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._render(this._state);
        } else if
        (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = "";
            this._state.profilePage.newPostText = action.newText;
            this._render(this._state);
        }
    }
}
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

window.store = store;
export default store;
