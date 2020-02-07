import React from 'react'
import styles from './SelectOptions.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function OptionsItem({ option }) {
  return (
    <option value={option}>{option}</option>
  )
}

function OptionsList({ name, content, selectBox, onChange }) {
  return (
    <div>
      <select className={cx('select-options')} disabled={!selectBox.done} defaultValue={name} required onChange={(e) => onChange(selectBox.id, e.target.value)}>
        <option disabled value={name} >{name}</option>
        {
          content.map((option, index) => 
            <OptionsItem
              key={index}
              option={option}
            />
          )
        }
      </select>
      <div className={cx('select-arrow') } />
    </div>
  )
}

function SelectOptions({ options, selectBoxs, onChange }) {
  const { names, contents } = options;
  return (
      <div className={cx('select-container')}>
        {
          contents.map((content, index) => 
            <OptionsList
              key={index}
              name={names[index]}
              selectBox={selectBoxs[index]}
              content={content}
              onChange={onChange}
            />
          )
        }
    </div>
  )
}

export default SelectOptions
