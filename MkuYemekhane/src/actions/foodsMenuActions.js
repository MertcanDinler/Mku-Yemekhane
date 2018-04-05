export const fetchMenu = (date = '') => {
  return {
    type: 'FETCH_MENU',
    payload: {date: date},
  }
}