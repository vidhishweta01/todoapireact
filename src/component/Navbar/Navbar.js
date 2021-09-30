import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SignOut from '../SignOut';
import styles from './Navbar.module.css';

const Navbar = () => {
  const state = useSelector((state) => state.RegisterationReducer);
  useEffect(() => {
    if (state.items) document.getElementById('navbar').style.display = 'block';
    else document.getElementById('navbar').style.display = 'none';
  }, [state]);
  return (
    <nav id="navbar" className={styles.navbar}>
      <NavLink to="/todos/:id" className={styles.button}>HOME</NavLink>
      <SignOut />
    </nav>
  );
};

export default Navbar;
