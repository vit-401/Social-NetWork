import React from 'react'
import Users from "./UsersC";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChenged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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