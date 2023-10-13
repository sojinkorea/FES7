import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();

// 리듀서 함수
const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    case "authIsReady":
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null, isAuthReady: false });

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      // 유저 정보가 있을 때만 authIsReady
      // if (user) {
      dispatch({ type: "authIsReady", payload: user });
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
