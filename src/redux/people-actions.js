import * as utils from '../lib/utils';

export const fetchPeopleResults = payload => ({
  type: 'fetchPeople',
  payload,
});

export const fetchPeople = url => async (store) => {
  const requestBody = await utils.get(url);
  return store.dispatch(fetchPeopleResults(requestBody.results));
};
