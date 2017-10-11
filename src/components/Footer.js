import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'

import '../footer.css'

function Footer (props) {
	return (
	
		<div className="footer">
		  <Segment textAlign='center' size="small">
		    <span className="footer-text">
		      Created by @clair13
		      <Icon color="purple" name="github" size="large" />
		    </span>
		  </Segment>
		</div>
	)
}

export default Footer