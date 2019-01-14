const initState = {
  user: [],
}



const reducer = (state = initState, action) => {

  switch (action.type){
    case 'LOG_IN':{
      console.log(action.payload)
    return{
      user: action.payload
    }}
    case 'SIGN_UP_USER':{
    return{
      user: action.payload
    }}
    case 'CLEAR_USER':{
    return{
      user: null
    }}
    default:
    return state
  }

}
export default reducer
