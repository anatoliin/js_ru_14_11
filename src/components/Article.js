import React, { Component } from 'react'
import CommentBlock from './CommentBlock.js'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props
        const body = this.state.isOpen ? <p>{article.text}</p> : null
        //const comments = this.state.isOpen ? <CommentBlock comments = {article.comments}> : null
        const comments = this.state.isOpen ? <CommentBlock comments = {article.comments}/> : null
        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                {comments}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article