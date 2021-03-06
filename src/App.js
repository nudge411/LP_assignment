import React from 'react';
import response from "./data.json"
import { ProductDetail, ProductList, SelectOptions, BottomDetail } from './components/index'
import ImageTapContainer from './containers/ImageTapContainer';
import SelectOptionsContainer from './containers/SelectOptionsContainer'
import ProductListContainer from './containers/ProductListContainer'

import styles from './App.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function App() {
  const { partner, images, name, price, discount_price, discount_rate, options } = response;
  return (
    <div className="main">
      <div className="body">
        <div className="left">
          <ImageTapContainer subImages={images}/> 
        </div>
        <div className="right">
          <ProductDetail 
            name={name} 
            price={price}
            discount_price={discount_price}
            discount_rate={discount_rate} 
          />
          <p className={cx('option-txt')}>옵션선택</p>
          <SelectOptionsContainer options={options} />
          <ProductListContainer />
        </div>
      </div>
      <div>
        <BottomDetail productInfo={partner.product_info} partnerInfo={partner.partner_info}/>
      </div>
    </div>
  );
}

export default App;
