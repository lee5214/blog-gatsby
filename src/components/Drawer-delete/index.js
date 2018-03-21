import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../Header';
//import '../styles/index.css';
import 'prismjs/themes/prism-tomorrow.css';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Modal from 'material-ui/Modal';
import Sidebar from '../DrawerContent';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: '100%',
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		width: '100%',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
	},
	appBar: {
		position: 'absolute',
		marginLeft: drawerWidth,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		background: 'white',
		[theme.breakpoints.up('md')]: {
			position: 'relative',
		},
	},
	drawerMoblie: {
		width: drawerWidth,
		background: 'white',
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
	},
});
const ContentContainer = styled.div`
	/*margin-left: 300px;
	width: calc(100% - 300px);*/
`;

class Drawer extends Component {
	state = {
		mobileOpen : false,
	};
	handleDrawerToggle = () => {
		this.setState ({mobileOpen : !this.state.mobileOpen});
	};

	render () {
		const {classes, theme, data, posts} = this.props;
		return (
			<div>
				<AppBar className={ classes.appBar }>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={ this.handleDrawerToggle }
							className={ classes.navIconHide }
						>
							<MenuIcon/>
						</IconButton>

					</Toolbar>
				</AppBar>
				<Hidden mdUp>
					<Modal
						variant="temporary"
						open={ this.state.mobileOpen }
						onClose={ this.handleDrawerToggle }
						classes={ {paper : classes.drawerPaper} }
						ModalProps={ {
							hideBackdrop : true,
							keepMounted : true, // Better open performance on mobile.
						} }
					>
						<div className={ classes.drawerPaper }>
							<Sidebar posts={ posts }/>
						</div>
					</Modal>
				</Hidden>

				<Hidden smDown implementation="css">
					<Drawer
						variant="permanent"
						open
						classes={ {paper : classes.drawerPaper} }
					>
						<div className={ classes.drawerPaper }>
							<Sidebar posts={ posts }/>
						</div>
					</Drawer>
				</Hidden>
				<main className={ classes.content }>
					<div className={ classes.toolbar }/>
					<ContentContainer>
						<Header/>
						<div
							style={ {
								margin : '0 auto',
								maxWidth : 960,
								padding : '0px 1.0875rem 1.45rem',
								paddingTop : 0,
							} }
						>
							{ this.props.c () }
						</div>
					</ContentContainer>
				</main>
			</div>
		);
	}
}


export default withStyles (styles, {withTheme : true}) (Drawer);
