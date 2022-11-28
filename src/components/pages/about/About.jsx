import React from 'react';
import styles from './about.module.css';
import signature from '../../../img/signature.png';

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Meow.</h2>
      <p className={styles.text}>
        Meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow.
      </p>
      <p className={styles.text}>
        Meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meowmeow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meowmeow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow.
      </p>
      <p className={styles.text}>
        Meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow.
      </p>
      <p className={styles.text}>
        Meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow meow meow meow meow meow meow meow meow
        meow meow meow meow meow meow.
      </p>
      {/* <span className={styles.signature}>Miaow</span> */}
      <img
        className={styles.signature}
        width='300px'
        src={signature}
        alt='signature'
      />
      {/* <!-- 
			(=^･ω･^=)
			--> */}
    </div>
  );
};

export default About;
