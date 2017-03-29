import React, { Component } from "react";
import { connect } from 'react-redux';  // HOW TO CONNECT APP STATE TO CONTAINER: need the connect from the library React-Redux

import {selectBook} from "../actions/index.js";
import {bindActionCreators} from "redux";


class BookList extends Component {
  renderBookList() {
    return this.props.books.map((book) => {    // HOW TO CONNECT APP STATE TO CONTAINER: How to use the state: as props
      return (
        <li
          key={book.title}
          onClick={() => { this.props.selectBook(book) }}
        >
          {book.title}, {book.author}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="book-list col-md-6">
      {this.renderBookList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {    // HOW TO CONNECT APP STATE TO CONTAINER: map the app level state to props
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);    // HOW TO CONNECT APP STATE TO CONTAINER: export this smart component, AKA container
