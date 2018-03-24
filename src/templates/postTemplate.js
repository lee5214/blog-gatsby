import React from 'react';
import styled from 'styled-components';
import {withStyles} from 'material-ui/styles'
import postTemplateStyle from '../styles/postTemplateStyle'

const DetailFront = styled.div`
	
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
const  PostTemplate= ({data,classes}) =>{
	const {markdownRemark : post} = data;
	return (
		<div>
			<div className={classes.detailFront}>
				<h1>{ post.frontmatter.title }</h1>
				<p>{ post.frontmatter.date }</p>
				<TagContainer>
					{ post.frontmatter.tags.map ((tag) =>
						(
							<Tag key={ post.id + tag }>{ tag }</Tag>
						),
					) }
				</TagContainer>
			</div>
			<MDContentWrapper
				className={classes.roboto}
				dangerouslySetInnerHTML={ {__html : post.html} }/>
		</div>
	);
}
export default withStyles(postTemplateStyle)(PostTemplate)

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
