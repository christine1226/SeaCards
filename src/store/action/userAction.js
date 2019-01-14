const loginHandler = (user) => ({
  type: 'LOG_IN',
  payload: user
})

export const signupHandler = () => ({
  type: 'CLEAR_USER',
  payload: 'none'
})

export const clearUser = (user) => ({
  type: 'SIGN_UP_USER',
  payload: user
})


//---------------THUNK------------------//
export const loginUser = (dispatch, event) => {
  fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        user:{
          parent_email: event.target.parentEmail.value,
          password: event.target.password.value
        }
      })
  })
  .then(res => res.json())
  .then(user => {
    localStorage.setItem("token", user.jwt)
    dispatch(loginHandler(user))
  })
}



export const getCurrentUser = (dispatch, getState) => {
  let url = 'http://localhost:3000/api/v1/current_user'
  let token = localStorage.getItem('token')

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json',
      'Authorization': token
    }})
    .then(res => res.json())
    .then(user => dispatch(loginHandler(user)))
}


export const signupUser = (dispatch, event) => {
    fetch('http://localhost:3000/api/v1/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                Accepts: 'application/json'},
      body: JSON.stringify({
        user:{
          parent_name: event.target.parentName.value,
          parent_email: event.target.parentEmail.value,
          child_username: event.target.childUsername.value,
          password: event.target.password.value
        }
      })
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem("token", user.jwt)
      dispatch(signupHandler(user))
    }, console.log)
    // .then(resp => {
    //   dispatch(signupHandler(resp.user))
    //   localStorage.setItem("token", resp.jwt)
    // })

}
