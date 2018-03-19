import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const SidebarContainer = styled.div`
	position: fixed;
	
	transition: 0.25s ease-in-out;
	top: 0;
	width: 240px;
	height: 100%;
	background: red;
`;
const SidebarHeader = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 64px;
	overflow: hidden;
	>img {
		height: 100%;
		margin: 0 auto;
	}
	//background: url('/static/logo_face.png') 50% 15%
`
const ListContainer = styled.div`
`;

class Sidebar extends Component {
	constructor (props) {
		super (props);
		this.state = {
			sidebarOpen : true,
		};
	}

	render () {
		const {posts} = this.props
		return (
			<SidebarContainer>
				<SidebarHeader>
					<img src={'/static/logo_simple_black.png'}/>
				</SidebarHeader>
				<ListContainer>
					{
						posts.map ((post) => (
							<li key={ post.node.id }>
								<Link to={ post.node.frontmatter.path }>{ post.node.frontmatter.title }</Link>
							</li>
						))
					}
				</ListContainer>
			</SidebarContainer>
		);
	}
}

export default Sidebar;
