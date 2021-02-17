/**
 * Remap Object keys based on keyMap values
 *
 * @param {Object} object - Object to update key names on
 * @param {Object} keyMap - Key/value pairs of original key name and new key name
 * @return {Object}
 */
export const reKey = (object, keyMap) => {
  const clone = Object.assign({}, object)

  Object.keys(keyMap).forEach(key => {
    if (clone.hasOwnProperty(key)) {
      clone[keyMap[key]] = clone[key]
      delete clone[key]
    }
  })

  return clone
}

/**
 * Accepts an array of values and array of keys and maps them in a return Object.
 *
 * @param {any[]} values - Array of values
 * @param {string[]} keys - Array of key names to map values to
 * @return {Object}
 */
export const mapKeys = (values, keys) => {
  const map = {}
  const iterator = values.keys()

  for (const key of iterator) {
    if (keys[key]) {
      map[keys[key]] = values[key]
    } else {
      map[key] = values[key]
    }
  }

  return map
}
