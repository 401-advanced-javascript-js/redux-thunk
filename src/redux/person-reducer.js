export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'fetchPerson':
      return payload;
    default:
      return state;
  }
};
