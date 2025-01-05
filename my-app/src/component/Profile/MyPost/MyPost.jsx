import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";


const messageData = [
  {id: 1, message: 'hi ssss', likeCount: 12},
  {id: 2, message: 'hi You', likeCount: 14},
  {id: 3, message: 'hi eee', likeCount: 17},
  {id: 4, message: 'his eee', likeCount: 3},
]

const post = messageData.map( m => <Post message={m.message} like={m.likeCount} />)

const MyPost = (props) => {
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
        {post}
      </div>
    </div>
  )
}

export default MyPost