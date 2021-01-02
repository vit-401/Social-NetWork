const SET_USER = 'SET_USER'

const initislState = {
    login: null,
    userId: null,
    email: null,
    isAuth: false
}

const authReduser = (state = initislState, action) => {
    switch (action.type) {

        case SET_USER:
            return {
                ...state, ...action.data, isAuth: true
            }
        default:
            return state
    }
}
export const setUserData = (login, userId, email) => ({type: SET_USER, data: {login, userId, email}})
export default authReduser