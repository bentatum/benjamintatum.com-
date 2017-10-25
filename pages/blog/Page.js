
import { Layout } from 'layout'
import { withStyles } from 'material-ui/styles'
import { renderComponent, branch, setStatic, compose } from 'recompact'
import { withRedux } from 'lib'
import { Error404, withMUI } from 'components'
import { should404, mapStore, getInitialProps } from './lib'
import Link from 'next/link'
import { Post, PostPreviewList } from './components'
import { markdown } from 'markdown'
import Typography from 'material-ui/Typography'

const enhance = compose(
  withRedux(mapStore),
  setStatic('getInitialProps', getInitialProps),
  branch(should404, renderComponent(<Error404 />)),
  withMUI,
  withStyles(require('./style').default)
)

export default enhance(({ classes, post, posts, url }) =>
  <Layout
    url={url}
    post={post}
    topBar={{
      title: 'Ben\'s Blog',
      className: classes.topBar
    }}>
    {url.query.post && post
      ? <Post post={post} />
      : <PostPreviewList posts={posts} />
    }
  </Layout>
)
