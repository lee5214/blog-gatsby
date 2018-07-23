import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer, Hidden, Modal } from 'material-ui'
import SidebarContent from './SidebarContent'
import { withStyles } from 'material-ui/styles'
import sidebarStyle from '../../styles/components/sidebarStyle'
import {waveAnimation} from './animations'



class Sidebar extends Component {
  render() {
    const {
      mobileOpen,
      handleDrawerToggle,
      classes,
      posts,
      themeColor,
    } = this.props
    return (
      <div>
        <Hidden mdUp>
          <Modal
            disableAutoFocus={true}
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            <div
              className={`${classes.drawerPaper} ${classes.drawerPaperMobile}`}
            >
              <div className={classes.paperOverlay} />
              <SidebarContent
                posts={posts}
                themeColor={themeColor}
                location={this.props.location}
              />
            </div>
          </Modal>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.paperOverlay} />
            <SidebarContent
              posts={posts}
              themeColor={themeColor}
              location={this.props.location}
            />
          </Drawer>
          <div style={{zIndex:9999,bottom:0,transform: 'matrix(1, 0, 0, -1, 0, 0)' , position:'absolute'}}>
            <div>
              <svg
                style={{width: '100%',
                  height: '10vh'}}
                fill={"#00d6ff"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 338.05"
                preserveAspectRatio="none"
              >
                <path className={waveAnimation}>
                  <animate
                    attributeName="d"
                    values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                    repeatCount="indefinite"
                    dur="10s"
                  />
                </path>
              </svg>
            </div>
          </div>
        </Hidden>
      </div>
    )
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  themeColor: PropTypes.string,
}
export default withStyles(sidebarStyle)(Sidebar)
