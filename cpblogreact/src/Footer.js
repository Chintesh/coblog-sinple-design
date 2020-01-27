import React, { Component } from "react";
import './Footer.css';
class Footer extends Component {
  render() {
    let	classfix = '';
    if(window.location.pathname == '/'){
      classfix = 'fix';
    }
    return (
      <React.Fragment>
       <footer className={classfix}>
		<p className="center-text pink">© Copyright 2020 Chintesh prajapati personal blog</p>
	</footer>
      </React.Fragment>
    );
  }
}

export default Footer;