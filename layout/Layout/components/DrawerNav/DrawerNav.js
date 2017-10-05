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
  <div>
    {user && [
      <List key={1}>
        <ListItem button onClick={() => expandSalesMenu(!salesMenuExpanded)}>
          <ListItemText primary='Sales' />
        </ListItem>
        <Collapse in={salesMenuExpanded}>
          <NavItem
            primary='Pending'
            href='/sales?status=pending'
            hrefAs='/sales/pending'
            badgeContent={get(meta, 'salesAmounts.pending')}
          />
          <NavItem
            primary='Approved'
            href='/sales?status=approved'
            hrefAs='/sales/approved'
            badgeContent={get(meta, 'salesAmounts.approved')}
          />
          <NavItem
            primary='Rejected'
            href='/sales?status=rejected'
            hrefAs='/sales/rejected'
            badgeContent={get(meta, 'salesAmounts.rejected')}
          />
        </Collapse>
      </List>,
      <Divider key={2} />
    ]}
    <List>
      {!user ? (
        <ListItem button onClick={() => Router.push('/login')}>
          <ListItemText primary='Login' />
        </ListItem>
      ) : (
        <ListItem button onClick={() => Router.push('/logout')}>
          <ListItemText primary='Logout' />
        </ListItem>
      )}
    </List>
  </div>
))
