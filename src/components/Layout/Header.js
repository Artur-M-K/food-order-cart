import React from 'react';
import styles from './Header.module.css';

import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onClick}>Cart</HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImg} alt='meals' />
            </div>
        </>
    )
}

export default Header;
