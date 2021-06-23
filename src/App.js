import React , { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './Main'
import { Route } from 'react-router-dom';
import Search from './Search'

class BooksApp extends Component {
  state = {
    books:[]
  }
componentDidMount(){
  BooksAPI.getAll()
  .then((books) => {
    this.setState(() => ({
      books
    }))
  })
}

onChange = (targetBook , shelf) => {
  BooksAPI.update(targetBook , shelf)
  .then(rse =>{
    targetBook.shelf = shelf
    this.setState((currentState) =>({
      books : currentState.books.filter(book =>(book.id !== targetBook.id)).concat(targetBook)
    }))
  })
}

  render() {
    return (
      <div className = "app">
         <Route exact path='/' render = {() =>(
           <MainPage books={this.state.books} moveTo={this.onChange} />
         )} />

         <Route path='/search' render = {()=>(
           <Search books={this.state.books} moveTo={this.onChange} />
         )} />
      </div>
    )
  }}
         
export default BooksApp;
