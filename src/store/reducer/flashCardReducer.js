const initState = {
  activity: [],
}


const reducer = (state = initState, action) => {

  switch (action.type){
    case 'RENDER_CARD': {
      return {
         activity: action.payload
      }
    }
    case 'RENDER_NUMBER_CARD': {
      return {
         activity: action.payload
      }
    }
    case 'RENDER_SPEECH_CARD': {
      return {
         activity: action.payload
      }
    }
    default:
    return state
  }

}
export default reducer
