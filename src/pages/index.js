import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ItemGrid from '../components/Grid/ItemGrid';
import WaterfallCard from '../components/Cards/WaterfallCard';
import { BabelIcon, GatsbyIcon, GraphQLIcon, MarkdownIcon, ReactIcon, ReduxIcon, MaterialUIIcon } from '../assets/svg/logos';
import indexPageStyle from '../styles/indexPageStyle';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const logosList = {
	'React' : {
		icon : ReactIcon,
		bgColor : 'blue',
	},
	'Redux' : {
		icon : ReduxIcon,
		bgColor : 'blue',
	},
	'GraphQL' : {
		icon : GraphQLIcon,
		bgColor : 'rose',
	},
	'Babel' : {
		icon : BabelIcon,
		bgColor : 'red',
	},
	'Gatsby' : {
		icon : GatsbyIcon,
		bgColor : 'purple',
	},
	'Markdown' : {
		icon : MarkdownIcon,
		bgColor : 'white',
	},
	'MaterialUI' : {
		icon : MaterialUIIcon,
		bgColor : 'black',
	},
};

/**
 * @param tag is a string got from markdown frontmatter
 * @returns component Avatar
 * this function is for generating tag avatar dynamically based on tag name
 * syntax <logoList[tag].icon is not allowed, so I abstracted this function.
 */


class IndexPage extends Component {

	generateTagAvatar = (tag) => {
		let tagComponent = logosList[tag];
		return tagComponent ? <tagComponent.icon/> : null;
	};
	render() {
		const {data, classes} = this.props;
		const {edges : posts} = data.allMarkdownRemark;
		return (
			<Grid container>
				{ posts.map ((post) => {
					return (
						<ItemGrid xs={ 12 } sm={ 6 } md={ 6 } key={ post.node.id }>
							<WaterfallCard
								icon={ logosList[`${post.node.frontmatter.about}`].icon }
								iconColor={ logosList[`${post.node.frontmatter.about}`].bgColor }
								info={ post.node.frontmatter.date }
								title={ post.node.frontmatter.title }
								postLink={ post.node.frontmatter.path }
							>
								<Grid container>
									<Grid item xs={ 12 }>
										<Grid container className={ classes.tagGrid }>
											{ /*<div className={ classes.row }>*/ }
											{ post.node.frontmatter.tags.map ((tag) => (
												<Grid item key={ `${post.node.id}${tag}` }>
													<Avatar
														alt={ tag }
														className={ classes.tagAvatar }
													>
														{ this.generateTagAvatar (tag) }
													</Avatar>
												</Grid>
											)) }
											{ /*</div>*/ }
											<Divider/>
										</Grid>
									</Grid>
									<Grid item xs={ 12 }>
										<Grid container>
											<Grid item xs={ 12 }>
												{post.node.frontmatter.snippet}
											</Grid>
										</Grid>
									</Grid>
								</Grid>

							</WaterfallCard>
						</ItemGrid>

					);
				}) }
			</Grid>
		);
	}
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
	                    snippet
                    }
                }
            }
        }
    }
`;

IndexPage.propTypes = {
	data : PropTypes.object.isRequired,
	classes : PropTypes.object.isRequired,

};

export default withStyles (indexPageStyle) (IndexPage);
