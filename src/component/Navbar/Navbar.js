import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut';
import styles from './Navbar.module.css';

const Navbar = () => {
  const state = useSelector((state) => state.RegisterationReducer);
  useEffect(() => {
    if (state.items || localStorage.getItem('token')) document.getElementById('navbar').style.display = 'block';
    else if (!localStorage.getItem('token')) document.getElementById('navbar').style.display = 'none';
  }, [state]);
  return (
    <nav id="navbar" className={styles.navbar}>
      <Link to="/todos/:id" className={styles.button}>HOME</Link>
      <SignOut />
    </nav>
  );
};

export default Navbar;
