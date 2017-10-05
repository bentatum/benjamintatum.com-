import faker from 'faker'
import { keys } from 'lodash'
import { mergePayloadToState } from '..'

describe('mergePayloadToState', () => {
  test('defaults', () => {
    const state = { foo: 'bar' }
    const result = mergePayloadToState(state)
    expect(keys(result).length).toBe(1)
    expect(result).toHaveProperty('foo', 'bar')
  })
})
