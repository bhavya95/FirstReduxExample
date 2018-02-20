//this state = null is not application State
//it is the state for which the reducer is responsible
export default function(state = null, action){
  switch (action.type) {
    case 'BOOK_SELECTED':
    return action.payload;

  }


  return state
}
