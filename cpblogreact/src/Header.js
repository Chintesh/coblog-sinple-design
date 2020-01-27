import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';
class Header extends Component {
  render() {
    return (
      <React.Fragment>
       <header>
		<nav className="cpb-header-menu">
			<img className="cpb-menu-icon" src="images/menu.svg" id="cpb-menu-icon-id" onclick="ToogleMenu()" />
			<ul className="cpb-menu-side hide-side-menu" id="cpb-menu-side-id">
				<li><Link to={{ pathname: '/' }} className="light_green menuid" >Home</Link></li>
				<li><Link to={{ pathname: '/single' }} className="orange menuid">Contact us</Link></li>
				<li><Link to={{ pathname: '/single' }} className="purple_dark menuid">About us</Link></li>
				<li><Link to={{ pathname: '/blog' }} className="blue menuid">Blog</Link></li>
			</ul>
		</nav>
		<div className="cpb-header-logo">
			<span className="orange"><span className="pink">C</span><span className="purple_dark">P</span>Blog</span>
		</div>
		<div className="cpb-header-search">
			<a href="https://profiles.wordpress.org/chinteshprajapati/" target="_blank"><img className="cpb-search-icon" src="images/wplogo.svg" /></a>
		</div>
	</header>
      </React.Fragment>
    );
  }
}

export default Header;