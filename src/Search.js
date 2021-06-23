import React , { Component } from 'react';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI'
import {Link} from "react-router-dom"
class Search extends Component{
    

    state ={
        books: [],
        query: "",
        noResults : false
    }

    
    updateQuery = (event) => {
        const query = event.target.value;
        this.setState({ query })
    

    if (query){
        BooksAPI.search(query.trim())
        .then((queryBooks) =>{
            queryBooks.length > 0
            ? this.setState(() => ({
                books: queryBooks ,
                noResults:false
            }))
            :this.setState(() => ({
                books: [],
                noResults : true
            }));
        })
    } else this.setState({books :[] , noResults : true})
}
    
    
    

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to = "/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange ={this.updateQuery} value={this.state.query}/>
                    </div>
                </div>
                { this.state.books.length > 0 && (
                    <div className = "search-books-results">
                        <ListBooks books={this.state.books} allBooks={this.props.books} updateShelf = {this.props.moveTo} />
                    </div>
                )
                }
                {this.state.noResults && (
                    <h2 className = "no-results">No results yet</h2>
                )}
                </div>
        )
    }

}
Search.propTypes = {
    books: PropTypes.array.isRequired,
    moveTo: PropTypes.func.isRequired
  };
export default Search