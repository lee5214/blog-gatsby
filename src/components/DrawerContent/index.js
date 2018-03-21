import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import moment from 'moment';
import { withTheme } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
/*const styles = theme => {
 postTitle: {
 fontSize: '0.5rem',
 }
 };*/
const SidebarContainer = styled.div`
	position: fixed;
	transition: 0.25s ease-in-out;
	top: 0;
	width: 240px;
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
	//background: url('/static/logo_face.png') 50% 15%
`;
const ListContainer = styled.div`
display: flex;
flex-direction:column;
`;

const StyledListItemText = styled (ListItemText)`
`;

/*const styles = {
 test : {
 fontSize: '.875rem',
 marginBottom: '1rem',
 },
 };*/

//
class Sidebar extends Component {
	constructor (props) {
		super (props);
		this.state = {
			sidebarOpen : true,
		};
	}

	createPostsList = (post) => {
		return (

			[
				<ListItem button key={ post.node.id }
				          to={ post.node.frontmatter.path }
				>
					<Link to={ post.node.frontmatter.path }>
						<StyledListItemText
							primary={
								<Typography type={ 'body2' }>
									{ post.node.frontmatter.title }
								</Typography>
							}
							secondary={
								moment (post.node.frontmatter.date, 'MM-DD-YYYY').fromNow ()
							}
						/>
					</Link>
				</ListItem>,
				<Divider/>,
			]

		);
	};

	render () {
		const {posts} = this.props;
		return (
			<SidebarContainer>
				<SidebarHeader>
					<img src={ '/static/logo_simple_black.png' }/>
				</SidebarHeader>
				<Divider/>
				<ListContainer>
					<List dense>
						{ posts.map ((post) => this.createPostsList (post)) }
					</List>
				</ListContainer>
			</SidebarContainer>
		);
	}
}

export default withTheme () (Sidebar);
