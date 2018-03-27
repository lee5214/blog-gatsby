import { container, defaultLink, drawerWidth, transition } from './styles.jsx';

const indexPageStyle = (theme) => ({
	wrapper : {
		position : 'relative',
		top : '0',
		height : '100vh',
	},
	mainPanel : {
		[theme.breakpoints.up ('md')] : {
			width : `calc(100% - ${drawerWidth}px)`,
		},
		overflow : 'auto',
		position : 'relative',
		float : 'right',
		...transition,
		maxHeight : '100%',
		width : '100%',
		overflowScrolling : 'touch',
	},
	content : {
		marginTop : '70px',
		padding : '30px 15px',
		minHeight : 'calc(100% - 123px)',
	},
	container,
	map : {
		marginTop : '70px',
	},

	tagGrid : {
		display : 'flex',
		justifyContent : 'center',
		flexGrow : 1,

		marginTop : 5,
	},
	tagAvatar : {
		width : 30,
		height : 30,
		backgroundColor: '#e0e0e0',
		'&:hover':{
			backgroundColor: 'transparent',
		}
	},
	titleLink : {
		...defaultLink,
		fontWeight : 100,
	},
});

export default indexPageStyle;
