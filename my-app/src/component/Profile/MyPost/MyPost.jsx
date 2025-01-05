import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post.jsx";

const MyPost = (props) => {

  const postItem = props.state.post.map(m => <Post message={m.message} like={m.likeCount} />)
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postItem}
      </div>
    </div>
  )
}

export default MyPost