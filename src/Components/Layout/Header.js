import React from 'react'

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h1>Meal</h1>
                        <HeaderCartButton onClick={props.onShowCart}/> 
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
