import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	background : #000000;
	margin-bottom : 1.45rem;
`;
const HeaderContainer = styled.div`
	margin : 0 auto;
	max-width : 960px;
	padding : 1.45rem 1.0875rem;
`;

const Header = () => (
	<HeaderWrapper>
		<HeaderContainer>
			<h1 style={ {margin : 0} }>
				<Link
					to="/"
					style={ {
						color : 'white',
						textDecoration : 'none',
					} }
				>
					CongLi's Blog
					<img src={ '/static/logo_face.png' }/>
				</Link>
			</h1>
		</HeaderContainer>
		<nav>
			<Link to={ '/' }>Home</Link>
		</nav>
		<nav>
			<Link to={ '/about' }>About</Link>
		</nav>
	</HeaderWrapper>
);

export default Header;
