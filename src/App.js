import React from 'react';

// import classes from './App.module.css';
// import ProductPreview from './ProductPreview';
// import ProductDetail from './ProductDetail';
// import Topbar from './Topbar';

import ComA from './ComA';
import { Restaurant } from './Components/Basics/Restaurant';

function App() {
  return (
    <div className="App">
      {/* <Topbar />

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>
        <div className={classes.ProductData}>
          <ProductDetail />
        </div>
      </div> */}

      {/* <ComA /> */}

      <Restaurant />
    </div>
  )


}
export default App;
