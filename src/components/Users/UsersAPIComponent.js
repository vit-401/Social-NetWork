import React from 'react'
import * as axios from "axios";
import Users from "./UsersC";
import {setCurrentPage} from "../../Redux/users-reduser";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toogleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toogleFetching(false)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toogleFetching(false)
                this.props.setUsers(response.data.items)
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