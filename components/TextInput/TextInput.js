import React from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { pure, compose } from 'recompact'
import { withStyles } from 'material-ui/styles'

const enhance = compose(withStyles(require('./style').default), pure)

export default enhance(({ className, label, input, meta, classes, ...rest }) => (
  <div className={className || classes.root}>
    {label && <InputLabel htmlFor={input.name}>{label}</InputLabel>}
    <Input fullWidth error={meta.touched && !!meta.error} {...input} {...rest} />
  </div>
))
