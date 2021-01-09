import React from 'react'
import {connect} from "react-redux";
import {
    fullowThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toogleFetching,
    unFullowThunkCreator
} from "../../Redux/users-reduser";
import UsersAPIComponent from "./UsersAPIComponent";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersAPIComponent)

export default compose(withAuthRedirect,connect(mapStateToProps,
    {
        setCurrentPage,
        setTotalUsersCount,
        setUsers,
        toogleFetching,
        getUsers: getUsersThunkCreator,
        follow: fullowThunkCreator,
        unFollow: unFullowThunkCreator
    }
))(AuthRedirectComponent)

// const MyUsersContainer = connect(mapStateToProps,
//     {
//         setCurrentPage,
//         setTotalUsersCount,
//         setUsers,
//         toogleFetching,
//         getUsers: getUsersThunkCreator,
//         follow: fullowThunkCreator,
//         unFollow: unFullowThunkCreator
//     }
// )
// (AuthRedirectComponent)
// export default MyUsersContainer