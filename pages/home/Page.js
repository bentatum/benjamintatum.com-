
import Layout from 'layout'
import { withStatus, withApollo, withMUI } from 'components'
import Typography from 'material-ui/Typography'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'recompact'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const enhance = compose(
  withMUI,
  withApollo,
  graphql(
    gql`
      query {
        posts(published: true) {
          body
          title
          slug
          short
          image
        }
      }
    `
  ),
  withStatus,
  withStyles(require('./style').default)
)

export default enhance(({ classes, url, data }) =>
  <Layout topBar={{ url, title: 'Ben Tatum' }}>
    {data.posts.map((post, key) =>
      <div key={key} className={classes.post} style={{ backgroundImage: `url(${post.image})` }}>
        <Button>
          {post.title}
        </Button>
      </div>
    )}
  </Layout>
)
