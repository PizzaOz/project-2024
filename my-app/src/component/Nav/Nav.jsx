import React from "react";
import s from'./Nav.module.css';
import { NavLink } from "react-router-dom";
console.log(s)

const Nav = () => {
  return(
    <nav className={s.nav}>
    <div>
      <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
    </div>
    <div>
      <NavLink to='/dialog' className = { navData => navData.isActive ? s.active : s.item }>Dialog</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to= '/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/setings' className = { navData => navData.isActive ? s.active : s.item } >Setings</NavLink>
    </div>
  </nav>
  )
}

export default Nav