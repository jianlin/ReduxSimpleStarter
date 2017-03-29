import React, { Component } from "react";
import { connect } from 'react-redux';  // HOW TO CONNECT APP STATE TO CONTAINER: need the connect from the library React-Redux



class BookDetails extends Component {

  render() {
    if (!this.props.activeBook) return (
      <div className="book-details">Please select a book</div>
    );

    return (
      <div className="book-details">
      <h2>{this.props.activeBook.title}, by {this.props.activeBook.author}, {this.props.activeBook.numPages} pages</h2>
      <img className="book-image" src={"/images/" + this.props.activeBook.imageName} />
      </div>
    );
  }
}

function mapStateToProps(state) {    // HOW TO CONNECT APP STATE TO CONTAINER: map the app level state to props
  return {
    activeBook: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetails);    // HOW TO CONNECT APP STATE TO CONTAINER: export this smart component, AKA container
