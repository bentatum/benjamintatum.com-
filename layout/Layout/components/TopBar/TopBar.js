import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { compose, pure, defaultProps } from 'recompact'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import Router from 'next/router'
import { DEFAULT_PROPS } from './config'
import Button from 'material-ui/Button'

const enhance = compose(
  withStyles(require('./style').default),
  defaultProps(DEFAULT_PROPS),
  pure
)

export default enhance(
  ({ className, children, classes, title, onMenuClick }) => (
    <AppBar className={className} position='static' color='default'>
      <Toolbar>
        <IconButton disableRipple onClick={() => Router.push('/blog')}>
          <img src='/static/ben-smile.png' className={classes.img} />
        </IconButton>
        <Typography type='title' color='inherit' className={classes.title}>
          {title}
        </Typography>
        <Button onClick={() => Router.push('/blog')}>
          Blog
        </Button>
        <Button onClick={() => Router.push('/about')}>
          About
        </Button>
      </Toolbar>
    </AppBar>
  )
)
