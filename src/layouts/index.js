import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ContentHeader from '../components/ContentHeader';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import 'prismjs/themes/prism-tomorrow.css';
import Sidebar from '../components/Sidebar';

import Link from 'gatsby-link';
import { AppBar, Badge, Divider, IconButton, Tab, Tabs, Toolbar } from 'material-ui';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import logo from '../assets/logo_simple_black.png';
import layoutStyle from '../styles/layoutStyle';
import Read from '../assets/icons/Read.svg';
import ID from '../assets/icons/ID.svg';
import Drone from '../assets/icons/Drone.svg';
import globalTheme from '../styles/themes/globalTheme';

import '../styles/index.css';

class Layout extends Component {

	constructor (props) {
		super (props);
		this.state = {
			mobileOpen : false,
			tabNum : 0,
		};
	}

	handleDrawerToggle = () => {
		this.setState ({mobileOpen : !this.state.mobileOpen});
	};

	handleTabChange = (event, value) => {
		this.setState ({tabNum : value});
	};

	render () {
		const {classes, data, location} = this.props;
		const {edges : posts} = this.props.data.allContentfulPost;
		const themeColor = 'blue';
		return (
			<MuiThemeProvider theme={ globalTheme }>
				<div className={ classes.root }>
					<Helmet
						title="Cong Li' s Blog"
						meta={ [
							{name : 'description', content : 'a blog of full stack learning experience'},
							{name : 'keywords', content : ' gatsby,react,redux,graphql,styled component,markdown'},

						] }
					>
						<link rel='shortcut icon' type='image/png' href={ `${logo}` }/>
					</Helmet>

					<AppBar className={ classes.appBar }>
						<Toolbar>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								onClick={ this.handleDrawerToggle }
								className={ classes.navIconHide }
							>
								<MenuIcon/>
							</IconButton>
							<Typography variant="headline" color="inherit" noWrap>
								{ this.props.location.pathname.replace ('/', '').replace (/-/g, ' ') }
							</Typography>
						</Toolbar>
						<Divider style={ {background : 'white'} }/>
						<Tabs centered
						      value={ this.state.tabNum }
						      onChange={ this.handleTabChange }
						>
							<Tab
								label={ 'Blog' }
								icon={
									<Badge className={ classes.tabBadge } color="secondary"
									       badgeContent={ `${posts.length}P` }>
										{ /*<ReadIcon>Home</ReadIcon>*/ }
										<img className={ classes.tabIcon } src={ Read }/>
									</Badge>
								}
								component={ Link }
								to={ '/' }
							/>
							<Tab label={ 'About' }
							     icon={
								     <Badge className={ classes.tabBadge } color="secondary"
								            badgeContent={''}
								     >
									     <img className={ classes.tabIcon } src={ ID }/>
								     </Badge>
							     }
							     component={ Link }
							     to={ '/about' }
							/>
							<Tab label={ 'Find Me' }
							     icon={
								     <Badge className={ classes.tabBadge } color="secondary"
								            badgeContent={''}
								     >
									     <img className={ classes.tabIcon } src={ Drone }/>
								     </Badge> }
							     component={ Link }
							     to={ '/contact' }
							/>
						</Tabs>
					</AppBar>

					<Sidebar mobileOpen={ this.state.mobileOpen }
					         handleDrawerToggle={ this.handleDrawerToggle }
					         posts={ posts }
					         themeColor={ themeColor }
					         location={ location }
					/>
					<main className={ classes.MainContent }>
						<ContentHeader/>
						<div className={ classes.postBlock }>
							{ this.props.children () }
						</div>
					</main>
				</div>
			</MuiThemeProvider>
		);
	}
}

Layout.propTypes = {
	children : PropTypes.func,
};


export const query = graphql`
    query LayoutQuery {
        allContentfulPost {
            edges {
                node {
                    id
                    slug
                    focus
                    date
                    tags
                    title
                    seriesNumber
                }
            }
        }
    }
`;
export default withStyles (layoutStyle) (Layout);
