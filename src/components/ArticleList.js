import React, { PropTypes }  from 'react'
import Article from './Article'
import accordeon from '../decorators/accordeon.js'


function ArticleList(props) {
    const { articles, openArticleId, toggleOpen } = props

    const articleItems = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id == openArticleId}
                toggleOpen = {toggleOpen(article.id)}
                />
        </li>
    ))

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

ArticleList.PropTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    openArticleId: PropTypes.number,
    toggleOpen: PropTypes.func.isRequired
}

export default accordeon(ArticleList)