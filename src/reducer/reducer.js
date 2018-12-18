const initState = {
  user: []
}



const reducer = (state = initState, action) => {

  switch (action.type){
    // case 'INIT_FETCH':
    // return {
    //   user: {...action.payload}
    // }
    // case 'MOUNT_FETCH':
    // return{
    //   ...state, user: action.payload
    // }
    default:
    return state
  }

}
export default reducer
