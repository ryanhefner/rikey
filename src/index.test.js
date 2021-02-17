import { reKey, mapKeys } from './index'

const testObject = {
  old: 'something',
  older: 'nothing',
}
const testKeyMap = {
  old: 'new',
  older: 'newer',
}
const testBadKeyMap = {
  old: 'new',
  older: 'newer',
  oldest: 'newest'
}
const valuesArray = ['something', 'nothing']
const valuesKeyArray = ['something', 'nothing', 'another']
const keysArray = ['new', 'newer']
const desiredObject = {
  new: 'something',
  newer: 'nothing',
}
const desiredObjectMissingKey = {
  new: 'something',
  newer: 'nothing',
  2: 'another',
}

describe('reKey', () => {
  test('works', () => {
    expect(reKey(testObject, testKeyMap)).toMatchObject(desiredObject)
  })

  test('skips missing keys', () => {
    expect(reKey(testObject, testBadKeyMap)).toMatchObject(desiredObject)
  })
})

describe('mapKeys', () => {
  test('works', () => {
    expect(mapKeys(valuesArray, keysArray)).toMatchObject(desiredObject)
  })

  test('missing keys', () => {
    expect(mapKeys(valuesKeyArray, keysArray)).toMatchObject(desiredObjectMissingKey)
  })
})
