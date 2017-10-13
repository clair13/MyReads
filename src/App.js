import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import BookList from './components/BookList'
import SearchPage from './components/SearchPage'
import NoResult from './components/NoResult'
import Footer from './components/Footer'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
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

  handleChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(previousState => ({
        books: previousState.books.filter(b=> b.id !== book.id).concat([book])
      }))
    })
    
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/MyReads' render={() => (
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
          <Route component={NoResult}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default BooksApp
