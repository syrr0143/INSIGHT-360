import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "auto", marginTop: "5%", padding: "5%", height: "85vh" }}>
          <img src={imageUrl} className="card-img-top" alt="..." style={{ height: '30vh' }} />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}...</h5>
            <p className="card-text">{this.props.description}...</p>
            <p className="card-text"><small className="text-body-secondary">Updated- {new Date(date).toGMTString()}</small></p>
            <p className="card-text"><small className="text-body-secondary">By- {!author ? "unknown" : author} </small></p>
            <p><span className='badge rounded-pill bg-secondary'>{source}</span></p>
            <a href={newsUrl} target='_blank' className="btn btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem;
