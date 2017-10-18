
import { FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'

export default ({ label, meta, input, ...rest }) =>
  <FormControlLabel
    control={<Checkbox
      {...input}
      {...rest}
      checked={input.value}
      value={input.value + ''} />}
    label={label}
  />
