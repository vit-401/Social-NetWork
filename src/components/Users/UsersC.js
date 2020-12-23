import React from 'react'
import s from './Users.module.css'
import * as axios from "axios";

class User extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesSize = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i < pagesSize; i++) {
            pages.push(i)
        }
        return <div className={s.content}>
            <div className={s.pagination}>
                {
                    pages.map((p) => {
                        return <span className={this.props.currentPage === p && s.numActive} onClick={() => {
                            this.onPageChenged(p)
                        }}>{p}</span>
                    })
                }
            </div>
            {
                this.props.users.map((u) => <div className={s.user__inner} key={u.id}>
                        <div className={s.user__item}>
                            <img
                                src={u.photos.small || 'https://serc.carleton.edu/download/images/54334/empty_user_icon_256.v2.png'}
                                className={s.user__photo}/>
                            <div>
                                {u.followed ? <button className={s.user__btn_active} onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>Unfollow</button> : <button className={s.user__btn} onClick={() => {
                                    this.props.Follow(u.id)
                                }}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.user__wrapper}>
                            <div className={s.wrapper__item}>
                                <h2>Name: {u.name}</h2>
                                <span className={s.status}>Status: {u.status}</span>
                            </div>
                            <div className={s.wrapper__item}>
                                <h3>Country: {"u.location.country"}</h3>
                                <h3>City: {"u.location.city"}</h3>
                            </div>

                        </div>

                    </div>
                )
            }
        </div>
    }
}

export default User