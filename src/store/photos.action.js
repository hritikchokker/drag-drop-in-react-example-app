import { photos } from "./actionTypes";

const photosRequest = () => {
  return {
    type: photos.PHOTOS_LIST_REQUEST,
  };
};

const photosRequestSuccess = (payload) => {
  return {
    type: photos.PHOTOS_LIST_REQUEST_SUCCESS,
    payload,
  };
};

const photosRequestFailure = (payload) => {
  return {
    type: photos.PHOTOS_LIST_REQUEST_FAILURE,
    payload,
  };
};

const photosRequestAction = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      if (result && result.length) {
        dispatch(photosRequestSuccess(result.slice(0,100)));
      } else {
        dispatch(photosRequestFailure("errorr"));
      }
    } catch (error) {}
  };
};
export const photosActions = {
  photosRequestAction,
};
