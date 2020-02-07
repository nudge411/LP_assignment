const CHOICE_OPTION = 'selectOptions/CHOICE_OPTION';
const ADD_ITEM = 'selectOptions/ADD_ITEM';
const DELETE_ITEM = 'selectOptions/DELET_ITEM';
const INCREASE = 'selectOptions/INCREASE'
const DECREASE = 'selectOptions/DECREASE'

let nextId = 1;

export const increase = id => ({type: INCREASE, id});
export const decrease = id => ({type: DECREASE, id});
export const deleteItem = id => ({type: DELETE_ITEM, id});
export const choiceOption = (id, name) => ({ type: CHOICE_OPTION, id, name })
export const addItem = (title, addPrice) => ({
  type: ADD_ITEM,
  selectedItem: {
    id: nextId++,   
    title,
    count: 1,
    addPrice,
    totalPrice: addPrice
  }
})

const initialState = {
  selectBoxs: [
    {
      id: 1,
      title: 'color',
      text: '',
      done: true
    },
    {
      id: 2,
      title: 'size',
      text: '',
      done: false
    },
    {
      id: 3,
      title: 'length',
      text: '',
      done: false
    }
  ],
  selectList: [],
}

export default function selectOptions(state = initialState, action) {
  switch (action.type) {
    case CHOICE_OPTION:
      return {
        ...state,
        selectBoxs: state.selectBoxs.map(box =>
          box.id === action.id ? { 
            ...box,
            text: action.name
          } : box.id === action.id + 1 ? { 
            ...box,
            done: true
          } : box
        )
      }
    case ADD_ITEM:
      return {
        ...state,
        selectBoxs: state.selectBoxs.map(box => 
          box.id !== 1 ? {
            ...box,
            text: '',
            done: false
          } : box
        ),
        selectList: state.selectList.concat(action.selectedItem),
      }
    case INCREASE:
      return {
        ...state,
        selectList: state.selectList.map(product => 
          product.id === action.id ? {
            ...product,
            count: product.count + 1,
            totalPrice: product.addPrice * (product.count+1)
          } : product
        ),
      }
    case DECREASE:
      return {
        ...state,
        selectList: state.selectList.map(product => 
          product.id === action.id ? {
            ...product,
            count: product.count - 1,
            totalPrice: product.addPrice * (product.count-1)
          } : product
        )
      }
    case DELETE_ITEM:
      return {
        ...state,
        selectList: state.selectList.filter(product => product.id !== action.id)
      }
    default:
      return state;
  }
}

