export default theme => ({
  root: {
    height: 180,
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
    // height: 82
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
