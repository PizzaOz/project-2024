import { combineReducers, legacy_createStore as createStore } from 'redux'
import dialogReducer from './dialogs-reducer'
import friendsReducer from './friends-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'



let reducers = combineReducers({
    dialogPage: dialogReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
})

const store = createStore(reducers)
window.store = store

export default store