const add_Post = 'ADD-POST'
const update_New_Post_Text = 'UPDATE-NEW-POST-TEXT'

const initislState = {
    posts: [
        {id: 1, post: "Hi how are you", likesCount: 30},
        {id: 2, post: "This is my first post", likesCount: 12},
        {id: 3, post: "Hello Vitaliy i glad to see you", likesCount: 25},
        {id: 4, post: "Hello Dima nise to met you", likesCount: 2},
        {id: 5, post: "Its new POST", likesCount: 500},
    ],
    newPostText: "",
}

const profileReduser = (state = initislState, action) => {
    switch (action.type) {
        case add_Post: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy
        }

        case update_New_Post_Text: {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: add_Post})
export const updateNewPostTextActionCreator = (text) => ({type: update_New_Post_Text, newText: text})
export default profileReduser