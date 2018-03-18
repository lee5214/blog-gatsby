import React from 'react';
import Link from 'gatsby-link'

/*const Sidebar =({data})=> {

	const {edges : posts} = data.allMarkdownRemark;
	return (
		<div>
			{posts.map((post) => (
				<Link key={post.node.id}
					to={post.node.frontmatter.path}
				>
					{post.node.frontmatter.title}
				</Link>
			))}
		</div>
	)
}

export const listQuery = graphql`
	query Indexquery {
		allMarkdownRemark(
			limit: 100
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
`*/
const Sidebar = ()=>{
	return (
		<div>test</div>
	)
}
export default Sidebar
