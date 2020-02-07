import React from 'react'
import styles from './ProductList.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function numberFormat(inputNumber) {
  return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ProductItem({ product, onIncrease, onDecrease, onRemove }) {
  const { id, title, count, totalPrice } = product;
  return (
    <>
      <div className={cx('itemDetail__countWithOption')}>
        <div className={cx("itemDetail__optionContainer")}>
          <div className={cx("itemDetail__option--selected")}>{title}</div>
          <div className={cx("itemDetail__icon--cancel")} onClick={() => onRemove(id)}>X</div>
        </div>
        <hr />
        <div className={cx("itemDetail__optionContainer")}>
          <div className={cx("itemDetail__counter")}>
            <button onClick={() => onDecrease(id)} className={cx("itemDetail__count--btn--min")}>-</button>
            <span className={cx("itemDetail__number")}>{count}</span>
            <button onClick={() => onIncrease(id)} className={cx("itemDetail__count--btn--plus")}>+</button>
          </div>
          <span className={cx("itemDetail__itemPrice")}>{numberFormat(totalPrice)}</span>
        </div>
      </div>
      <hr />
    </>
  )
}

function TotalPrice({ totalPrice }) {
  return (
    <div className={cx("totalPrice__container")}>
      <div className={cx("totalPrice__txt")}>총 상품금액</div>
      <div className={cx("totalPrice__price")}>{numberFormat(totalPrice)}원</div>
    </div>
  )
}

function ProductList({ selectList, totalPrice, onIncrease, onDecrease, onRemove }) {
  return (
    <div className={cx('itemDetail__container')}>
      <hr />
      {selectList.map((product, index) => 
        <ProductItem 
          key={index} 
          product={product}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      )}
      <TotalPrice totalPrice={totalPrice} />
    </div>
  )
}

export default ProductList
