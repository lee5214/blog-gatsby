const indexEqualColumnStyle = () => ({
  cardsGrid: {
    '&:after': {
      content: "''",
      width: 2,
      height: '100%',
      position: 'absolute',
      left: '50%',
      background: 'black',
      marginLeft: 300 / 2, // sidebar width/2
    },
  },
  tagGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,

    marginTop: 5,
  },
  tagAvatar: {
    width: 30,
    height: 30,
    backgroundColor: '#e0e0e0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
})

export default indexEqualColumnStyle
