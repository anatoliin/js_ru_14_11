import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            openArticleId: null
        }
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen = {this.openArticle}/>
    }

    openArticle = id => ev => {
        if (this.state.openArticleId === id)
        {
            this.setState({
                openArticleId: null
            })
        }
        else
        {
            this.setState({
                openArticleId: id
            })
        }
    }

}