export const validateCredentials = (email:string):boolean => {
  const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) //eslint-disable-line
  let test = regExp.test(email)
  return test
}


// // create switch case for when input fields are empty, 
//   case (input.name === firstName):
//     return setError