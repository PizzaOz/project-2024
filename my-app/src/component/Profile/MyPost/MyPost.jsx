import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post.jsx";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../state/state.js";

const MyPost = (props) => {

  const newPostElement = React.createRef()

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    const text = newPostElement.current.value 
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  const postItem = props.state.post.map(m => <Post message={m.message} like={m.likeCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postItem}
      </div>
    </div>
  )
}

export default MyPost