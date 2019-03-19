import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="name-container">
          <h1>Marcelino Madriaga Jr.</h1>
        </div>

        <div className="content-container">
          <h3>Software Engineer</h3>

          <div className="icon-links">
            <a href="https://github.com/morsemars">
              <i class="fab fa-github" />
            </a>
          </div>
        </div>

        <div className="content-container">
          <h3>Musician</h3>
          <div className="icon-links">
            <a href="https://www.instagram.com/morsemars">
              <i class="fab fa-instagram" />
            </a>

            <a href="https://www.youtube.com/user/cadt08">
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
