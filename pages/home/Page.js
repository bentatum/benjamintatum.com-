
import { Layout } from 'layout'
import { withMUI } from 'components'
import Typography from 'material-ui/Typography'

const enhance = withMUI

export default enhance(() =>
  <Layout>
    <Typography>
      Hello! I'm Ben Tatum, this is my website.
    </Typography>
  </Layout>
)
