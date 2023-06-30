import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { setAuthToken } from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/auth";
import { LOGOUT } from "./utils/typings";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    dispatch(loadUser());

    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch({ type: LOGOUT });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>App</div>;
};

export default App;
