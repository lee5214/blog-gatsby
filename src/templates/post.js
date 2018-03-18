import React from 'react';
import styled from 'styled-components';

const MDContentWrapper = styled.div`
	padding: 1rem;
	> h1, h2, h3, h4 {
	margin-top: 2.5rem;
	}
`;
export default function Template ({data}) {
	const {markdownRemark : post} = data;
	return (
		<div>
			<h1>{ post.frontmatter.title }</h1>
			<MDContentWrapper dangerouslySetInnerHTML={ {__html : post.html} }/>
		</div>
	);
}
export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(
            frontmatter: {path: {eq: $path}}
        ){
            html
            frontmatter {
                path
                title
            }
        }
    }
`;
