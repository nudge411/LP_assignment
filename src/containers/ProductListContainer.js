import React from 'react'
import ProductList from '../components/ProductList'
import { useSelector, useDispatch } from "react-redux"
import { increase, decrease } from '../modules/selectOptions';

function ProductListContainer() {
  const { selectList } =  useSelector(state => state.selectOptions);
  const dispatch = useDispatch()

  const onIncrease = (id) => dispatch(increase(id))
  const onDecrease = (id) => dispatch(decrease(id))
  const totalPrice = !!selectList.length ? (
    selectList.map(product => product.totalPrice).reduce((pre, cur)=> (pre + cur))
   ) : 0

  // const onRemove = (id) => dispatch(delete(id))

  return <ProductList 
    selectList={selectList}
    totalPrice= {totalPrice}
    onIncrease={onIncrease}
    onDecrease={onDecrease}
    // onRemove={onRemove}
  />;
}

export default ProductListContainer

