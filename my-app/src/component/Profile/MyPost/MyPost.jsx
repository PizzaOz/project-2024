import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post.jsx";



const MyPost = (props) => {
  
  const newPostElement = React.createRef()

  const postItem = props.state.post.map(m => <Post key={m.id} message={m.message} like={m.likeCount} />)

  const onAddPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)
  }


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postItem}
      </div>
    </div>
  )
}

export default MyPost