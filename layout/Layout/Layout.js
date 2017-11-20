import { withState, mapProps, compose, pure } from 'recompact'
import { DrawerNav, TopBar } from './components'
import Drawer from 'material-ui/Drawer'
import { withStyles } from 'material-ui/styles'
import { propsMap } from './lib'

const enhance = compose(
  withStyles(require('./style').default),
  mapProps(propsMap),
  withState('menu', 'toggleMenu', false)
)

export default enhance(
  ({ menu, style, topBar, drawerNav, classes, toggleMenu, drawer, children, ...props }) => (
    <main className={classes.root} style={style}>
      <TopBar {...topBar} onMenuClick={() => toggleMenu(true)} />
      <Drawer
        anchor='top'
        open={menu}
        onRequestClose={() => toggleMenu(false)}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <DrawerNav {...drawerNav} />
      </Drawer>
      {children}
    </main>
  )
)
