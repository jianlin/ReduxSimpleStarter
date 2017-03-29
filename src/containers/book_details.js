import React, { Component } from "react";
import { connect } from 'react-redux';  // HOW TO CONNECT APP STATE TO CONTAINER: need the connect from the library React-Redux



class BookDetails extends Component {

  render() {
    if (!this.props.book) return (
      <div className="book-details col-md-6">Please select a book</div>
    );

    return (
      <div className="book-details col-md-6">
      <h2>{this.props.book.title}, by {this.props.book.author}, {this.props.book.numPages} pages</h2>
      <img className="book-image" src={"images/" + this.props.book.imageName} />
      </div>
    );
  }
}

function mapStateToProps(state) {    // HOW TO CONNECT APP STATE TO CONTAINER: map the app level state to props
  return {
    book: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetails);    // HOW TO CONNECT APP STATE TO CONTAINER: export this smart component, AKA container
