import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
class ListBooks extends Component{

        
render(){

    return(
            <ol className="books-grid">
                {
                    this.props.books.map((book , index) => (
                        <Book key={index} book={book} books={this.props.allBooks} updateShelf={this.props.updateShelf} />
                    ))
                }
            </ol>
    )
} 
}
ListBooks.propTypes = {
    allBooks: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };
export default ListBooks