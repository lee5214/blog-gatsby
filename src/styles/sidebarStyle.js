import { drawerWidth, } from './styles';

const sidebarStyle = theme => ({

	drawerPaper : {
		height: '100vh',
		overflow: 'hidden',
		width : drawerWidth,
		[theme.breakpoints.up ('md')] : {
			position : 'relative',
		},
		border : '10px solid rgba(0,0,0,.2)',
		backgroundImage : 'url(https://png.pngtree.com/element_origin_min_pic/16/12/04/023fdf76046fd281170b30256876ad76.jpg)',//'url(http://discovermagazine.com/~/media/Images/Issues/2017/November/20-things-color.jpg)',
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		'&:before' : {
			content : '""',
			background : 'black',
			opacity : .5,
			width : drawerWidth - 20,
			height : '100%',
			position : 'absolute',
		},
	},
	drawerMobile : {
		height: '100vh',
		overflow: 'hidden',
		width : drawerWidth,
		[theme.breakpoints.up ('md')] : {
			position : 'relative',
		},
		width : drawerWidth,
		background : 'white',
		'&:before' : {
			content : '""',
			background : 'black',
			opacity : .5,
			width: drawerWidth,
			height : '100%',
			position : 'absolute',
		},
	},
});

export default sidebarStyle;
