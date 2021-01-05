import React from 'react'
import {connect} from "react-redux";
import {
    follow, fullowThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toogleFetching,
    unFollow, unFullowThunkCreator
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

const MyUsersContainer = connect(mapStateToProps,
    {
        setCurrentPage,
        setTotalUsersCount,
        setUsers,
        toogleFetching,
        getUsers: getUsersThunkCreator,
        follow: fullowThunkCreator,
        unFollow: unFullowThunkCreator
    }
)
(UsersAPIComponent)
export default MyUsersContainer