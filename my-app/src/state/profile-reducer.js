import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

const initialState = {
    post: [
        { id: 1, message: 'hi ssss', likeCount: 12 },
        { id: 2, message: 'hi You', likeCount: 14 },
        { id: 3, message: 'hi eee', likeCount: 17 },
        { id: 4, message: 'his eee', likeCount: 3 },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getPostThunkCreator = (userId) => {
    return async (dispatch) => {
       const response = await userAPI.getProfile(userId)
        dispatch(setUserProfile(response))
    }
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
   const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
}

export default profileReducer;