import createMuiTheme from 'material-ui/styles/createMuiTheme'

const muiTheme = createMuiTheme({
  floatingActionButton: {
    iconColor: '#666', // desired ripple color
  },
  palette: {
    primary: {
      main: '#000000',
      dark: '#000000',
    },
    secondary: {
      main: '#ff0000',
    },
  },
  overrides: {
    MuiTabs: {
      root: {
        '&:hover': {
          background: 'white !important',
          marginBottom: 20,
        },
        transition: '.25s ease-in-out .25s',
      },
    },
    MuiTab: {
      textColorInherit: {
        color: 'white',
      },
      labelIcon: {
        paddingTop: 44,
        '&:hover': {
          paddingTop: 0,
          color: 'black',
        },
        transition: '.25s ease-in-out .25s',
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          color: 'white !important', // ripple effect
          opacity: 1,
        },
      },
    },

    MuiSvgIcon: {
      root: {
        '&:hover': {
          backgroundColor: 'black',
          fill: 'white !important',
        },
        transition: '.25s ease-in-out .25s',
      },
    },
  },
})

export default muiTheme
