import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import dialogReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import { thunk as thunkMiddleware } from "redux-thunk";





let reducers = combineReducers({
    dialogPage: dialogReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store