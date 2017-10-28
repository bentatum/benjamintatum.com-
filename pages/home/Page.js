
import { Layout } from 'layout'
import { withMUI } from 'components'
import Typography from 'material-ui/Typography'

const enhance = withMUI

export default enhance(({ url }) =>
  <Layout topBar={{ url }}>
    <Typography>
      Hey, I'm Ben Tatum! This is my website.
    </Typography>
  </Layout>
)
