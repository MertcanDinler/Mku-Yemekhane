const initialState = {
  code: 0,
  isLoading: true,
  menu: [],
}

export default function(state = initialState, action){
  switch(action.type){
    case 'FETCH_MENU_STARTED':
      return {
        ...state, 
        isLoading: true
      };
    case 'FETCH_MENU_SUCCESS':
      return {
        code:action.payload.code, 
        isLoading: false, 
        menu: action.payload.response.menu
      }
    case 'FETCH_MENU_FAILED':
      return {
        ...state,
        code: action.payload.code,
        isLoading: false,
      }
    default:
      return state;
  }
}