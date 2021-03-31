import React from "react";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################
//
// function loginUser(dispatch, login, password, history, setIsLoading, setError) {
//   setError(false);
//   setIsLoading(true);
//
//   if (!!login && !!password) {
//     alert("hi")
//     const res = fetch(`http://localhost:3001/users/login`,{
//       method: 'POST',
//       body: JSON.stringify({ login, password }),
//       headers: {
//         'content-type': 'application/json'}
//       })
//     setTimeout(() => {
//       localStorage.setItem('id_token', res.token)
//       setError(null)
//       setIsLoading(false)
//       dispatch({ type: 'LOGIN_SUCCESS' })
//
//       history.push('/app/dashboard')
//     }, 2000);
//   } else {
//     dispatch({ type: "LOGIN_FAILURE" });
//     setError(true);
//     setIsLoading(false);
//   }
// }


function loginUser(dispatch, user_name, password, history, setIsLoading, setError) {
  return Promise.resolve().then(() => {
    // this._validateEmail(email);
    // this._validateStringField('password', password);

    return fetch(`http://localhost:3001/users/login`,{
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {

        if (res.status === 200) {

          return res;
        }
        return res.json().then(({ message }) => {
          dispatch({ type: "LOGIN_FAILURE" });
          setError(true);
          setIsLoading(false);
          throw Error(message);
        });
      })
      .then(res => res.json())
      .then(({user, token}) => {
        alert(token)
        setTimeout(() => {
          localStorage.setItem('id_token', token)
          setError(null)
          setIsLoading(false)
          dispatch({ type: 'LOGIN_SUCCESS' })

          history.push({
            pathname: '/app/dashboard',
            user: user,
          });
        })

        return true;
      });
  });
}


function signOut(dispatch, history) {
  localStorage.removeItem("id_token");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}
