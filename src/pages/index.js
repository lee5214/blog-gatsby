import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ItemGrid from '../components/Grid/ItemGrid';
import PostItemCard from '../components/Cards/PostItemCard';
import {
	BabelIcon,
	GatsbyIcon,
	GraphQLIcon,
	MarkdownIcon,
	MaterialUIIcon,
	ReactIcon,
	ReduxIcon,
} from '../assets/svg/logos';
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

const style = {
	width: 24,
	height: 24,
}
/**
 * @param tag is a string got from markdown frontmatter
 * @returns component Avatar
 * this function is for generating tag avatar dynamically based on tag name
 * syntax <logoList[tag].icon is not allowed, so I abstracted this function.
 */
class IndexPage extends Component {


	generateTagAvatar = (tag, tagFillColor) => {
		let tagComponent = logosList[tag];
		return tagComponent ? <tagComponent.icon fill={tagFillColor}/> : null;
	};

	render () {
		const {data, classes} = this.props;
		const {edges : posts} = data.allContentfulPost;
		const tagFillColor = '';

		return (
			<Grid container>
				{ posts.map ((post) => {
					return (
						<ItemGrid xs={ 12 } sm={ 12 } md={ 12 } lg={6} key={ post.node.id }>
							<PostItemCard
								icon={ logosList[`${post.node.focus}`].icon }
								iconColor={ logosList[`${post.node.focus}`].bgColor }
								postDate={ post.node.date }
								title={ post.node.title }
								postLink={ post.node.slug }
								seriesNumber={ post.node.seriesNumber }
							>
								<Grid container>
									<Grid item xs={ 12 }>
										<Grid container className={ classes.tagGrid }>
											{ /*<div className={ classes.row }>*/ }
											{ post.node.tags.map ((tag) => (
												<Grid item key={ `${post.node.id}${tag}` }>
													<Avatar
														alt={ tag }
														className={ classes.tagAvatar }
													>
														{/*{ this.generateTagAvatar (tag, tagFillColor) }*/}
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
												{ post.node.snippet.snippet }
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</PostItemCard>
						</ItemGrid>

					);
				}) }
			</Grid>
		);
	}
};

export const listQuery = graphql`
    query PageIndexQuery {
        allContentfulPost{
            edges{
                node{
                    id
                    title
                    slug
                    focus
                    date
                    tags
                    seriesNumber
                    snippet{
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
