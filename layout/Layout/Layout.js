import { mapProps, compose, pure } from 'recompact'
import { TopBar } from './components'
// import Drawer from 'material-ui/Drawer'
import { withStyles } from 'material-ui/styles'
import { propsMap } from './lib'

/*
  <Drawer
    type='permanent'
    open={drawer}
    onRequestClose={handleToggleMenu}
    onClick={handleToggleMenu}
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <DrawerNav {...drawerNav} />
  </Drawer>
*/

const enhance = compose(
  withStyles(require('./style').default),
  mapProps(propsMap),
  pure
)

export default enhance(
  ({ style, topBar, drawerNav, classes, handleToggleMenu, drawer, children, ...props }) => (
    <main className={classes.root} style={style}>
      <TopBar {...topBar} />
      <div className={classes.children}>{children}</div>
    </main>
  )
)
