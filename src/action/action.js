
// //------action---------
export const initFetch = (resp) => ({ type:'INIT_FETCH', payload: resp })

// export const mountFetch = (resp) => ({ type: 'MOUNT_FETCH',payload: resp })

// //--------THUNK---------
// export const signUp = (e, userObj) => {
//   return (dispatch) => {
//     return fetch(('http://localhost:3000/api/v1/users/'), {
//       method: 'POST',
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(
//       {
//         user:{
//                 parent_name: userObj.parentName,
//                 parent_email: userObj.parentEmail,
//                 child_username: userObj.childUsername,
//                 password: userObj.password
//               }
//
//       }),
//     }).then(res => res.json())
//       .then(result => {
//         if (result.message === "User created successfully") {
//           alert("Acount created Successfully")
//           return {message: "Success"}
//         } else {
//           return {message: "Fail", errors: result}
//         }
//       })
//   }
// }
//
// export const mount = (token) => {
//   return (dispatch) =>{
//   let token = localStorage.getItem('token')
//   if (token){
//     return fetch('http://localhost:3000/api/v1/current_user', {
//       headers: {
//         "Content-Type": "application/json",
//         Accepts: "application/json",
//         Authorization: token
//       }
//     })
//     .then(res => res.json())
//     .then(resp => {
//     // this.props.history.push('/activity')
//     dispatch(initFetch(resp))
//     })
//   } else {
//     // this.props.history.push('/homepage')
//   }
// }
// }
//
// export const login = (e, loginObj) => {
//   return (dispatch) => {
//     return fetch(("http://localhost:3000/api/v1/login"), {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(loginObj),
//     }).then(res => res.json())
//       .then(resObj => {
//         if (resObj.error == null) {
//           localStorage.setItem("token", resObj.access_token)
//           dispatch(initFetch({...resObj.user}))
//         } else {
//           dispatch(({type: 'LOADING_CHANGE', payload: false}))
//           alert('Invalid username and password')
//         }
//       })
//   }
// }







//
//
// export const loginHandler = (e, userObj) => {
//   e.preventDefault()
//   console.log(userObj)
//   fetch('http://localhost:3000/api/v1/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accepts: 'application/json'
//     },
//     body: JSON.stringify({
//       user: userObj
//     })
//   })
// }





// export const signupSubmit = (e, userObj) => {
  //   e.preventDefault()
  //   return (dispatch) =>{
    //   return fetch('http://localhost:3000/api/v1/users/', {
      //     method: 'POST',
      //     headers: {'Content-Type': 'application/json'},
      //     body: JSON.stringify({
        //       user:{
          //         parent_name: userObj.parentName,
          //         parent_email: userObj.parentEmail,
          //         child_username: userObj.childUsername,
          //         password: userObj.password
          //       }
          //     })
          //   })
          //   .then(res => res.json())
          //   .then(user =>
            //     {localStorage.setItem('token', user.user.id)
            //     dispatch(initFetch(user.user), componentDidMount())}
            //   )}
            // }
