import { photos } from "./actionTypes";

const initialState = {
  photosList: [],
  token: null,
  isloading: false,
};

export function photosReducer(state = initialState, action) {
  switch (action.type) {
    case photos.PHOTOS_LIST_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case photos.PHOTOS_LIST_REQUEST_SUCCESS:
        console.log('Login', action);
      return {
        ...state,
        isloading: false,
        photosList: action.payload,
      };

    case photos.PHOTOS_LIST_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: null,
        photosList: [],
      };

    default:
      return state;
  }
}
