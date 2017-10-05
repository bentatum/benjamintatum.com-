import { ListItem, ListItemText } from 'material-ui/List'
import Router from 'next/router'
import { pure } from 'recompact'
import Badge from 'material-ui/Badge'

export default pure(({ badgeContent, href, hrefAs, primary }) => (
  <ListItem button onClick={() => Router.push(href, hrefAs)}>
    {badgeContent ? (
      <Badge badgeContent={badgeContent} color='primary'>
        <ListItemText inset primary={primary} />
      </Badge>
    ) : (
      <ListItemText inset primary={primary} />
    )}
  </ListItem>
))
