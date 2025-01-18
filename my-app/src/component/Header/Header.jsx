import React from "react";
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      {/* <div>
        <img src="https://gorodovoy.ru/k2/news/577x320/upload//upload/news/260327735335.jpg" alt=""></img>
      </div> */}
        <div className={s.loginBlock}>Login</div>
    </header>
  )
}

export default Header