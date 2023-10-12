import React from "react";

import classes from './ProductPreview.module.css';

const ProductPreview = () => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return (
        <div className={classes.ProductPreview}>
            <img src='https://imgur.com/iOeUBV7.png' />

            <div className={classes.FeatureData}>
                <p>{`${currentHour}:${currentMinute}`}</p>
            </div>

            <div className={classes.HeartBeatSection}>
                <i class="fa-solid fa-heart-pulse"></i>
                <p>78</p>
            </div>
        </div>

    );
}

export default ProductPreview;