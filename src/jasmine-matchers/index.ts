/// <reference path="./index.d.ts" />

import { toBeEmpty } from "./matchers/array-empty";

const matchers: jasmine.CustomMatcherFactories = {
  toBeEmpty
};

export { matchers };
