const drawerWidth = 300;
const layoutStyle = (theme) => ({
	root : {
		flexGrow : 1,
		height : 'calc(100vh - 2rem)',
		zIndex : 1,
		position : 'relative',
		display : 'flex',
		overflow : 'hidden',
		margin : '1rem',
		borderRadius : '1rem',
	},
	appBar : {
		//background : '#343434',
		color : 'white',
		position : 'absolute',
		marginLeft : drawerWidth,
		[theme.breakpoints.up ('md')] : {
			width : `calc(100% - ${drawerWidth}px)`,
		},
	},
	navIconHide : {
		[theme.breakpoints.up ('md')] : {
			display : 'none',
		},
	},
	MainContent : {
		marginTop : 140,
		width : '100%',
		overflow : 'scroll',
		flexGrow : 1,
		backgroundColor : theme.palette.background.default,
		padding : theme.spacing.unit * 3,
	},
	tabBadge : {
		height : 40,
		width : 40,
		'& > span' : { // for small tab content
			top : 'auto',
			bottom : 0,
			right : -20,
			backgroundColor : 'transparent',
			borderRadius : 0,
			color : 'white',
		},
	},
	tabIcon : {
		width : 40,
		height : 40,
		marginBottom : 0,
		'&:: hover' : {
			marginBottom : '1rem',
		},
	},
	postBlock : {
		margin : '0 auto',
		maxWidth : '960px',
		padding : '0 .0875rem 1.45rem',
		paddingTop : 0,
	},
});


export default layoutStyle;
