import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import BookList from './components/BookList'
import SearchPage from './components/SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount = () => {
    this.getAllBooks()
  }

  handleChange =(book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(previousState => ({
        books: previousState.books.filter(b=> b.id !== book.id).concat([book])
      }))
    })
    
  }

  render() {
    return(
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <BookList
              books={this.state.books}
              onHandleChange={ this.handleChange }
            />
          )}/>
          <Route path='/search' render={() => (
            <SearchPage
              books={this.state.books}
              onHandleChange={ this.handleChange }
            />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
