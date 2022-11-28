import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <div className={styles.container}>
          <span>
            <Link className={styles.item} to='/'>
              <img
                src='https://configcat.com/images/shared/cat-white.svg'
                alt='logo'
              />
              Catbitt
            </Link>
          </span>
          <ul className={styles.list}>
            <li>
              <Link className={styles.item} to='/about'>
                about
              </Link>
            </li>
            <li>
              <Link className={styles.item} to='/signup'>
                sign up
              </Link>
            </li>
            <li>
              <Link className={styles.item} to='/login'>
                login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
