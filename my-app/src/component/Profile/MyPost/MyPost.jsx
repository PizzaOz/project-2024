import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post.jsx";

const MyPost = (props) => {
  const newPostElement = React.createRef()

  const textArea = () => {
    const text = newPostElement.current.value 
    props.addPost(text)
  }

  const postItem = props.state.post.map(m => <Post message={m.message} like={m.likeCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={textArea}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postItem}
      </div>
    </div>
  )
}

export default MyPost