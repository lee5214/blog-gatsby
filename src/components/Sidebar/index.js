import React, { Component } from 'react';
import { AppBar, Drawer, Hidden, IconButton, Modal, Toolbar } from 'material-ui';
import SidebarContent from './SidebarContent';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';

const drawerWidth = 300;
const styles = (theme) => ({
	drawerPaper : {
		width : drawerWidth,
		[theme.breakpoints.up ('md')] : {
			position : 'relative',
		},
	},
	drawerMobile : {
		width : drawerWidth,
		background : 'white',
	},
});

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
		const {classes, posts, mobileOpen, handleDrawerToggle, themeColor} = this.props;
		return (
			<div>
				<AppBar className={ classes.appBar }>
					<Toolbar>
						<IconButton
							color={themeColor}
							aria-label='open drawer'
							onClick={ this.handleDrawerToggle }
							className={ classes.navIconHide }
						>
							<MenuIcon/>
						</IconButton>
						<Typography variant="title" color="inherit" noWrap>
							Blog
						</Typography>
					</Toolbar>
				</AppBar>
				<Hidden mdUp>
					<Modal
						disableAutoFocus={ true }
						open={ this.state.mobileOpen }
						onClose={ this.handleDrawerToggle }
						variant='temporary'
						anchor='left'
						/*classes={ {
						 paper : classes.drawerPaper,
						 } }*/
						/*classes={ {paper : classes.drawerPaper} }*/
						/*ModalProps={ {
						 hideBackdrop : true,
						 keepMounted : true, // Better open performance on mobile.
						 } }*/
					>
						<div className={ classes.drawerMobile }>
							<SidebarContent posts={ posts } themeColor={themeColor}/>
						</div>
					</Modal>
				</Hidden>
				< Hidden smDown implementation='css'>
					< Drawer variant='permanent' open
					         classes={ {paper : classes.drawerPaper} }
					>
						<SidebarContent posts={ posts } themeColor={themeColor}/>
					</Drawer>
				</Hidden>
			</div>
		);
	}
};

export default withStyles (styles) (Sidebar);
