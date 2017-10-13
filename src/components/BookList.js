import React  from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

function BookList (props) {
		return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf
                  books={props.books.filter(book=>book.shelf==='currentlyReading')}
                  shelf="Currently Reading"
                  onHandleChange={props.onHandleChange}
              />
              <BookShelf
                  books={props.books.filter(book=>book.shelf==='wantToRead')}
                  shelf="Want to Read"
                  onHandleChange={props.onHandleChange}
              />
               <BookShelf
                  books={props.books.filter(book=>book.shelf==='read')}
                  shelf="Read"
                  onHandleChange={props.onHandleChange}
              />
              
            </div>
            <div className="open-search">
              <Link to="/search">Search a book</Link>
            </div>
        </div>
		)
}

export default BookList