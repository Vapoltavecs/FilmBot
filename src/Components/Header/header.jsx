import React from 'react'
import classes from './header.module.css'
import { NavLink } from "react-router-dom";


let Header = (props) => {

    let headerBurger = React.createRef()

    let MobileMenu = React.createRef()


    let openMenu = () =>{
        headerBurger.current.classList.toggle(classes.active)

        MobileMenu.current.classList.toggle(classes.active)


        
    }



    let hiddenMenu  = () =>{
        headerBurger.current.classList.remove(classes.active)

        MobileMenu.current.classList.remove(classes.active)
    }

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.mobileTitle}>Название <span>Комании</span></div>
                <div className={classes.menu}>
                    <NavLink to="/about" className={classes.items} activeClassName={classes.active}>О нас </NavLink>
                    <NavLink to="/products" className={classes.items} activeClassName={classes.active}>Продукты</NavLink>
                    <NavLink to="/kino" className={classes.items} activeClassName={classes.active} >Кино </NavLink>
                </div>


                <div className={classes.header__burger} ref = {headerBurger} onClick = {() => openMenu()}><span></span></div>
            </header >
            <div className={classes.mobile__menu} ref = {MobileMenu}>
                <NavLink to="/about" className={classes.items} activeClassName={classes.active}onClick = {() =>  hiddenMenu()}>О нас </NavLink>
                <NavLink to="/products" className={classes.items} activeClassName={classes.active}onClick = {() =>  hiddenMenu()}>Продукты</NavLink>
                <NavLink to="/kino" className={classes.items} activeClassName={classes.active} onClick = {() =>  hiddenMenu()}>Кино </NavLink>
            </div>
        </div>
    )
}
export default Header