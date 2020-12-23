import React from 'react'
import s from './Users.module.css'
import * as axios from "axios";

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    debugger
                    props.setUsers(response.data.items)
                })


        }
    }

    return <div className={s.content}>
        <button onClick={getUsers}>GET Users</button>
        {
            props.users.map((u) => <div className={s.user__inner} key={u.id}>
                    <div className={s.user__item}>
                        <img
                            src={u.photos.small || 'https://avatars0.githubusercontent.com/u/60542954?s=460&u=8a6e35e818005d47b1c4ecc679c6ea9bdba8a360&v=4.jpg"'}
                            className={s.user__photo}/>
                        <div>
                            {u.followed ? <button className={s.user__btn_active} onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button> : <button className={s.user__btn} onClick={() => {
                                props.Follow(u.id)
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
export default Users