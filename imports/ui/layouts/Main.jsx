import React, { Component } from 'react';
import SideBar from '../components/SideBar.jsx';

export default class Main extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      sideToggle: true,
	    };
	}

	toggleSideNav(e){

		var sideNav = $('.side-nav');
		var cosechaTech = $('#cosecha-tech');

		this.setState({
			sideToggle: !this.state.sideToggle
		});

		if(this.state.sideToggle){
			cosechaTech.animate({
				left: '250px'
			});
		}else {
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
								<i className="fa fa-bars fa-2x" onClick={this.toggleSideNav.bind(this)}></i>
								<h1>Room Title</h1>
							</header>

							<div className="content">content</div>
						</div>
					</div>

					<SideBar />
					

				</div>
			</div>
    );
  }
}
