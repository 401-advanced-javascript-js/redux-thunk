import * as utils from '../lib/utils';

export const fetchPersonResults = payload => ({
  type: 'fetchPerson',
  payload,
});

// export const fetchPerson = url => async (store) => {
//   // const requestBody = await utils.get(url);
//   return store.dispatch(fetchPersonResults(requestBody.results));
// };

export const fetchPerson = data => (store) => {
  return store.dispatch(fetchPersonResults(data));
};
