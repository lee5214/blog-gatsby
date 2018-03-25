import React from 'react';
import moment from 'moment';
import { Card, CardActions, CardContent, CardHeader, Typography, withStyles } from 'material-ui';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import postItemCardStyle from '../../styles/postItemCardStyle';

function PostItemCard ({...props}) {
	const {
		classes,
		postDate,
		title,
		small,
		iconColor,
		postLink,
	} = props;
	return (
		<Card className={ classes.card }>
			<CardHeader
				classes={ {
					root : classes.cardHeader + ' ' + classes[iconColor + 'CardHeader'],
					avatar : classes.cardAvatar,
				} }
				avatar={ <props.icon className={ classes.cardIcon }/> }
			/>
			<CardContent className={ classes.cardContent }>
				<Typography component='p' className={ classes.cardCategory }>
					{ moment (postDate).format( 'MMMM DD YYYY') }
				</Typography>
				<Typography
					variant='headline'
					component='h3'
					className={ classes.cardTitle }
				>
					<Link to={ postLink } className={ classes.cardTitleLink }>
						{ title }
						{ small !== undefined ? (
							<small className={ classes.cardTitleSmall }>{ small }</small>
						) : null }
					</Link>

				</Typography>
			</CardContent>
			<CardActions className={ classes.cardActions }>
				<div>
					{ props.children || null }
				</div>
			</CardActions>
		</Card>
	);
}

PostItemCard.defaultProps = {
	iconColor : 'purple',
};

PostItemCard.propTypes = {
	children : PropTypes.object,
	classes : PropTypes.object.isRequired,
	icon : PropTypes.func.isRequired,
	iconColor : PropTypes.oneOf (['orange', 'green', 'red', 'blue', 'purple']),
	postDate : PropTypes.node,
	title : PropTypes.node,
	small : PropTypes.node,
	postLink : PropTypes.string.isRequired,
};

export default withStyles (postItemCardStyle) (PostItemCard);
