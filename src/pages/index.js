import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({data}) => {
	const {edges : posts} = data.allMarkdownRemark;
	return (
		<div>
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<Link to="/page-2/">Go to page 2</Link>
			{ posts.map ((post) => {
				return (
					<li key={ post.node.id }>
						<Link to={ post.node.frontmatter.path }
						>
							<h1>{ post.node.frontmatter.title }</h1>
						</Link>
					</li>
				);
			}) }
		</div>
	);
};

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            filter: {frontmatter: {published: {eq: true }}}
            sort: {fields: [frontmatter___date],order:DESC}
        ){
            edges{
                node{
                    id
                    frontmatter{
                        path
                        title
                    }
                }
            }
        }
    }
`;

export default IndexPage;
