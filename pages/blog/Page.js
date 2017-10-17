
import { Layout } from 'layout'
// import { withStyles } from 'material-ui/styles'
import { setStatic, compose } from 'recompact'
import { withRedux } from 'lib'
import { withMUI } from 'components'
import { mapStore, getInitialProps } from './lib'
import Link from 'next/link'
import { Post, PostPreviewList } from './components'
import { markdown } from 'markdown'
import Typography from 'material-ui/Typography'

const enhance = compose(
  // withStyles(require('./style').default),
  withRedux(mapStore),
  setStatic('getInitialProps', getInitialProps),
  withMUI
)

export default enhance(({ post, posts, url }) =>
  <Layout topBar={{ title: 'Ben\'s Blog' }}>
    {url.query.post && post
      ? <Post post={post} />
      : <PostPreviewList posts={posts} />
    }
  </Layout>
)
