import axios from "axios";



const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'b4938de3-b97d-4fe6-92a5-c131c2eebe27'
    }
});

export const userAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteUsers(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postUsers(id){
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getHeader(){
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })

    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
}

// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//         return response.data
//     })
// }


// export const deleteUsers = (id) => {
//     return instance.delete(`follow/${id}`)
//     .then(response => {
//         return response.data
//     })
// }

// export const postUsers = (id) => {
//     return instance.post(`follow/${id}`)
//     .then(response => {
//         return response.data
//     })
// }


// export const getHeader = () => {
//     return instance.get('auth/me')
//     .then(response => {
//         return response.data
//     })

// }

