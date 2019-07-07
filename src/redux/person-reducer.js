export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'fetchPeople':
      return {};
    case 'fetchPerson':
      return payload;
    default:
      return state;
  }
};
