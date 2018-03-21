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
	'React': ReactIcon,
	'Babel': BabelIcon,
	'Gatsby': GatsbyIcon,
}
const IndexPage = ({data}) => {
	const {edges : posts} = data.allMarkdownRemark;
	return (
		<Grid container>
			{ posts.map ((post) => {
				return (
					<ItemGrid xs={ 12 } sm={ 6 } md={ 6 } key={ post.node.id }>
						<WaterfallCard
							icon={logosList[`${post.node.frontmatter.about}`]}
							iconColor='orange'
							title={ post.node.frontmatter.title }
							description='49/50'
							small='GB'
							statIcon={ Warning }
							statIconColor='danger'
							statLink={ {text : 'Get More Space...', href : '#pablo'} }
						/>

						<Link to={ post.node.frontmatter.path }
						>
							<h1>{ post.node.frontmatter.title }</h1>
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
	                    about
                    }
                }
            }
        }
    }
`;

export default withStyles (appStyle) (IndexPage);
