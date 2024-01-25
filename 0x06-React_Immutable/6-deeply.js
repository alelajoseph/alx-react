import { Map } from 'immutable';

export const mergeDeeplyElements = (page1, page2) => {
  const nested = Map(page1);
  return nested.mergeDeep(page2);
};
