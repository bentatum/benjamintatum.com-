import { compose, pure } from 'recompact'
import { TopBar } from './components'
// import Drawer from 'material-ui/Drawer'
import { withStyles } from 'material-ui/styles'

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

const enhance = compose(withStyles(require('./style').default), pure)

export default enhance(
  ({ topBar, drawerNav, classes, handleToggleMenu, drawer, children, ...props }) => (
    <main>
      <TopBar {...topBar} className={classes.topBar} />
      <div className={classes.children}>{children}</div>
    </main>
  )
)
