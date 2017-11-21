import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import Router from 'next/router'
import Button from 'material-ui/Button'
import MoreIcon from 'material-ui-icons/MoreHoriz'

const enhance = withStyles(require('./style').default)

/*
<Button
  color={url.pathname === '/blog' ? 'primary' : 'inherit'}
  onClick={() => Router.push('/blog')}>
  Blog
</Button>
<Button
  color={url.pathname === '/about' ? 'primary' : 'inherit'}
  onClick={() => Router.push('/about')}>
  About
</Button>
*/

export default enhance(
  ({ url, children, classes, title, onMenuClick }) => (
    <AppBar position='static'>
      <Toolbar classes={{ root: classes.root }}>
        <IconButton disableRipple onClick={() => Router.push('/home', '/')}>
          <img src='/static/ben-smile.png' className={classes.img} />
        </IconButton>
        <If condition={title}>
          <Typography type='title' color='inherit' className={classes.title}>
            {title}
          </Typography>
        </If>
        <IconButton onClick={onMenuClick}>
          <MoreIcon color='#fff' />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
)
