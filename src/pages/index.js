import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ItemGrid from '../components/Grid/ItemGrid';
import WaterfallCard from '../components/Cards/WaterfallCard';
import { ContentCopy, Warning } from 'material-ui-icons';
import {ReactIcon, GatsbyIcon, BabelIcon} from '../assets/svg/logos'
import appStyle from '../styles/styles/appStyle';

const logosList = {
	'React': {
		icon:ReactIcon,
		bgColor: 'blue'
	},
	'Babel': {
		icon:BabelIcon,
		bgColor: 'green'
	},
	'Gatsby': {
		icon:GatsbyIcon,
		bgColor: 'purple'
	},
}
const IndexPage = ({data}) => {
	const {edges : posts} = data.allMarkdownRemark;
	return (
		<Grid container>
			{ posts.map ((post) => {
				return (
					<ItemGrid xs={ 12 } sm={ 6 } md={ 6 } key={ post.node.id }>
						<WaterfallCard
							icon={logosList[`${post.node.frontmatter.about}`].icon}
							iconColor={logosList[`${post.node.frontmatter.about}`].bgColor}
							title={ post.node.frontmatter.date }
							description={ post.node.frontmatter.title }

							statIcon={ Warning }
							statIconColor='danger'
							statLink={ {text : 'Get More Space...', href : '#pablo'} }
						>
							{post.node.frontmatter.tags.map(tag => (
								<div>{tag}</div>
							))}
						</WaterfallCard>

						<Link to={ post.node.frontmatter.path }
						>
						</Link>
					</ItemGrid>

				);
			}) }
		</Grid>
	);
};

export const listQuery = graphql`
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
	                    date
	                    about
	                    tags
                    }
                }
            }
        }
    }
`;

export default withStyles (appStyle) (IndexPage);
