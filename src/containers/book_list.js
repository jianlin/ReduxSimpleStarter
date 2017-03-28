import React, { Component } from "react";
import { connect } from 'react-redux';


class BookList extends Component {
    renderBookList() {
            return this.props.books.map((book) => {
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

function mapStateToProps(state) {

    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);
