import React from 'react'
import BookShelf from './BookShelf.js'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookList extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	state = { 
	   shelf: ''
	}
	
	render() {
		const { books }= this.this.props

		const currentlyReading=this.props.books.filter((book=>book.shelf==='currentlyReading'))
		const wantToRead=his.props.books.filter((book=>book.shelf==='wantToRead'))
		const readBooks=his.props.books.filter((book=>book.shelf==='read'))

		return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf
                  books={this.props.books.filter(book=>book.shelf==='currentlyReading')}
                  shelfName="Currently Reading"
              />

              <BookShelf
                  books={this.props.books.filter(book=>book.shelf==='wantToRead')}
                  shelfName="Want to Read"
              />

              <BookShelf
                  books={this.props.books.filter(book=>book.shelf==='read')}
                  shelfName="Read"
              />
            </div>

       
            <div className="open-search">
              <Link to="/search">Search a book</Link>
            </div>
        </div>
		)
	}
}

export default BookList