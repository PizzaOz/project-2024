import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src="https://ybis.ru/wp-content/uploads/2023/09/milye-kotiki-16.webp"></img>
      {props.message}
      <div>Like{props.like}</div>
    </div>
  )
}

export default Post