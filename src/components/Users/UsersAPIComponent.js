import React from 'react'
import Users from "./UsersC";
import {userAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toogleFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toogleFetching(false)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toogleFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChenged={this.onPageChenged}
                   isFetching={this.props.isFetching}
                   toogleFetching={this.props.toogleFetching}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}/>
        </>
    }
}

export default UsersAPIComponent