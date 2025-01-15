import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../state/profile-reducer.js";
import MyPost from './MyPost.jsx'
import { connect } from "react-redux";

// const MyPostContainer = (props) => {

// const state = props.store.getState().profilePage



//   const addPost = () => {
//     props.store.dispatch(addPostActionCreator())
//   }

//   const onPostChange = (text) => {
//     const action = updateNewPostTextActionCreator(text)
//     props.store.dispatch(action)
//   }


//   return (<MyPost addPost={addPost} updateNewPostText={onPostChange} state={state}/>)

// }

const mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    }
  }

}

const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default SuperMyPostContainer