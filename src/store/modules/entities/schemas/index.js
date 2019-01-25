import * as R from 'ramda'
import {schema} from 'normalizr'
import {makeCompositeKey} from './util'

export const inspector = new schema.Entity('inspector')

export const inspectorAccess = new schema.Entity('inspectorAccess')

export const org = new schema.Entity('org', {}, {idAttribute: 'id'})

export const worksheetAnswer = new schema.Entity(
  'worksheetAnswer',
  {},
  {
    // NOTE: we index these by planAppId & worksheetId
    idAttribute: value => {
      const {ospApplicationId, worksheetUuid} = value
      return makeCompositeKey(ospApplicationId, worksheetUuid)
    },
  },
)

// this allow a map (object) JSON resp to get normalized
export const worksheetAnswerMap = new schema.Values(worksheetAnswer)

export const changeComment = new schema.Entity('changeComment')

export const change = new schema.Entity('change', {comments: [changeComment]})

export const changeRequest = new schema.Entity('changeRequest')

export const planApp = new schema.Entity('planApp', {
  changeRequest,
})

export const planAppSummary = new schema.Entity('planAppSummary', {
  changeRequest,
})

export const planAppLocation = new schema.Entity('planAppLocation')

export const planAppProduct = new schema.Entity('planAppProduct')

export const planAppNote = new schema.Entity('planAppNote')

export const exampleEntity = new schema.Entity('exampleEntity', {
  answers: {
    worksheets: worksheetAnswer,
  },
})

/*
 * Resource Response Schemas
 *
 * These schemas describe entity mapping for API response that don't return a
 * single entity type. For example some endpoints show a summary version in the
 * index endpoint results that is different than loading an individual resource.
 */

export const changeRequestOverviewResp = {
  change_request: changeRequest,
  changes: [change],
}

export const planAppResp = {
  index: [planAppSummary],
  summary: planAppSummary,
  detail: planApp,
}

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
