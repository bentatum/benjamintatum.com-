
import TextField from 'material-ui/TextField'
import { InputLabel } from 'material-ui/Input'
import { withStyles } from 'material-ui/styles'

const enhance = withStyles(require('./style').default)

export default enhance(({ classes, options, label, input, meta, ...rest }) =>
  <div>
    <If condition={label}>
      <InputLabel>{label}</InputLabel>
    </If>
    <TextField
      select
      className={classes.textField}
      SelectProps={{ native: true }}
      {...input}
      {...rest}
    >
      {options.map((option, key) => (
        <option key={key} {...option} />
      ))}
    </TextField>
  </div>
)
