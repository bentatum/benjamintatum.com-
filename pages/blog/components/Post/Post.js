
import { get } from 'lodash'
import { markdown } from 'markdown'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const enhance = withStyles(require('./style').default)

export default enhance(({ classes, post }) =>
  <div className={classes[`post-type-${get(post, 'type.slug')}`]}>
    <Typography type='title' color='inherit'>
      {post.title}
    </Typography>
    <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(post.body) }} />
  </div>
)
