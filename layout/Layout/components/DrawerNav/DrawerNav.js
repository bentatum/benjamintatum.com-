import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Router from 'next/router'
import { withState, compose, pure } from 'recompact'
import Collapse from 'material-ui/transitions/Collapse'
import { get } from 'lodash'
import { NavItem } from './components'

const enhance = compose(
  withState('salesMenuExpanded', 'expandSalesMenu', false),
  pure
)

export default enhance(({ meta, expandSalesMenu, salesMenuExpanded, user }) => (
  <List>
    <ListItem component='a' href='mailto:bentatum@me.com'>
      <ListItemText primary='Contact' />
    </ListItem>
  </List>
))
