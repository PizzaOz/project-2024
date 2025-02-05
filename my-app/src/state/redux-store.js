import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import dialogReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import { thunk as thunkMiddleware } from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';





let reducers = combineReducers({
    dialogPage: dialogReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store