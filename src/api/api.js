import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "024c72d0-5556-46a2-a9a9-4eba6c2facdb"
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
    unFollow(userID) {
        return instance.delete(`follow/${userID}`)
            .then(response => {
                return response.data
            })
    },
    follow(userID) {
        return instance.post(`follow/${userID}`)
            .then(response => {
                return response.data
            })
    },
    setUser() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}