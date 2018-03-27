import {
	blackCardHeader,
	blueCardHeader,
	card,
	cardActions,
	cardHeader,
	defaultFont,
	defaultLink,
	grayColor,
	greenCardHeader,
	orangeCardHeader,
	purpleCardHeader,
	redCardHeader,
	whiteCardHeader,
} from '../styles';

const postItemCardStyle = theme => ({
	card,
	cardHeader : {
		...cardHeader,
		float : 'left',
		textAlign : 'center',
	},
	orangeCardHeader,
	greenCardHeader,
	redCardHeader,
	blueCardHeader,
	purpleCardHeader,
	whiteCardHeader,
	blackCardHeader,
	cardContent : {
		textAlign : 'right',
		paddingTop : '10px',
		padding : '15px 20px',
		marginTop : '30px',
	},
	cardIcon : {
		width : '40px',
		height : '40px',
		fill : '#fff !important',
		'&:hover' : {
			background: 'transparent'
		}
	},
	cardAvatar : {
		margin : 0,
	},
	cardCategory : {
		marginBottom : '0',
		color : grayColor,
		margin : '0 0 10px',
		...defaultFont,
	},
	cardTitle : {
		margin : '1.5rem 0 .5rem',
		...defaultFont,
		fontSize : '1.425em',
		fontWeight : '400',
		textAlign : 'right',
	},
	cardTitleSmall : {
		fontSize : '100%',
		fontWeight : '400',
		lineHeight : '1',
		color : 'black',
		background : 'white',
		padding : '.1rem .4rem',
		margin : '.1rem .4rem',
	},
	cardActions : {
		...cardActions,
		padding : '0!important',
	},
	cardTitleLink : {
		...defaultLink,
		textDecoration : 'none',
		textTransform : 'capitalize',
		fontFamily : 'Montserrat',
		background : 'black',
		color : 'white',
		padding : '4px',

		textAlign : 'center',
		[theme.breakpoints.up ('md')] : {
			fontSize : '1.25rem',
		},
		[theme.breakpoints.down ('sm')] : {
			fontSize : '1rem',
		},
	},
});

export default postItemCardStyle;