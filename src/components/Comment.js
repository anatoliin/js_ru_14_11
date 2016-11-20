import React from 'react'

function Comment(props) {
    const { comment } = props

    const title = comment.title ? <p>{comment.title}</p> : null
    return (
        <section>
            <p>{comment.user}</p>
            <p>{title}</p>
            <p>{comment.text}</p>
        </section>
    )
}

export default Comment