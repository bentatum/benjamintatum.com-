export default theme => ({
  root: {
    height: 136,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  title: {
    marginTop: theme.spacing.unit
  },
  img: {
    height: 42
  },
  iconTitleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  more: {
    // position: 'absolute',
    // right: 0
  }
})
