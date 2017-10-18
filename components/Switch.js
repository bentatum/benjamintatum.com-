import React from 'react'
import { pure } from 'recompact'
import Switch from 'material-ui/Switch'

export default pure(({ input, meta, ...rest }) => {
  const { value, ...restOfInput } = input
  return <Switch {...restOfInput} {...rest} checked={!!value} />
})
