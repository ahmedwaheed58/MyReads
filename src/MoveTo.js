import React , { Component } from 'react'
import PropTypes from 'prop-types';

class MoveTo extends Component {
        
        setCategory = (event) =>{
             this.props.updateShelf(this.props.book , event.target.value);
        }    
    render(){
        const {book , books} =this.props;
        let bookShelf = "none";
        for (let unknownBook of books) {
            if (unknownBook.id === book.id) {
              bookShelf = unknownBook.shelf;
              break;
            }}
        return(
            <div className="book-shelf-changer">
                <select onChange = {this.setCategory} value = {bookShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )

    }
}
MoveTo.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };
export default MoveTo;