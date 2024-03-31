import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = []

    constructor() {
        super()
        console.log("Constructor from News Component")

        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {

        console.log("Component Did Mount")

        let url = 'https://newsapi.org/v2/everything?q=apple&from=2024-02-23&to=2024-02-23&sortBy=popularity&apiKey=07d208e97f4d403783c0a8f282d871d0'
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <div className='container my-5'>
                <h1>News Monkey - Top Headlines</h1>

                <div className="row">
                    {
                        this.state.articles.map((element) => {
                            return element.urlToImage ? <div key={element.url} className="col-md-4">
                                <NewsItem title={element.title.slice(0, 45).concat(' ...')} description={element.description.slice(0, 88).concat(' ....')} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                            </div> : ''
                        })
                    }
                </div>
            </div>
        )
    }
}
