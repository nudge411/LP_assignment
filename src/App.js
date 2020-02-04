import React from 'react';
import response from "./data.json"
import { ImageTap, ProductDetail, ProductList, SelectOptions, BottomDetail } from './components/index'
import ImageTapContainer from './containers/ImageTapContainer';

import styles from './App.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function App() {
  const { partner, images } = response
  console.log(response)
  return (
    <div className="main">
      <div className="body">
        <div className="left">
          <ImageTapContainer subImages={images}/> 
        </div>
        <div className="right">
          right
        </div>        
      </div>
      <div>
        <BottomDetail productInfo={partner.product_info} partnerInfo={partner.partner_info}/>
      </div>
      {/* <ImageTap /> 
      <ProductDetail />
      <SelectOptions />
      <ProductList /> */}
    </div>
  );
}

export default App;
