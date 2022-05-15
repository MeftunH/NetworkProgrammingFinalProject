import { authActions } from "../actions/authActions";

//baslangic durumu user bos olack baslangicta
const initState = {
  userDetails: null,
};
// State ve action’ı parametre alan ve yeni state’i dönen pure bir fonksiyon
const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
