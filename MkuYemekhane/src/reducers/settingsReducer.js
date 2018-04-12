const initialState = {
  notifications: {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
  },
}
  
export default function(state = initialState, action){
  switch(action.type){
    case 'SET_NOTIFICATION_SUCCESS':
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.payload.day]: action.payload.value
        }
      }
    default:
      return state;
  }
}