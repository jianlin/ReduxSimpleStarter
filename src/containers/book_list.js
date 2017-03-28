import React, { Component } from "react";
import { connect } from 'react-redux';  // HOW TO CONNECT APP STATE TO CONTAINER: need the connect from the library React-Redux

class BookList extends Component {
  renderBookList() {
    return this.props.books.map((book) => {    // HOW TO CONNECT APP STATE TO CONTAINER: How to use the state: as props
      return (
        <li key={book.title}>{book.title}, {book.author}, {book.numPages} pages</li>
      )
    });
  }

  render() {
    return (
      <ul>
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

export default connect(mapStateToProps)(BookList);    // HOW TO CONNECT APP STATE TO CONTAINER: export this smart component, AKA container
