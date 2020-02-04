import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import response from "./data.json"
import { ImageTap, ProductDetail, ProductList, SelectOptions, BottomDetail } from './components/index'

function App() {
  const { partner, images } = response
  return (
    <div>
      <ImageTap images={images}/> 
      <BottomDetail productInfo={partner.product_info} partnerInfo={partner.partner_info}/>
      {/* <ImageTap /> 
      <ProductDetail />
      <SelectOptions />
      <ProductList /> */}
    </div>
  );
}

export default App;
