import React from "react";
import s from'./Nav.module.css';

const Nav = () => {
  return(
    <nav className={s.nav}>
    <div>
      <a className={s.item}>Profile</a>
    </div>
    <div>
      <a className={s.item}>Message</a>
    </div>
    <div>
      <a className={s.item}>News</a>
    </div>
    <div>
      <a className={s.item}>Music</a>
    </div>
    <div>
      <a className={s.item}>Setings</a>
    </div>
  </nav>
  )
}

export default Nav