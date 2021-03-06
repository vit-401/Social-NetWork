const add_Post = 'ADD-POST'
const set_User_Profile = 'SET-USER-PROFILE'

const initislState = {
    posts: [
        {id: 1, post: "Hi how are you", likesCount: 30},
        {id: 2, post: "This is my first post", likesCount: 12},
        {id: 3, post: "Hello Vitaliy i glad to see you", likesCount: 25},
        {id: 4, post: "Hello Dima nise to met you", likesCount: 2},
        {id: 5, post: "Its new POST", likesCount: 500},
    ],
    profile: null,
}

const profileReduser = (state = initislState, action) => {
    switch (action.type) {
        case add_Post: {
            let newPost = {
                id: 5,
                post: action.value.newPost,
                likesCount: 0,
            };
            debugger
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            return stateCopy
        }

        case set_User_Profile: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export const addPostActionCreator = (value) => ({type: add_Post, value})
export const setUserProfile = (profile) => ({type: set_User_Profile, profile})
export default profileReduser