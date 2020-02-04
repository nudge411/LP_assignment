import React from 'react'
import styles from './ProductDetail.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function numberFormat(inputNumber) {
  return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ProductDetail({ name, price, discount_price, discount_rate }) {
  return (
    <div className={cx('product-detail')}>
      <div className={cx('detail-title')}>
        <span className={cx('title-name')}>{name}</span>
        <span className={cx('title-free-box')}>무료배송</span>
      </div>
      <div className={cx('detail-price')}>
        <p className={cx('price-full')}>{numberFormat(price)}원</p>
        <span className={cx('price-discount-price')}>{numberFormat(discount_price)}원</span>
        <span className={cx('price-discount-rate')}>{discount_rate}</span>
      </div>
      <hr />
    </div>
  )
}

export default ProductDetail