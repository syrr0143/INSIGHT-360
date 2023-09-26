import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Spinner from './Spinner';

export class Navbar extends Component {
  handleHomeClick = () => {
    // Reload the page when the "Home" link is clicked
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });  // Hide the spinner after loading is complete
 }, 50000);
    window.location.reload();
  }
  constructor() {
    super();
    this.state = {
      isLoading: false, // Track whether the spinner should be shown
    };
  }

    render() {
      const { isLoading } = this.state;
      return (
        <div style={{ margin: "70px" }}>
           {isLoading && <Spinner />}

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top " >
            <div className="container-fluid">


              <Link className="navbar-brand" to="#" onClick={this.handleHomeClick}>Insight-360°</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link className="nav-link active" aria-current="page" to="#" onClick={this.handleHomeClick}>Home</Link></li>
                  <li className="nav-item"><Link className="nav-link  active" to="/business"  onClick={this.handleHomeClick} >Business</Link></li>
                  <li className="nav-item"><Link className="nav-link  active" to="/entertainment"  onClick={this.handleHomeClick} >Entertainment</Link></li>
                  <li className="nav-item"><Link className="nav-link  active" to="/general"  onClick={this.handleHomeClick} >General</Link></li>
                  <li className="nav-item"><Link className="nav-link  active" to="/health"  onClick={this.handleHomeClick} >Health</Link></li>
                  <li className="nav-item"><Link className="nav-link  active" to="/science"  onClick={this.handleHomeClick} >Science</Link></li>
                  <li className="nav-item"><Link className="nav-link  active" to="/sports"  onClick={this.handleHomeClick} >Sports</Link></li>
                  <li className="nav-item"><Link className="nav-link  active" to="/technology"  onClick={this.handleHomeClick} >Technology</Link></li>
                  <li className="nav-item"><Link className="nav-link  active" to="#"  onClick={this.handleHomeClick} >About us</Link></li>
                </ul>

              </div>
            </div>
          </nav>
        </div>
      )
    }
  }

export default Navbar
