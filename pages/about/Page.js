
import { Layout } from 'layout'
import { withRedux } from 'lib'
import { withMUI } from 'components'
import { mapStore, getInitialProps } from './lib'
import { setStatic, compose } from 'recompact'
import { markdown } from 'markdown'
import { withStyles } from 'material-ui/styles'

const enhance = compose(
  withStyles(require('./style').default),
  withRedux(mapStore),
  setStatic('getInitialProps', getInitialProps),
  withMUI
)

export default enhance(({ url, classes, content }) =>
  <Layout topBar={{ url }}>
    <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(content) }} />
    <div className={classes.imgContainer}>
      <div className={classes.imgWrapper}>
        <img className={classes.img} src='/static/ben-tree-pose.png' />
      </div>
    </div>
  </Layout>
)
