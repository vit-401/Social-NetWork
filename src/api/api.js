import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "abc06cb1-a194-487d-92d4-5e6b812ada60"
    }

})
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    toogleFollow(userID) {
        return instance.delete(`follow/${userID}`)
            .then(response=>{
                return response.data
            })
    }
}

