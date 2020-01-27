import React, { Component } from "react";
import "./Home.css";
import Typed from "react-typed";

class Home extends Component {
  render() {
    return (
      <main className="container-home">
        <section className="cpb-content-home center-text">
          <Typed
            strings={[
              "Chintesh is Detail-oriented WordPress Developer with extensive experience with WordPress plugins and widgets. Well versed in many other programming languages."
            ]}
            typeSpeed={40}
          />
        </section>
      </main>
    );
  }
}

export default Home;
