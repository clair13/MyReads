import React from 'react'
import BookShelf from './BookShelf.js'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookList extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
		onHandlechange: PropTypes.func.isRequired
	}

	
	render() {
		const { books, onHandlechange }= this.props


		return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf
                  books={this.props.books.filter(book=>book.shelf==='currentlyReading')}
                  shelfName="Currently Reading"
                  onHandlechange={onHandlechange}
              />

              <BookShelf
                  books={this.props.books.filter(book=>book.shelf==='wantToRead')}
                  shelfName="Want to Read"
                  onHandlechange={onHandlechange}
              />

              <BookShelf
                  books={this.props.books.filter(book=>book.shelf==='read')}
                  shelfName="Read"
                  onHandlechange={onHandlechange}
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