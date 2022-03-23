import { combineReducers } from "redux";
import { dragDropReducer } from "./dragDrop.reducer";
import { photosReducer } from "./photos.reducer";
const rootReducer = combineReducers({
  dragDrop: dragDropReducer,
  photosData: photosReducer,
});

export default rootReducer;
