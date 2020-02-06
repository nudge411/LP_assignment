import React, { useCallback } from 'react'
import SelectOptions from '../components/SelectOptions'
import { useSelector, useDispatch } from "react-redux"
import { choiceOption, resetOption, addItem } from '../modules/selectOptions';

function SelectOptionsContainer({ options }) {
  const { selectBoxs } =  useSelector(state => {
    console.log(state.selectOptions)
    return state.selectOptions
  })
  const dispatch = useDispatch()
  
  const onChange = (id, name) => (dispatch(choiceOption(id, name)))
  const onResetValue = () => (dispatch(resetOption()))
  const onAddItem = item => (dispatch(addItem(item)))

  if(!!(selectBoxs[selectBoxs.length - 1].text && selectBoxs[selectBoxs.length - 1].done)) {
    onResetValue()
    onAddItem('test')
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
