import React from 'react'
import s from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesSize = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesSize; i++) {
        pages.push(i)
    }

    return <>

        <div className={s.content}>
            {/*{props.isFetching ? <Preloader/> : null}*/}
            <div className={s.pagination}>
                {
                    pages.map((p) => {
                        return <span className={props.currentPage === p && s.numActive} onClick={() => {
                            props.onPageChenged(p)
                        }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map((u) => <div className={s.user__inner} key={u.id}>
                        <div className={s.user__item}>
                            <NavLink to={'/profile/' + u.id}>
                                {
                                    props.isFetching ?
                                        <Preloader/> : <img
                                            src={u.photos.small || 'https://serc.carleton.edu/download/images/54334/empty_user_icon_256.v2.png'}
                                            className={s.user__photo}/>
                                }
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button className={s.user__btn_active} onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "abc06cb1-a194-487d-92d4-5e6b812ada60"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unFollow(u.id)
                                                }
                                            })
                                    }}>Unfollow</button>
                                    : <button className={s.user__btn} onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "abc06cb1-a194-487d-92d4-5e6b812ada60"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
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
    </>
}
export default Users