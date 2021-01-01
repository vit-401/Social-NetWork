const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOOGLE_FETCH = 'TOOGLE_FETCH'

const initislState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReduser = (state = initislState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UN_FOLLOW:
            return {

                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOOGLE_FETCH:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}
// AC = action creator
// export const followAC = (userId) => ({type: FOLLOW, userId})
// export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId})
// export const setUsersAC = (users) => ({type: SET_USERS, users})
// export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
// export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, count: totalUsersCount})
// export const toogleFetchingAC = (isFetching) => ({type: TOOGLE_FETCH, isFetching})
export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UN_FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, count: totalUsersCount})
export const toogleFetching = (isFetching) => ({type: TOOGLE_FETCH, isFetching})
export default usersReduser