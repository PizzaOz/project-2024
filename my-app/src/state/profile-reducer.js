const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    post: [
        { id: 1, message: 'hi ssss', likeCount: 12 },
        { id: 2, message: 'hi You', likeCount: 14 },
        { id: 3, message: 'hi eee', likeCount: 17 },
        { id: 4, message: 'his eee', likeCount: 3 },
    ],
    newPostText: 'hellou text'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: 
            return { 
            ...state,
            newPostText: action.newText,
        }
        case ADD_POST:
            let newPost = {
                id: 5, 
                message: state.newPostText,
                likeCount: 0
            }
        return {
        ...state,
        post: [...state.post, newPost],
        newPostText: '',
        
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;