import React, { Component } from 'react';

export default class Main extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      sideToggle: true,
	    };
	}

	sideNavClick(e){
		e.preventDefault();
		console.log("Side Nav button clicked.");

		//var sideToggle = this.state.sideToggle;
		var sideNav = $('.side-nav');
		var cosechaTech = $('#cosecha-tech');

		this.setState({
			sideToggle: !this.state.sideToggle
		});

		if(this.state.sideToggle){
			console.log('Toggle On');
			//sideNav.addClass('active');
			cosechaTech.animate({
				left: '250px'
			});
		}else {
			console.log('Toggle Off');
			//sideNav.removeClass('active');
			cosechaTech.animate({
				left: '0px'
			});
		}

	}

  render() {
    return (
			<div>
				<div className="tooltip"></div>
				<div className="spotlight hidden"></div>
				<div className="user-card-popover"></div>
				<div id="cosecha-tech" className="cosecha-tech">
					<div className="connection-status"></div>
					<div role="toolbar" className="flex-tab-bar"></div>

					<div className="main-content">
						<div className="page-container">
							<header className="fixed-title">
								<i className="fa fa-bars fa-2x" onClick={this.sideNavClick.bind(this)}></i>
								<h1>Room Title</h1>
							</header>

							<div className="content">content</div>
						</div>
					</div>

					<aside className="side-nav">

						<header className="header">
							<div className="account-box">
								<div className="info status-online">
									<div data-status="online" className="thumb"><img src="http://placehold.it/40x40"/></div>
									<div className="data">
										<h4>celso.mireles</h4></div>
								</div>
								<nav className="options animated-hidden"></nav>
							</div>
						</header>

						<div className="rooms-list">
							<div className="wrapper">
								<h3 className="add-room active">CHANNELS <i className="fa fa-plus"></i></h3>
								<ul>
									<li className="link-room"><a className="open-room"><i className="fa fa-hashtag"></i><span className="name"> general</span><span className="opt"></span></a></li>
									<li className="link-room"><a><i className="fa fa-hashtag"></i><span className="name"> trainers</span><span className="opt"></span></a></li>
									<li className="link-room"><a><i className="fa fa-hashtag"></i><span className="name"> artists</span><span className="opt"></span></a></li>
									<li className="link-room"><a><i className="fa fa-hashtag"></i><span className="name"> arizona</span><span className="opt"></span></a></li>
								</ul>
							</div>
						</div>
						<footer className="footer"></footer>
					</aside>

				</div>
			</div>
    );
  }
}
