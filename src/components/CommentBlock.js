import React, { Component } from 'react'
import CommentList from './CommentList'


class CommentBlock extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { comments } = this.props
        const text = this.state.isOpen ? "Hide comments" : "Show comments"
        const body = this.state.isOpen ? <CommentList comments = {comments}/> : null
        return (
            <section>
                <h4 onClick = {this.handleClick}>{text}</h4>
                {body}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentBlock