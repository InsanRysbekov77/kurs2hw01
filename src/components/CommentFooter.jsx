import React from 'react'
import './CommentFooter.css'

const CommentFooter = (props) => {
	return (
		<div className='footer'>
			<div>{props.text}</div>
			<strong>{props.date.toLocaleDateString()}</strong>
		</div>
	)
}
export default CommentFooter
