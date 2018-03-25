import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Hidden, Modal } from 'material-ui';
import SidebarContent from './SidebarContent';
import { withStyles } from 'material-ui/styles';
import sidebarStyle from '../../styles/components/sidebarStyle';

class Sidebar extends Component {

	render () {
		const {mobileOpen, handleDrawerToggle, classes, posts, themeColor} = this.props;
		return (
			<div>

				<Hidden mdUp>
					<Modal
						disableAutoFocus={ true }
						open={ mobileOpen }
						onClose={ handleDrawerToggle }
						// variant='temporary'
						// anchor='left'
						// classes={ {paper : classes.drawerPaper} }
						// ModalProps={ {
						//  hideBackdrop : true,
						//  keepMounted : true, // Better open performance on mobile.
						//  } }
					>
						<div className={ `${classes.drawerPaper} ${classes.drawerPaperMobile}` }>
							<div className={ classes.paperOverlay }/>
							<SidebarContent posts={ posts }
							                themeColor={ themeColor }
							                location={ this.props.location }/>
						</div>
					</Modal>
				</Hidden>
				< Hidden smDown implementation='css'>
					< Drawer variant='permanent' open
					         classes={ {paper : classes.drawerPaper} }
					>
						<div className={ classes.paperOverlay }/>
						<SidebarContent posts={ posts }
						                themeColor={ themeColor }
						                location={ this.props.location }
						/>
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
