import R from "ramda";

export const COMPOSITE_KEY_SEPARATOR = "::";

export const makeCompositeKey = (...args) =>
  R.join(COMPOSITE_KEY_SEPARATOR, args);
