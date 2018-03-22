import {
	blueCardHeader,
	card,
	cardActions,
	cardHeader,
	dangerColor,
	defaultFont,
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
	blackCardHeader,
	defaultLink
} from '../styles';

const statsCardStyle = {
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
		marginTop: '30px',
	},
	cardIcon : {
		width : '40px',
		height : '40px',
		fill : '#fff',
	},
	cardAvatar : {
		margin: 0
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
		textAlign : 'left',
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
	cardStats : {
		lineHeight : '22px',
		color : grayColor,
		fontSize : '12px',
		display : 'inline-block',
		margin : '0!important',
	},
	cardStatsIcon : {
		position : 'relative',
		top : '4px',
		width : '16px',
		height : '16px',
	},
	warningCardStatsIcon : {
		color : warningColor,
	},
	primaryCardStatsIcon : {
		color : primaryColor,
	},
	dangerCardStatsIcon : {
		color : dangerColor,
	},
	successCardStatsIcon : {
		color : successColor,
	},
	infoCardStatsIcon : {
		color : infoColor,
	},
	roseCardStatsIcon : {
		color : roseColor,
	},
	grayCardStatsIcon : {
		color : grayColor,
	},
	cardStatsLink : {
		color : primaryColor,
		textDecoration : 'none',
		...defaultFont,
	},
	cardTitleLink : {
		color: grayColor,
		...defaultLink,

	}
};

export default statsCardStyle;
