import {
	blackCardHeader,
	blueCardHeader,
	card,
	cardActions,
	cardHeader,
	dangerColor,
	defaultFont,
	defaultLink,
	grayColor,
	greenCardHeader,
	infoColor,
	orangeCardHeader,
	primaryColor,
	purpleCardHeader,
	redCardHeader,
	roseColor,
	successColor,
	warningColor,
	whiteCardHeader,
} from './styles';

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
		fill : '#fff',
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
		margin : '0',
		...defaultFont,
		fontSize : '1.425em',
		fontWeight : '400',
		textAlign : 'right',
	},
	cardTitleSmall : {
		fontSize : '65%',
		fontWeight : '400',
		lineHeight : '1',
		color : '#777',
	},
	cardActions : {
		...cardActions,
		padding : '0!important',
	},
	cardTitleLink : {
		...defaultLink,
		textDecoration : 'none',
		textTransform: 'capitalize',
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
