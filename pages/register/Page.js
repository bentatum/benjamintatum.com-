
import { Layout } from 'layout'
import { withRedux, withMUI } from 'components'
import { withHandlers, compose } from 'recompact'
import { Form } from './components'
import { HANDLERS, ACTIONS } from './config'

const enhance = compose(
  withRedux(() => ({}), ACTIONS),
  withMUI,
  withHandlers(HANDLERS)
)

export default enhance(({ handleSubmit }) =>
  <Layout topBar={{ title: 'Register' }}>
    <Form onSubmit={handleSubmit} />
  </Layout>
)
