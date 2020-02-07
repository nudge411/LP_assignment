import React, { useCallback } from 'react'
import SelectOptions from '../components/SelectOptions'
import { useSelector, useDispatch } from "react-redux"
import { choiceOption, addItem } from '../modules/selectOptions';

function SelectOptionsContainer({ options }) {
  const { selectBoxs } =  useSelector(state => {
    return state.selectOptions
  })
  const dispatch = useDispatch()
  const onChange = (id, name) => (dispatch(choiceOption(id, name)))
  const onAddItem = (title, price) => (dispatch(addItem(title, price)))

  if(!!(selectBoxs[selectBoxs.length - 1].text && selectBoxs[selectBoxs.length - 1].done)) {
    let title = `${selectBoxs[0].text}/${selectBoxs[1].text}/${selectBoxs[2].text}`
    let addPrice = options.data.find(ele => ele.positions.join('/') === title).data.option_price + 500000
    onAddItem(title, addPrice)
  }

  return (
    <SelectOptions 
      options={options}
      onChange={onChange}
      selectBoxs={selectBoxs}
    />
  )
}

export default SelectOptionsContainer
