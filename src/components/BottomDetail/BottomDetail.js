import React from 'react'
import styles from './BottomDetail.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BottomDetail({ productInfo, partnerInfo }) {
  const listMap = (infoArray) => (
    infoArray.map((info, index) => 
      <div key={index} style={{display: "inline-block"}}>
        <span className={cx("infoKey")}>{info[0] ? info[0] : "/"}</span>
        <span className={cx("infoValue")}>{info[1]}</span>
      </div>
    )
  )

  return (
    <div className={cx("footer")}>
      <h2>상품정보고시 정보</h2>
      <div className={cx("productInfo")}>
        {listMap(productInfo)}
      </div>
      <h2>업체 정보</h2>
      <div className={cx("partnerInfo")}>
        {listMap(partnerInfo)}
      </div>
    </div>
  )
}

export default BottomDetail
