
import { Field, reduxForm } from 'redux-form'
import { TextInput, Checkbox } from 'components'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import { compose } from 'recompact'

const enhance = compose(
  reduxForm({
    form: 'register/components/Form'
  }),
  withStyles(require('./style').default)
)

export default enhance(({ classes, handleSubmit, onSubmit }) =>
  <form onSubmit={handleSubmit(onSubmit)}>
    <Field name='firstName' label='First name' component={TextInput} />
    <Field name='lastName' label='Last name' component={TextInput} />
    <Field name='email' label='Email' component={TextInput} />
    <Field name='password' type='password' label='Password' component={TextInput} />
    <div className={classes.checkbox}>
      <Field name='newsletter' label={'Sure, I\'d like to recieve newsletter updates from Ben once and awhile.'} component={Checkbox} />
    </div>
    <div />
    <Button raised type='submit'>
      Submit
    </Button>
  </form>
)
