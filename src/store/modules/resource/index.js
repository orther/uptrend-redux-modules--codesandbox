import {createResource} from 'uptrend-redux-modules'

// Local Dev Only! Keep set to `false`
const debugAutoCasing = false

// Allowed: A-Z (uppercase), a-z (lowercase), and 0-9 (numbers)
const onlyHasCamelChars = str => /^[a-zA-Z0-9]+$/.test(str)

// Allowed: a-z (lowercase), 0-9 (numbers) and _ (underscore)
const onlyHasSnakeChars = str => /^[a-z0-9_]+$/.test(str)

const camelCaseKeyPred = key => {
  // Prevent natural text keys from being converted
  if (!onlyHasSnakeChars(key)) {
    debugAutoCasing && console.error('PREVENTED camelCase', {key})
    return false
  }
}

const snakeCaseKeyPred = key => {
  // Prevent natural text keys from being converted
  if (!onlyHasCamelChars(key)) {
    debugAutoCasing && console.error('PREVENTED snake_case', {key})
    return false
  }

  // Don't snake_case `matrixRows` because of legacy data needs
  if (key === 'matrixRows') return false
}

export const {actions, reducer, sagas, selectors} = createResource({
  camelCaseKeyPred,
  snakeCaseKeyPred,
})
