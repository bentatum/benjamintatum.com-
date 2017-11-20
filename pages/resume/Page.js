
import Layout from 'layout'
import { withMUI } from 'components'
import Typography from 'material-ui/Typography'
import Link from 'next/link'

export default withMUI(({ url }) =>
  <Layout topBar={{ url }}>
    <Typography>
      Please <Link href='/register'><a>register</a></Link> or <Link href='/login'><a>login</a></Link> to view or download my resume.
    </Typography>
  </Layout>
)
