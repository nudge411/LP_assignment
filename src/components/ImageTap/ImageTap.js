import React from 'react'
import styles from './ImageTap.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ImageTap({ image, subImages, onChangeImage }) {
  const onClick = e => {
    onChangeImage(e.target.src)
  }

  return (
    <div className={cx("image-tap")}>
      <div className={cx("main-image")}>
        <img src={image} alt={image}/>
      </div>
      <div className={cx("subimages")}>
        {subImages.map((subimage, index) => (
          <span className={cx("image-item")} key={index}>
            <img onClick={onClick} src={subimage} alt={subimage} />
          </span>
        ))}
      </div>
    </div>
  )
}

export default ImageTap
