import React, { Component } from 'react'
import Newsitem from './Newsitem'; // Relative path to Newsitem.js

import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {

    static defaultProps = {
        country: "in",
        category: "sports",

    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,

    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    // this is life cycle method ,it runs after everything complete its render
    async componentDidMount() {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07a548fae888491ca99c8285a43af9f6&page=1`;
            
           // let url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apikey=pub_300921f3d142b210aa3cc8f4073e2d7f8c979&page=1`;
            let data = await fetch(url);
            let parsedData = await data.json();
            
            if (parsedData.status === 'success') {
                this.setState({ articles: parsedData.articles, totalarticles: parsedData.totalResults });
            } else {
                console.error('API request failed:', parsedData.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalarticles / 10)) {

        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07a548fae888491ca99c8285a43af9f6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            // let url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apikey=pub_300921f3d142b210aa3cc8f4073e2d7f8c979&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false,
            });

        }

    }

    handlePreviousClick = async () => {
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07a548fae888491ca99c8285a43af9f6&page=${this.state.page - 1}`;

        // let url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apikey=pub_300921f3d142b210aa3cc8f4073e2d7f8c979&page=${this.state.page - 1}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();


        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false

        });
    }



    render() {
        return (
            <div className='container my-3 '>
                {this.state.loading && <Spinner />}

                <div className="text-center"><h2>Insight-360° -Top headlines</h2></div>

                <div className="row">

                    {!this.state.loading && this.state.articles.map((element) => {

                        return <div className="col-md-4 col-sm-12 col-lg-4" key={element.link}> {/* Use col-md-4 for 3 cards in a row */}
                            <Newsitem title={element.title?.slice(0, 55)} description={element.description?.slice(0, 70)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.id} />
                        </div>
                    })}


                </div>
                <div className="container d-flex justify-content-between" style={{ padding: "5%" }}>
                    <button disabled={this.state.page <= 1} className="btn btn-sm btn-dark" onClick={this.handlePreviousClick}>&larr; previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalarticles / 10)} className="btn btn-sm btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
