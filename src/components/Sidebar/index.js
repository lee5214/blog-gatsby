import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { AppBar, Badge, Drawer, Hidden, IconButton, Modal, Tab, Tabs, Toolbar } from 'material-ui';
import SidebarContent from './SidebarContent';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import HomeIcon from 'material-ui-icons/Home';
import MenuIcon from 'material-ui-icons/Menu'
import PersonIcon from 'material-ui-icons/Person'
import PhoneIcon from 'material-ui-icons/Phone'
import sidebarStyle from '../../styles/sidebarStyle';

class Sidebar extends Component {
	constructor (props) {
		super (props);
		this.state = {
			mobileOpen : false,
		};
	}

	handleDrawerToggle = () => {
		this.setState ({mobileOpen : !this.state.mobileOpen});
	};

	render () {
		const {classes, posts, themeColor} = this.props;
		return (
			<div className={ classes.container }>

				<Hidden mdUp>
					<Modal
						disableAutoFocus={ true }
						open={ this.state.mobileOpen }
						onClose={ this.handleDrawerToggle }
						// variant='temporary'
						// anchor='left'
						// classes={ {paper : classes.drawerPaper} }
						// ModalProps={ {
						//  hideBackdrop : true,
						//  keepMounted : true, // Better open performance on mobile.
						//  } }
					>
						<div className={ classes.drawerPaper }>
							<SidebarContent posts={ posts } themeColor={ themeColor }/>
						</div>
					</Modal>
				</Hidden>
				< Hidden smDown implementation='css'>
					< Drawer variant='permanent' open
					         classes={ {paper : classes.drawerPaper} }
					>
						<SidebarContent posts={ posts } themeColor={ themeColor }/>
					</Drawer>
				</Hidden>
			</div>
		);
	}
}

Sidebar.propTypes = {
	classes : PropTypes.object.isRequired,
	posts : PropTypes.array.isRequired,
	themeColor : PropTypes.string,
};
export default withStyles (sidebarStyle) (Sidebar);
