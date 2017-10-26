
import { get } from 'lodash'
import { Layout } from 'layout'
import { withStyles } from 'material-ui/styles'
import { mapProps, setStatic, compose } from 'recompact'
import { withRedux } from 'lib'
import { withMUI } from 'components'
import { propsMap, mapStore, getInitialProps } from './lib'
import Link from 'next/link'
import { Post, PostPreviewList } from './components'
import { markdown } from 'markdown'
import Typography from 'material-ui/Typography'

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
    topBar={{
      title: 'Ben\'s Blog',
      className: classes.topBar
    }}>
    {isPost
      ? <Post post={post} />
      : <PostPreviewList posts={posts} />
    }
  </Layout>
)
