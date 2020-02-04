const CHANGEIMAGE = 'imageTap/CHANGEIMAGE'

export const changeImage = url => ({type: CHANGEIMAGE, url});

const initialState = {
  image: "https://s3.ap-northeast-2.amazonaws.com/coordi-img/062310d6c7db1e24fe95b5c976346b7d",
};

export default function imageTap(state = initialState, action) { 
  switch(action.type) {
    case CHANGEIMAGE:
      return {
        ...state,
        image: action.url,
      };
    default:
      return state;
  }
}
