import {userAPI} from "../api/api";

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

export const setUserThunkCreator = () => (dispatch) => {
    userAPI.setUser()
        .then(data => {
            debugger
            if (data.resultCode === 0) {
                let {login, id, email} = data.data
                dispatch(setUserData(login, id, email))
            }
        })
}
export default authReduser