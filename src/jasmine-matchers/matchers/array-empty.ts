const toBeEmpty = (
  util: jasmine.MatchersUtil,
  customEqualityTesters: Array<jasmine.CustomEqualityTester>
) => {
  return {
    compare: (actual: any[]): jasmine.CustomMatcherResult => {
      const result: jasmine.CustomMatcherResult = {
        pass: actual && actual.length === 0,
        message: "Array must be empty"
      };
      return result;
    }
  };
};

export { toBeEmpty };
