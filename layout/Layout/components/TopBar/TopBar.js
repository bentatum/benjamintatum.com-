import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import Router from 'next/router'
import Button from 'material-ui/Button'

const enhance = withStyles(require('./style').default)

export default enhance(
  ({ className, children, classes, title, onMenuClick }) => (
    <AppBar className={className} position='static' color='default'>
      <Toolbar>
        <div className={classes.iconTitleWrapper}>
          <IconButton disableRipple onClick={() => Router.push('/home', '/')}>
            <img src='/static/ben-smile.png' className={classes.img} />
          </IconButton>
          <If condition={title}>
            <Typography type='title' color='inherit' className={classes.title}>
              {title}
            </Typography>
          </If>
        </div>
        <Button onClick={() => Router.push('/blog')}>
          Blog
        </Button>
        <Button onClick={() => Router.push('/about')}>
          About
        </Button>
        <Button onClick={() => Router.push('/resume')}>
          Resume
        </Button>
      </Toolbar>
    </AppBar>
  )
)
