import React from 'react';
import styled from 'styled-components';


const MDContentWrapper = styled.div`
	> h1, h2, h3, h4 {
	margin-top: 2.5rem;
	}
`;
const Tag = styled.span`
	background: red;
	padding: 0 10px;
	margin: 0 10px;
`
export default function Template ({data}) {
	const {markdownRemark : post} = data;
	console.log (post.frontmatter.tags);

	return (
		<div>
			<h1>{ post.frontmatter.title }</h1>
			<p>{ post.frontmatter.date }</p>
			{ post.frontmatter.tags.map ((tag) =>
				(
					<Tag key={post.id+tag}>{ tag }</Tag>
				),
			) }
			<MDContentWrapper dangerouslySetInnerHTML={ {__html : post.html} }/>
		</div>
	);
}
export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(
            frontmatter: {path: {eq: $path}}
        ){
	        id
            html
            frontmatter {
                path
                title
                date
                tags
            }
        }
    }
`;
