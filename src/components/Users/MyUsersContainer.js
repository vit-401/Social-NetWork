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

const MyUsersContainer = connect(mapStateToProps,
    {
        follow,
        setCurrentPage,
        setTotalUsersCount,
        setUsers,
        toogleFetching,
        unFollow
    }
)
(UsersAPIComponent)
export default MyUsersContainer