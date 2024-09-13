import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

export default function Navbar(){
    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}><img  src={Logo} alt="logo" width={67}/></div>
                 <SearchBar search={"Search a song of your choice"}/>
                <Button children="Give Feedback"/>
            </nav>
        </>
    )
}