import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
  console.log('Header',props)
  return (
    <header className={s.header}>
        <img src="https://gorodovoy.ru/k2/news/577x320/upload//upload/news/260327735335.jpg" alt=""/>
        
        <div className={s.loginBlock}>
          {props.isAuth ? props.login :
        <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
  )
}

export default Header