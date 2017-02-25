import React, { Component } from 'react';

import BookList from '../containers/bookList';
import ActiveBook from '../containers/ActiveBook';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <ActiveBook />
      </div>
    );
  }
}
