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
  whiteCardHeader
} from '../styles';

const postItemCardStyle = theme => ({
  cardContainer: {
    overflow: 'visible',
    '&:hover':{
      boxShadow: '0 4px 20px 0px rgba(0,0,0, 0.16)'
    }
  },
  card,
  cardHeader: {
    ...cardHeader,
    float: 'left',
    textAlign: 'center'
  },
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  whiteCardHeader,
  blackCardHeader,
  cardContent: {
    textAlign: 'right',
    paddingTop: '10px',
    padding: '15px 20px',
    marginTop: '30px'
  },
  cardIcon: {
    width: '40px',
    height: '40px',
    fill: '#fff !important',
    '&:hover': {
      background: 'transparent'
    }
  },
  cardAvatar: {
    margin: 0
  },
  cardCategory: {
    marginBottom: '0',
    color: grayColor,
    margin: '0 0 10px',
    ...defaultFont
  },
  cardTitle: {
    margin: '1.5rem 0 .5rem',
    ...defaultFont,
    fontSize: '1.425em',
    fontWeight: '400',
    textAlign: 'right'
  },
  cardTitleSmall: {
    fontSize: '100%',
    fontWeight: '400',
    lineHeight: '1',
    color: 'black',
    background: 'white',
    padding: '0 .4rem',
    margin: '.1rem .4rem'
  },
  cardActions: {
    ...cardActions,
    padding: '0!important'
  },
  cardTitleLink: {
    ...defaultLink,
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat',
    background: 'black',
    color: 'white',
    padding: '5px 20px',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.75rem'
    }
  }
});

export default postItemCardStyle;
