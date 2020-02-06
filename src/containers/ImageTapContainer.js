import React from 'react'
import ImageTap from '../components/ImageTap'
import { useSelector, useDispatch } from "react-redux"
import { changeImage } from '../modules/imageTap';

function ImageTapContainer({ subImages }) {
  const { image } =  useSelector(state => state.imageTap)
  const dispatch = useDispatch()
  const onChangeImage = url => {
    return dispatch(changeImage(url))
  }

  return <ImageTap 
    image={image}
    subImages={subImages}
    onChangeImage={onChangeImage}
  />;
}

export default ImageTapContainer
