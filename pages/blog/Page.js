
import { Layout } from 'layout'
// import { withStyles } from 'material-ui/styles'
import { setStatic, pure, compose } from 'recompact'
import { withRedux } from 'lib'
import { withRoot } from 'components'
import { mapStore, getInitialProps } from './lib'
import Link from 'next/link'
import { Post, PostPreviewList } from './components'
import { markdown } from 'markdown'
import Typography from 'material-ui/Typography'

const enhance = compose(
  // withStyles(require('./style').default),
  withRedux(mapStore),
  setStatic('getInitialProps', getInitialProps),
  withRoot,
  pure
)

export default enhance(({ post, posts, url }) =>
  <Layout topBar={{ title: 'Ben\'s Blog' }}>
    {url.query.post && post
      ? <Post post={post} />
      : <PostPreviewList posts={posts} />
    }
  </Layout>
)
