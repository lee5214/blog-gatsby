import React from 'react';
import styled from 'styled-components';

const BlogFront = styled.div`
	border: 1px solid black;
	padding: 1rem;
	margin-bottom: 1rem;
`;
const MDContentWrapper = styled.div`
	> h1, h2, h3, h4 {
		margin-top: 2.5rem;
	}
	text-align: justify;
`;
const TagContainer = styled.div`
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
`;
const Tag = styled.span`
	background: #72fffa;
	padding: 0  .5rem;
	margin-right: 1rem;
`;
export default function Template ({data}) {
	const {markdownRemark : post} = data;
	console.log (post.frontmatter.tags);

	return (
		<div>
			<BlogFront>
				<h1>{ post.frontmatter.title }</h1>
				<p>{ post.frontmatter.date }</p>
				<TagContainer>
					{ post.frontmatter.tags.map ((tag) =>
						(
							<Tag key={ post.id + tag }>{ tag }</Tag>
						),
					) }
				</TagContainer>
			</BlogFront>
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
