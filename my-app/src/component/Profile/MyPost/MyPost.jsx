import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post.jsx";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators.js";
import { TextArea } from "../../common/FormsControls/FormsControl.js";



const MyPost = (props) => {

  const newPostElement = React.createRef()

  const postItem = props.state.post.map(m => <Post key={m.id} message={m.message} like={m.likeCount} />)


  const addNewPost = (values) => {
    props.addPost(values.newPostText)
  }


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost}/>
      <div className={s.posts}>
        {postItem}
      </div>
    </div>
  )
}
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPostText' component={TextArea} validate={[required, maxLength10]}/>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPost