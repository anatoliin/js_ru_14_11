import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            //не привязывайся к названиям сущностей в декораторах, вся их суть в том, чтобы использовать с разными компонентами и данными. Сделай openItemId
            openArticleId: null
        }
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen = {this.openArticle}/>
    }

    openArticle = id => ev => {
        //ок, но я б писал тернарным оператором, вместо 2-х setState
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
