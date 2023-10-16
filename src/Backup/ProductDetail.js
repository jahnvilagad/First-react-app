import React from 'react';

import ProductData from './ProductData';

import classes from './productDetail.module.css';

const ProductDetail = () => {
    return (
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
            <p className={classes.ProductDescription}>{ProductData.description}</p>

            <h2 className={classes.SectionHeading}>Select Color</h2>
            <div>
                <img className={[classes.ProductImage, classes.SelectedProductImage].join(" ")} src='https://imgur.com/iOeUBV7.png' alt='Black Strap' />
                <img className={classes.ProductImage} src='https://imgur.com/PTgQlim.png' alt='Red Color Watch' />
                <img className={classes.ProductImage} src='https://imgur.com/Mplj1YR.png' alt='Blue Strap' />
                <img className={classes.ProductImage} src='https://imgur.com/xSIK4M8.png' alt='Purple Strap' />
            </div>

            <h2 className={classes.SectionHeading}>Featured</h2>
            <div className=''>
                <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(" ")}>Time</button>
                <button className={classes.FeatureItem}>Heart Rate</button>
            </div>

            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    );
}

export default ProductDetail;