import React from 'react'
import UserInfo from './UserInfo'
import CommentFooter from './CommentFooter'
import './CommentItem.css'

const CommentItem = (props) => {
	return (
		<div className='comment'>
			<UserInfo author={props.author} />
            <br/>
			<CommentFooter text={props.text} date={props.date} />
		</div>
	)
}

export default CommentItem
