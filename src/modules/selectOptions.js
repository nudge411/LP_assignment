const CHOICE_OPTION = 'selectOptions/CHOICE_OPTION';
const RESET_OPTION = 'selectOptions/RESET_OPTION';
const ADD_ITEM = 'selectOptions/ADD_ITEM';

let nextId = 1;

export const choiceOption = (id, name) => ({ type: CHOICE_OPTION, id, name })
export const resetOption = (id, name) => ({ type: RESET_OPTION, id, name })
export const addItem = (item) => ({
  type: ADD_ITEM,
  selectedItem: {
    id: nextId++,
    item: {    
      option: item,
      count: 1,
      price: 50000,
    }
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
  selectList: []
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
        selectList: state.selectList.concat(action.selectedItem)
      }
    default:
      return state;
  }
}

