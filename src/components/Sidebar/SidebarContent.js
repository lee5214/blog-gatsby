import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import sidebarStyle from '../../styles/components/sidebarContentStyle';
import logo from '../../assets/logo_simple_white.png';

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
  }
  /**
   * @param path
   * location is an object passed from Gatsby's Root React Router
   * in production, window.location may not work (due to the build environment), so replace it with this object
   * @returns {boolean}
   */
  activeRoute = path => {
    return this.props.location.pathname.indexOf(path) > -1 ? true : false;
  };

  createPostButton = post => {
    const { classes, themeColor } = this.props;
    return (
      <ListItem
        button
        component={Link}
        //IMPORTANT use backtick syntax and add '/' to avoid duplicated path error like ***/post1/post1
        to={`/${post.node.slug}`}
        key={`sidebarlink-${post.node.id}`}
        className={` ${classes.itemLink} ${
          this.activeRoute(post.node.slug) ? classes[themeColor] : ''
        }`}
      >
        <ListItemText
          className={classes.buttonText}
          primary={
            <Typography type={'body2'} className={classes.buttonTextPrimary}>
              {post.node.title}
              <small>{`  #${post.node.seriesNumber}`}</small>
            </Typography>
          }
          secondary={
            <small className={classes.buttonTextSecondary}>
              {moment(post.node.date).fromNow()}
            </small>
          }
        />
      </ListItem>
    );
  };

  render() {
    const { classes, posts } = this.props;
    return (
      <div>
        <div className={classes.logo}>
          <Link to="/" className={classes.logoLink}>
            <div className={classes.logoImageContainer}>
              <img src={logo} alt="logo" className={classes.logoImage} />
            </div>
          </Link>
        </div>
        <Divider className={classes.headerDivider} />
        <div className={classes.sidebarListContainer}>
          <List className={classes.sidebarList}>
            {posts.map(post => this.createPostButton(post))}
          </List>
        </div>
        <Divider className={classes.headerDivider} />
      </div>
    );
  }
}

SidebarContent.propTypes = {
  posts: PropTypes.array,
  location: PropTypes.object.isRequired
};
export default withStyles(sidebarStyle)(SidebarContent);
