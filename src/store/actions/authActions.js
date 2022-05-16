import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
      //basarili giris ise userDetails objesini dispatch et tetiklenip seni dashboarde yonlendirsin
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
  };
};

//reducerdan gelenleri set et
const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

//history objesinden detail aliyorruz
//redux thunk ile redux actionlarinda asyn atabiliyoruz action bittiginde
const login = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
        //alertte hata mesajlarini goster
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      //browserin local storageini kullanarak useri setliyoruz
      localStorage.setItem("user", JSON.stringify(userDetails));

      //start steti baslangic durumuna getir
      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};

const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};
