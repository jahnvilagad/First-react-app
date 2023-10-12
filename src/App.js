import React from 'react';

import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetail from './ProductDetail';
import Topbar from './Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>
        <div className={classes.ProductData}>
          <ProductDetail />
        </div>
      </div>
    </div>
  )


}
export default App;
