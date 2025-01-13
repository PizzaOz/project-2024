import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../state/profile-reducer.js";
import MyPost from './MyPost.jsx'

const MyPostContainer = (props) => {

const state = props.store.getState().profilePage



  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  }


  return (<MyPost addPost={addPost} updateNewPostText={onPostChange} state={state}/>)
    
}

export default MyPostContainer