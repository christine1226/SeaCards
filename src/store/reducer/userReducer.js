const initState = {
  user: [],
}



const reducer = (state = initState, action) => {

  switch (action.type){
    case 'LOG_IN':{
    return{
      user: action.payload
    }}
    case 'SIGN_UP_USER':{
    return{
      user: action.payload
    }}
    default:
    return state
  }

}
export default reducer
