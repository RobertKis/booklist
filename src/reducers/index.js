import { combineReducers } from 'redux';

import BooksReducer from "./reducer-books";
import ActiveBook from './reducer-ActiveBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
