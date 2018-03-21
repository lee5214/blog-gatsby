import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Button from 'material-ui/Button';

const HeaderWrapper = styled.div`
	background : ${props => props.bgImage ? `url(${props.bgImage})` : 'black' } 50% 50% no-repeat;
	background-size: cover;
	margin-bottom : 1.45rem;
`;
const HeaderContainer = styled.div`
	margin : 0 auto;
	max-width : 960px;
	padding : 1.45rem 1.0875rem;
`;
const HeaderNav = styled.nav`
	margin: 0 auto;
	max-width: 960px;
	text-align: right;
`
const Header = () => (

	<HeaderWrapper bgImage>
		<HeaderContainer>
		</HeaderContainer>
		<HeaderNav>
			<Button>
				<Link to={ '/' }>Home</Link>
			</Button>
			<Button color="inherit">
				<Link to={ '/about' }
				      activeStyle={ {
					      color : 'red',
				      } }
				>
					About
				</Link>
			</Button>
		</HeaderNav>
	</HeaderWrapper>
);


export default Header;
