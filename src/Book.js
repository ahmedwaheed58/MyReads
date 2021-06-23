import React  from 'react';
import MoveTo from './MoveTo';
import PropTypes from 'prop-types';

const Book = props =>{
    const {book , books , updateShelf} = props;

    const cover = book.imageLinks && book.imageLinks.thumbnail 
    ? book.imageLinks.thumbnail
    :"./icons/noCover.jpg";

    const title = book.title 
    ? book.title
    :"No title";

    return(
        <li key= {book.id}>
            <div className="book">
                <div className="book-top">
                    <MoveTo book = {book} books={books} updateShelf ={updateShelf}/>
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
            
        </li>
    )
}
Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };
export default Book