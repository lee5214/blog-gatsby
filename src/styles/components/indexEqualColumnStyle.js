const indexEqualColumnStyle = () => ({
  cardsGrid: {},
  tagGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,

    marginTop: 5,
  },
  tagAvatar: {
    margin: '0 5px',
    width: 30,
    height: 30,
    backgroundColor: '#e0e0e0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
})

export default indexEqualColumnStyle
