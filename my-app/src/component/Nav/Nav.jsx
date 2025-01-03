import React from "react";
import s from'./Nav.module.css';

const Nav = () => {
  return(
    <nav className={s.nav}>
    <div className={s.item}>
      <a href='/profile'>Profile</a>
    </div>
    <div className={s.item}>
      <a href='/dialog'>Dialog</a>
    </div>
    <div className={s.item}>
      <a href= '/news'>News</a>
    </div>
    <div className={s.item}>
      <a href='/music' >Music</a>
    </div>
    <div className={s.item}>
      <a href='/setings' >Setings</a>
    </div>
  </nav>
  )
}

export default Nav