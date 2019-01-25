import * as R from 'ramda'
import {schema} from 'normalizr'

import {makeCompositeKey} from './util'

export const locationWorksheetAnswer = new schema.Entity(
  'locationWorksheetAnswer',
  {},
  {
    idAttribute: value => {
      const {parentId, worksheetUuid} = value
      return makeCompositeKey(parentId, worksheetUuid)
    },
  },
)

export const locationWorksheetAnswerMap = new schema.Values(
  locationWorksheetAnswer,
)

export const locationAnswers = new schema.Entity(
  'locationAnswers',
  {
    worksheetAnswers: locationWorksheetAnswerMap,
  },
  {
    processStrategy: entityValue => {
      const worksheetAnswers = R.mapObjIndexed(
        // add the parentId and worksheetUuid to each locationWorksheetAnswers
        // object so a composite key can be generated from it
        (value, key) => ({
          answers: value,
          parentId: entityValue.parentId,
          worksheetUuid: key,
        }),
        entityValue.answers.worksheets,
      )

      return {
        ...entityValue,
        worksheetAnswers,
      }
    },
  },
)
