// import { primaryColor } from './styles'
const postTemplateStyle = theme => ({
  container: {
    backgroundColor: 'black',
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
    fontFamily: 'audiowide'
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
    background: '#72fffa',
    padding: '0  .5rem',
    marginRight: '1rem'
  }
});

export default postTemplateStyle;
