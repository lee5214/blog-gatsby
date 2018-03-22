import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import { withStyles } from 'material-ui/styles';
import 'prismjs/themes/prism-tomorrow.css';
import Sidebar from '../components/Sidebar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
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
		display : 'flex',
		width : '100%',
	},
	appBar : {
		position : 'absolute',
		marginLeft : drawerWidth,
		[theme.breakpoints.up ('md')] : {
			width : `calc(100% - ${drawerWidth}px)`,
		},
	},
	navIconHide : {
		[theme.breakpoints.up ('md')] : {
			display : 'none',
		},
	},
	toolbar : theme.mixins.toolbar,
	content : {
		flexGrow : 1,
		backgroundColor : theme.palette.background.default,
		padding : theme.spacing.unit * 3,
	}

});

const PostBlock = styled.div`
	margin : 0 auto;
	max-width : 960px;
	padding : 0px .0875rem 1.45rem;
	padding-top : 0
`;

class TemplateWrapper extends Component {

	render () {
		const {classes, data} = this.props;
		const {edges : posts} = data.allMarkdownRemark;
		const themeColor = 'orange'
		return (
			<div className={ classes.root }>
				<Helmet
					title="Cong Li' s Blog"
					meta={ [
						{name : 'description', content : 'a blog of full stack learning experience'},
						{name : 'keywords', content : ' gatsby,react,redux,graphql,styled component,markdown'},

					] }
				>
					<link rel='shortcut icon' type='image/png' href='/static/logo_simple_black.png'/>
				</Helmet>


				<Sidebar posts={ posts } themeColor={themeColor}
				/>
				<main className={ classes.content }>
					<Header/>
					<PostBlock>
						{ this.props.children () }
					</PostBlock>
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

