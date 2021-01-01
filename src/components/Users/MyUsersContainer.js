import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toogleFetching,
    unFollow
} from "../../Redux/users-reduser";
import UsersAPIComponent from "./UsersAPIComponent";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toogleFetching: (isFetching) => {
//             dispatch(toogleFetchingAC(isFetching))
//         }
//     }
// }
const MyUsersContainer = connect(mapStateToProps,
    {
        follow,
        setCurrentPage,
        setTotalUsersCount,
        setUsers,
        toogleFetching,
        unFollow
    }
    // mapDispatchToProps
)
(UsersAPIComponent)
export default MyUsersContainer