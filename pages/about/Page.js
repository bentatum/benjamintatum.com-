
import { Layout } from 'layout'
import { withRedux } from 'lib'
import { withRoot } from 'components'
import { mapStore, getInitialProps } from './lib'
import Typography from 'material-ui/Typography'
import { setStatic, pure, compose } from 'recompact'
import { markdown } from 'markdown'
import { withStyles } from 'material-ui/styles'

const enhance = compose(
  withStyles(require('./style').default),
  withRedux(mapStore),
  setStatic('getInitialProps', getInitialProps),
  withRoot,
  pure
)

export default enhance(({ classes, content }) =>
  <Layout topBar={{ title: 'About Ben' }}>
    <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(content) }} />
    <div className={classes.imgContainer}>
      <div className={classes.imgWrapper}>
        <img className={classes.img} src='/static/ben-tree-pose.png' />
      </div>
    </div>
  </Layout>
)
