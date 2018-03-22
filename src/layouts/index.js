import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import { withStyles } from 'material-ui/styles';
import 'prismjs/themes/prism-tomorrow.css';
import Sidebar from '../components/Sidebar';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import MenuIcon from 'material-ui-icons/Menu';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
//import '../styles/index.css';
const drawerWidth = 300;
const styles = (theme) => ({
	root : {
		flexGrow : 1,
		height : '100%',
		zIndex : 1,
		overflow : 'hidden',
		position : 'relative',
		width : '100%',
		[ theme.breakpoints.up ('md') ] : {
			display : 'flex',
		},
		[ theme.breakpoints.down ('sm') ] : {
			display : 'block',
		},
	},
	appBar : {
		position : 'absolute',
		marginLeft : drawerWidth,
		[ theme.breakpoints.up ('md') ] : {
			width : `calc(100% - ${drawerWidth}px)`,
		},
	},
	navIconHide : {
		[ theme.breakpoints.up ('md') ] : {
			display : 'none',
		},
	},
	toolbar : theme.mixins.toolbar,
	drawerPaper : {
		width : drawerWidth,
		background : 'white',
		[ theme.breakpoints.up ('md') ] : {
			position : 'relative',
		},
	},
	drawerMoblie : {
		width : drawerWidth,
		background : 'white',
	},
	content : {
		flexGrow : 1,
		backgroundColor : theme.palette.background.default,
		padding : theme.spacing.unit * 3,
	},
});

const ContentContainer = styled.div`
	/*margin-left: 300px;
	width: calc(100% - 300px);*/
`;
const PostBlock = styled.div`
	margin : 0 auto;
	max-width : 960px;
	padding : 0px .0875rem 1.45rem;
	padding-top : 0
`;

class TemplateWrapper extends Component {
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
		const {classes, data} = this.props;
		const {edges : posts} = this.props.data.allMarkdownRemark;
		return (
			<div className={ classes.root }>
				<Helmet
					title="Cong Li' s Blog"
					meta={ [
						{name : 'description', content : 'a blog of full stack learning experience'},
						{name : 'keywords', content : ' gatsby,react,redux,graphql,styled component,markdown'},
					] }
				/>

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
						<Typography variant="title" color="inherit" noWrap>
							Blog
						</Typography>
					</Toolbar>
				</AppBar>

				<Sidebar/>

				<main className={ classes.content }>
					<div className={ classes.toolbar }/>

					<ContentContainer>
						<Header/>
						<PostBlock>
							{ this.props.children () }
						</PostBlock>
					</ContentContainer>
				</main>
			</div>
		);
	}
}

TemplateWrapper.propTypes = {
	children : PropTypes.func,
};


export const query = graphql`
    query LayoutQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
	                    about
                        tags
                    }
                }
            }
        }
    }
`;
// export default withStyles (styles) (TemplateWrapper);
export default withStyles (styles) (TemplateWrapper);

