import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps() {
        //console.log('---', 'CL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        //значения полей должны жить в state

        return (
            <div>
                {this.getButton()}
                {this.getList()}
                <form >
                    Title:  <input type="text" name="title" />
                    <br/>
                    Author:  <input type="text" name="author" />
                    <br/>
                    Comment : <br />
                    <textarea rows="5" cols="50" name="comment" defaultValue="Enter comment here..." />
                    <br/>
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getList() {
        const { comments, isOpen } = this.props
        if (!isOpen || !comments.length) return null
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{commentItems}</ul>
    }
}

export default toggleOpen(CommentList)
