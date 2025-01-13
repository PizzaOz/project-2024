import { combineReducers, legacy_createStore as createStore} from 'redux'
import dialogReducer from './dialogs-reducer'
import friendsReducer from './friends-reducer'
import profileReducer from './profile-reducer'


let reducers = combineReducers({
    dialogPage: dialogReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
})

const store = createStore(reducers)

export default store