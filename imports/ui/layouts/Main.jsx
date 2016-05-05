import React, { Component } from 'react';
import SideBar from '../components/SideBar.jsx';
import Tooltip from '../components/Tooltip.jsx';
import Spotlight from '../components/Spotlight.jsx';
import UserCardPopover from '../components/UserCardPopover.jsx';
import FlexTabBar from '../components/FlexTabBar.jsx';
import ConnectionStatus from '../components/ConnectionStatus.jsx';

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
				<Tooltip />
				<Spotlight />
				<UserCardPopover />

				<div id="cosecha-tech" className="cosecha-tech">
					<ConnectionStatus />
					<FlexTabBar />

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
