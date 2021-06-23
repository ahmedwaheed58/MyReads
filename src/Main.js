import React , { Component } from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
class MainPage extends Component {
    render(){
        const books = this.props.books;
    return(
        <div className="app">
           <div className = "list-books-title">
            <h1>My reads</h1>
          </div>
          <BookShelf category="currentlyReading" books={books} updateShelf={this.props.moveTo} />
          <BookShelf category="wantToRead" books={books} updateShelf={this.props.moveTo}/>
          <BookShelf category="read" books={books} updateShelf={this.props.moveTo}/>
            <div className="open-search">
            <Link 
            className = "open-search-button"
            to = "/search"
            >Add a book </Link>
            </div>
        </div>
    
    )}
}
MainPage.propTypes = {
    books: PropTypes.array.isRequired,
    moveTo: PropTypes.func.isRequired
  };
export default MainPage;