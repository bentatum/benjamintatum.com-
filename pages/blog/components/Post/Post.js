
import { markdown } from 'markdown'
import Typography from 'material-ui/Typography'
import { mapProps } from 'recompact'
import { withStyles } from 'material-ui/styles'
import { propsMap } from './lib'

const enhance = withStyles(require('./style').default)

export default enhance(({ classes, post }) =>
  <div className={classes[`post-type-${post.type.slug}`]}>
    <Typography type='title' color='inherit'>
      {post.title}
    </Typography>
    <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(post.body) }} />
  </div>
)
