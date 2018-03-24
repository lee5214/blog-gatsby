import { drawerWidth, } from './styles';

const sidebarStyle = theme => ({
	paperOverlay : {
		width : drawerWidth,
		height : '100%',
		background : 'black',
		position : 'absolute',
		opacity : .6,
		zIndex : -1,
	},
	drawerPaper : {
		height : 'calc(100vh - 16px)',
		overflow : 'hidden',
		width : drawerWidth,
		[theme.breakpoints.up ('md')] : {
			position : 'relative',
		},
		// borderLeft : '10px solid rgba(0,0,0,.5)',
		// borderRight : '10px solid rgba(0,0,0,.5)',
		backgroundImage : 'url(https://fsa.zobj.net/crop.php?r=TWhGDDUAZpX_NiZajnP3z75h0RcQwaVRZWowieYcsqgGIpjcPJ0r4eGLNx9-b3bFwezVBaxM94IbLpM2MwwS1FnnXdMBAiGRoYjMjRj1vSW96_AtF1wbeGEXwr-eK7KxYBUgztaM2jksqAB9)',
		backgroundPosition : '50% 50%',
		backgroundRepeat : 'no-repeat',
		backgroundSize : 'cover',
		// '&:before' : {
		//  content : '""',
		//  background : 'black',
		//  opacity : .8,
		//  width : drawerWidth,
		//  height : '100%',
		//  position : 'absolute',
		//  },
	},
});

export default sidebarStyle;
