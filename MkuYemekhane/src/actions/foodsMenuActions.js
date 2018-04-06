export const fetchMenu = (timestamp = '') => {
  return {
    type: 'FETCH_MENU',
    payload: {timestamp: timestamp},
  }
}