
import { Layout } from 'layout'
import { withStyles } from 'material-ui/styles'
import { mapProps, setStatic, compose } from 'recompact'
import { withRedux } from 'lib'
import { withMUI } from 'components'
import { propsMap, mapStore, getInitialProps } from './lib'
import { Post, PostPreviewList } from './components'

const enhance = compose(
  withRedux(mapStore),
  setStatic('getInitialProps', getInitialProps),
  withMUI,
  withStyles(require('./style').default),
  mapProps(propsMap)
)

export default enhance(({ isPost, classes, post, posts, url }) =>
  <Layout
    url={url}
    post={isPost && post}
    topBar={{ url, className: classes.topBar }}>
    {isPost
      ? <Post post={post} />
      : <PostPreviewList posts={posts} />
    }
  </Layout>
)
