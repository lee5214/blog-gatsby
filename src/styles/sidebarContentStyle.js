// ##############################
// // // Sidebar styles
// #############################

import {
	boxShadow,
	dangerColor,
	defaultFont,
	drawerWidth,
	infoColor,
	primaryBoxShadow,
	primaryColor,
	successColor,
	transition,
	warningColor,
} from './styles';

const sidebarContentStyle = theme => ({
	buttonText : {
		margin: '10px, 0',
		padding : 0,
		textAlign : 'right',
	},
	buttonTextPrimary : {
		fontWeight: 400,
		color : 'white',
		textAlign : 'left',
		fontFamily : 'Montserrat',

	},
	headerDivider : {
		width : '60%',
		background : 'white',
		margin : '0 auto'
	},
	sidebarListContainer : {
		maxHeight: '100%',
		overflow: 'scroll',
	},
	sidebarList : {
		height : 'auto',
		overflow : 'scroll',
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	drawerPaper : {
		border : 'none',
		position : 'fixed',
		top : '0',
		bottom : '0',
		left : '0',
		zIndex : '1',
		// overflow: 'auto',
		...boxShadow,
		width : drawerWidth,
		[theme.breakpoints.up ('md')] : {
			width : drawerWidth,
			position : 'fixed',
			height : '100%',
		},
		[theme.breakpoints.down ('sm')] : {
			width : drawerWidth,
			...boxShadow,
			position : 'fixed',
			display : 'block',
			top : '0',
			height : '100vh',
			right : '0',
			left : 'auto',
			zIndex : '1032',
			visibility : 'visible',
			overflowY : 'visible',
			borderTop : 'none',
			textAlign : 'left',
			paddingRight : '0px',
			paddingLeft : '0',
			transform : `translate3d(${drawerWidth}px, 0, 0)`,
			...transition,
		},
	},
	logo : {
		marginTop: 40,
		display : 'flex',
		justifyContent : 'center',
		position : 'relative',
		padding : '15px 15px',
		zIndex : '4',
	},
	logoLink : {
		...defaultFont,
		textTransform : 'uppercase',
		padding : '5px 0',
		display : 'block',
		fontSize : '18px',
		textAlign : 'left',
		fontWeight : '400',
		lineHeight : '30px',
		textDecoration : 'none',
		backgroundColor : 'transparent',
		'&,&:hover' : {
			color : '#FFFFFF',
		},
	},
	logoImage : {
		margin : '0 auto',
		width : '30px',
		display : 'inline-block',
		maxHeight : '30px',
		marginLeft : '10px',
		marginRight : '15px',
	},
	img : {
		width : '35px',
		top : '22px',
		position : 'absolute',
		verticalAlign : 'middle',
		border : '0',
	},
	background : {
		position : 'absolute',
		zIndex : '1',
		height : '100%',
		width : '100%',
		display : 'block',
		top : '0',
		left : '0',
		backgroundSize : 'cover',
		backgroundPosition : 'center center',
		'&:after' : {
			position : 'absolute',
			zIndex : '3',
			width : '100%',
			height : '100%',
			content : '',
			display : 'block',
			background : '#000',
			opacity : '.8',
		},
	},
	list : {
		marginTop : '20px',
		paddingLeft : '0',
		paddingTop : '0',
		paddingBottom : '0',
		marginBottom : '0',
		listStyle : 'none',
	},
	item : {
		position : 'relative',
		display : 'block',
		textDecoration : 'none',
	},
	itemLink : {
		color: 'rgba(0, 0, 0, 1)',
		width : 'auto',
		transition : 'all 300ms linear',
		margin : '1rem .5rem ',
		padding : '1rem .5rem',
		borderRadius : '3px',
		position : 'relative',
		display : 'block',
		backgroundColor : 'transparent',
		...defaultFont,
		/*'& :hover' : {
			backgroundColor : 'rgba(255, 255, 255, 0.24) !important',
		}*/
	},
	itemIcon : {
		width : '24px',
		height : '30px',
		float : 'left',
		marginRight : '15px',
		textAlign : 'center',
		verticalAlign : 'middle',
		color : 'rgba(255, 255, 255, 0.8)',
	},
	itemText : {
		...defaultFont,
		lineHeight : '30px',
		fontSize : '14px',
		color : '#FFFFFF',
	},
	whiteFont : {
		color : '#FFFFFF',
	},
	purple : {
		backgroundColor : primaryColor,
		...primaryBoxShadow,
		'&:hover' : {
			backgroundColor : primaryColor,
			...primaryBoxShadow,
		},
	},
	blue : {
		backgroundColor : infoColor,
		boxShadow :
			'0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
		'&:hover' : {
			backgroundColor : infoColor,
			boxShadow :
				'0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
		},
	},
	green : {
		backgroundColor : successColor,
		boxShadow :
			'0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)',
		'&:hover' : {
			backgroundColor : successColor,
			boxShadow :
				'0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)',
		},
	},
	orange : {
		backgroundColor : warningColor,
		boxShadow :
			'0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)',
		'&:hover' : {
			backgroundColor : warningColor,
			boxShadow :
				'0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)',
		},
	},
	red : {
		backgroundColor : dangerColor,
		boxShadow :
			'0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)',
		'&:hover' : {
			backgroundColor : dangerColor,
			boxShadow :
				'0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)',
		},
	},
	sidebarWrapper : {
		position : 'relative',
		height : 'calc(100vh - 75px)',
		overflow : 'auto',
		width : '260px',
		zIndex : '4',
		overflowScrolling : 'touch',
	},
});

export default sidebarContentStyle;
