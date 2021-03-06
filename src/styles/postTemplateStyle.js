// import { primaryColor } from './styles'
const postTemplateStyle = {
  container: {
    backgroundColor: '#313131',
    color: 'white',
    padding: '1rem 1rem 0',
  },
  detailFront: {
    border: '1px solid white',
    padding: '1rem',
    marginBottom: '1rem',
    fontFamily: 'Montserrat',
    fontWeight: 400
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight:'500',
    textTransform:'capitalize'
  },
  postContentWrapper: {
    fontFamily: 'roboto',
    textAlign: 'justify',
    '&>h1,h2,h3,h4': {
      marginTop: '2.5rem',
      fontFamily: 'Montserrat'
    },
    '&>p>code': {
      // color: 'black',
      // backgroundColor: primaryColor,
      padding: '.05rem .25rem'
    }
  },
  tagContainer: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap'
  },
  tag: {
    fontSize:'14px',
    background: '#007c94',
    padding: '.2rem .5rem',
    margin: '.3rem .5rem'
  }
};

export default postTemplateStyle;
