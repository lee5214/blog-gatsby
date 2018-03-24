import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import moment from 'moment';
import { createMuiTheme, withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import sidebarStyle from '../../styles/sidebarContentStyle';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../../assets/logo_simple_white.png';

const muiTheme = createMuiTheme ({
	ripple : {
		color : 'orange',
	},
	palette : {
		tyep : 'dark',
	},
});

const SidebarContainer = styled.div`
	position: fixed;
	transition: 0.25s ease-in-out;
	top: 0;
	width: 300px;
	height: 100%;
	background: white;
	border-right: 1px solid rgba(0, 0, 0, 0.12);
`;
const SidebarHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 64px;
	overflow: hidden;
	>img {
		max-height: 50px;
		margin: 0 auto;
	}
`;
const ListContainer = styled.div`
display: flex;
flex-direction:column;
`;
const StyledListItem = styled (ListItem)`

	position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    overflowScrolling: 'touch'

    backgroundColor: 'red',
    boxShadow:
      "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)",
    "&:hover": {
      backgroundColor: 'red',
      boxShadow:
        "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)"
    }

`;
const StyledListItemText = styled (ListItemText)`
`;

class SidebarContent extends Component {
	constructor (props) {
		super (props);
		this.state = {
			sidebarOpen : true,
		};
	}

	activeRoute = (path) => {
		return this.props.location.pathname.indexOf (path) > -1 ? true : false;
	};

	createPostButton = (post) => {
		const {classes, themeColor} = this.props;
		return (
			<ListItem button
			          component={ Link }
			          to={ post.node.frontmatter.path }
			          key={ `sidebarlink-${post.node.id}` }
			          className={ ` ${classes.itemLink} ${this.activeRoute (post.node.frontmatter.path) ? classes[themeColor] : ''}` }>
				<ListItemText className={ classes.buttonText }
				              primary={
					              <Typography type={ 'body2' } className={ classes.buttonTextPrimary }>
						              { post.node.frontmatter.title }
					              </Typography>
				              }
				              secondary={
					              <span>
								{ moment (post.node.frontmatter.date, 'MM-DD-YYYY').fromNow () }
							</span>

				              }
				/>
			</ListItem>
		);
	};

	render () {
		//const logo = '/static/logo_simple_white.png';
		const content = '';
		const {classes, posts} = this.props;
		return (
			<MuiThemeProvider theme={ muiTheme }>
				<div>
					<div className={ classes.logo }>
						<Link to='/' className={ classes.logoLink }>
							<div className={ classes.logoImage }>
								<img src={ logo } alt="logo" className={ classes.img }/>
							</div>
							{ content }
						</Link>
					</div>
					<Divider className={ classes.headerDivider }/>
					<div className={ classes.sidebarListContainer }>
						<List className={ classes.sidebarList }>
							{ posts.map ((post) => this.createPostButton (post)) }
						</List>
					</div>
					<Divider className={ classes.headerDivider }/>
				</div>
			</MuiThemeProvider>
		);
	}
}

SidebarContent.propTypes = {
	posts : PropTypes.array,
};
export default withStyles (sidebarStyle) (SidebarContent);
