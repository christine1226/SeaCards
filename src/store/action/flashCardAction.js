//------ACTION------//
export const getActivity = (activity) => ({
  type: 'RENDER_CARD',
  payload: activity
})

export const getNumberActivity = (activity) => ({
  type: 'RENDER_NUMBER_CARD',
  payload: activity
})

export const getSpeechActivity = (activity) => ({
  type: 'RENDER_SPEECH_CARD',
  payload: activity
})


//------THUNK------//

export const getFlashcard = (dispatch) => {
  fetch('http://localhost:3003/flashcard')
  .then(res => res.json())
  .then(activity => dispatch(getActivity(activity)))
}

export const getNumberFlashcard = (dispatch) => {
  fetch('http://localhost:3003/number')
  .then(res => res.json())
  .then(activity => dispatch(getNumberActivity(activity)))
}

export const getSpeechFlashcard = (dispatch) => {
  fetch('http://localhost:3003/speech')
  .then(res => res.json())
  .then(activity => dispatch(getSpeechActivity(activity)))
}



// export const signupSubmit = (event) => {
//   fetch('http://localhost:3000/api/v1/users/', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json',
//               Accepts: 'application/json'},
//     body: JSON.stringify({
//       user:{
//         parent_name: event.target.parentName.value,
//         parent_email: event.target.parentEmail.value,
//         child_username: event.childUsername.value,
//         password: event.target.password.value
//       }
//     })
//   })
//   .then(res => res.json())
//   .then(console.log)
// }
