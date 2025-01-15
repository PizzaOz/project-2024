import React from "react";
import s from './Nav.module.css';
import { NavLink } from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";
// import Friends from "../Friends/Friends";


const Nav = (props) => {
  return (
    <nav className={s.nav} >
      <div>
        <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialog' className={navData => navData.isActive ? s.active : s.item}>Dialog</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/setings' className={navData => navData.isActive ? s.active : s.item} >Setings</NavLink>
      </div>
      <div className={s.friends}>
        <FriendsContainer />
      </div>
    </nav>
  )
}

export default Nav