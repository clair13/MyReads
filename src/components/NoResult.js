import React from 'react' 
import { Link } from 'react-router-dom'

function NoResult (props) {
	return(
		<div className="list-books">
		  <div className="list-books-title">
		    <h1>No content here !</h1> 
		  </div>
		  <div className="back-arrow">
		    <Link to="/">Home</Link>
		  </div>
		</div>
	)
}

export default NoResult