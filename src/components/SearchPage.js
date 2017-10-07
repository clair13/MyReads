import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render(){
  	let showingBooks
  	if (this.state.query) {

  	}else {
  		showingBooks = this.props.query
  	}
  	const { query } = this.state

  	return(
  		<div className="search-books">
  		  <div className="search-books-bar">
  		    <Link to="/" className="close-search">Close</Link>
  		    <div className="search-books-input-wraper">
  		      {}
  		    <input type="text"
  		         placeholder="Search by title or author"
  		         value={this.state.query}
  		         onChange={(e) => this.updateQuery(e.target.value)} />
  		    </div>
  		  </div>
  		  )
  }
}

export default SearchPage