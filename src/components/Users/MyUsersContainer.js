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
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import Massages from "../Massages/Massages";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
let AuthRedirectComponent =  withAuthRedirect(UsersAPIComponent)
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

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
(AuthRedirectComponent)
export default MyUsersContainer