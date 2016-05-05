import React, { Component } from 'react';

export default class Home extends Component {


  render() {
    return (
			<div>
				<div className="tooltip"></div>
				<div className="spotlight hidden"></div>
				<div className="user-card-popover"></div>
				<div className="cosecha-tech">
						<div className="connection-status"></div>
						<div className="flex-tab-bar" role="toolbar"></div>
						<div className="main-content">

							<div className="page-container">
								<header className="fixed-title">
									burger
									<h2>
										<span className="room-title">Room Title</span>
									</h2>
								</header>

								<div className="content">
									Content
								</div>
							</div>

						</div>
						<aside className="side-nav">Side Nav</aside>


				</div>
			</div>
    );
  }
}
