import React from 'react';
import { Drawer, Hidden, Modal } from 'material-ui';
import DrawerContent from '../DrawerContent';

export default Sidebar = () => {
	return (
		<div>
			<Hidden mdUp>
				<Modal
					disableAutoFocus={ true }
					/*variant='temporary'*/
					open={ this.state.mobileOpen }
					onClose={ this.handleDrawerToggle }
					/*classes={ {paper : classes.drawerPaper} }*/
					/*ModalProps={ {
					 hideBackdrop : true,
					 keepMounted : true, // Better open performance on mobile.
					 } }*/
				>
					<div className={ classes.drawerPaper }>
						<DrawerContent posts={ posts }/>
					</div>
				</Modal>
			</Hidden>

			< Hidden smDown implementation='css'>
				< Drawer variant='permanent' open classes={
					{paper : classes.drawerPaper; }
					</div>
					}
				>
					<div
						className={ classes.drawerPaper;
						}>
						<DrawerContent posts={ posts }/>
					</div>
				</Drawer>
			</Hidden>
			)
			};
