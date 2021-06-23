import React , { Component } from 'react';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks';

class BookShelf extends Component{
render(){
    const showingBooks= (
        this.props.books.filter(book =>(
        this.props.category === book.shelf)
    ));
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.category}</h2>
            <div className="bookshelf-books">
                <ListBooks allBooks ={this.props.books} books={showingBooks} shelf={this.props.category} updateShelf ={this.props.updateShelf} />
            </div>
        </div>
    )
}
}
BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
  };
export default BookShelf