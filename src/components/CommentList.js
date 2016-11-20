import React  from 'react'
import Comment from './Comment.js'

function CommentList(props) {
    const { comments } = props

    const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

    return (
        <ul>
            {commentItems}
        </ul>
    )
}

export default CommentList