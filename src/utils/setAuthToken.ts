import useAxios from "./useAxios";

export const setAuthToken = (token: string) => {
  if (token) {
    console.log("token", token);
    useAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete useAxios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};


