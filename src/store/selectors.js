import { makeCompositeKey } from "../schema/util";

// --
// -- locationWorksheet Answer Selectors
// --

/**
 * Return id/key for locationWorksheetAnswers
 */
const makeLocationWorksheetAnswersId = (locationId, worksheetId) =>
  makeCompositeKey(locationId, worksheetId);

export const locationWorksheetAnswerEntity = state =>
  fromEntities.getEntity(state, "locationWorksheetAnswer");

/***
 * Returns locationWorksheetAnswersId for the current plan app worsheet
 */
export const locationWorksheetAnswersId = createSelector(
  [planAppId, locationWorksheetId],
  makelocationWorksheetAnswersId
);
