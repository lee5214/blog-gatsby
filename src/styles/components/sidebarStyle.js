import { defaultHeight, drawerWidth } from '../styles'

const sidebarStyle = theme => ({
  paperOverlay: {
    width: drawerWidth,
    height: '100%',
    background: 'black',
    position: 'absolute',
    opacity: 0.6,
    zIndex: -1,
  },
  drawerPaper: {
    ...defaultHeight,
    overflow: 'hidden',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    backgroundImage:
      'url(https://fsa.zobj.net/crop.php?r=TWhGDDUAZpX_NiZajnP3z75h0RcQwaVRZWowieYcsqgGIpjcPJ0r4eGLNx9-b3bFwezVBaxM94IbLpM2MwwS1FnnXdMBAiGRoYjMjRj1vSW96_AtF1wbeGEXwr-eK7KxYBUgztaM2jksqAB9)',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRight: '1px solid white',
  },
  drawerPaperMobile: {
    height: '100vh',
    border: 'none',
  },
})

export default sidebarStyle
