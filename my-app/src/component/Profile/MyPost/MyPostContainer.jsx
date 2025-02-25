import React from "react";
import { addPostActionCreator} from "../../../state/profile-reducer.js";
import MyPost from './MyPost.jsx'
import { connect } from "react-redux";



const mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }

}

const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default SuperMyPostContainer