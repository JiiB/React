import { GET_ERRORS } from "./types";
import axios from "axios";
import { Dispatch } from "redux";

export const registerUser = (userData: any, history: any) => (
  dispatch: Dispatch<any>
) => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
