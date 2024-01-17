import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
  return (
    <div className={css(styles.Header)}>
      <img
        className={css(styles.Logo)}
        src={require('../assets/holberton_logo.jpg')}
        alt='Holberton logo'
      />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  Header: {
    width: '98%',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    color: '#e0354b',
    borderBottom: '3px solid #e0354b',
  },

  Logo: {
    width: '200px',
    height: '200px',
  },
});
