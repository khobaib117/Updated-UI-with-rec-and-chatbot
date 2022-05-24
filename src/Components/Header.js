import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
    };

    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("login")) {
      this.setState({ login: false });
    } else {
      this.setState({ login: true });
    }
  }

  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("logHome");
    localStorage.setItem(
      "login",
      JSON.stringify({
        login: false,
        store: null,
      })
    );
    this.setState({ login: true });
  }

  render() {
    console.warn(this.state.login);
    return (
      <div>
        <header
          className="header-section"
          style={{ height: "70px", background: "grey" }}
        >
          <div className="container">
            <ul className="main-menu-left site-menu-style">
              <li>
                <Link to="/">
                  <span
                    style={{
                      fontWeight: "bold",
                      padding: "10px",
                      borderRadius: "15px",
                      fontWeight: "999",
                      fontSize: "17px",
                      color: "black",
                    }}
                  >
                    OnSpot
                  </span>
                </Link>
              </li>
              <li style={{ marginLeft: "215px" }}>
                <Link to="/">
                  <span
                    className="header-Buttons"
                    style={{
                      fontWeight: "bold",
                      padding: "10px",
                      borderRadius: "15px",
                    }}
                  >
                    Home
                  </span>
                </Link>
              </li>

              <li style={{ marginLeft: "40px" }}>
                <Link to="/image-search">
                  <span
                    className="header-Buttons"
                    style={{
                      fontWeight: "bold",
                      padding: "10px",
                      borderRadius: "15px",
                    }}
                  >
                    Image Search
                  </span>
                </Link>
              </li>
              <li style={{ marginLeft: "40px" }}>
                <Link to="/favourite">
                  <span
                    className="header-Buttons"
                    style={{
                      fontWeight: "bold",
                      padding: "10px",
                      borderRadius: "15px",
                    }}
                  >
                    Favourites
                  </span>
                </Link>
              </li>

              <li style={{ marginLeft: "40px" }}>
                <Link to="/profile">
                  <span
                    className="header-Buttons"
                    style={{
                      fontWeight: "bold",
                      padding: "10px",
                      borderRadius: "15px",
                    }}
                  >
                    Profile
                  </span>
                </Link>
              </li>

              <li style={{ marginLeft: "20px" }}>
                <Link onClick={this.logout} to="/login">
                  {localStorage.getItem("logHome") === "true" ? (
                    <span
                      className="header-Buttons"
                      style={{
                        fontWeight: "bold",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      Logout
                    </span>
                  ) : (
                    <span
                      className="header-Buttons"
                      style={{
                        fontWeight: "bold",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      Login
                    </span>
                  )}
                </Link>
              </li>
            </ul>

            <li></li>

            {/* { this.state.login?
              
              <li>
              <Link  to="/login" className='log-in'><strong>Login</strong></Link>
              </li> 
              :
              <li>
                {console.log("the local store was set to #####////////////////////",localStorage.getItem('logHome'))}
              <Link onClick={this.logout} to="/login">{localStorage.getItem('logHome')==='true'?"LOGOUT":"LOGIN"}</Link>
              </li>
           
            } */}
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
