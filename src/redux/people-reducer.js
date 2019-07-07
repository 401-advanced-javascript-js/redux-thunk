export default (state = [], { type, payload }) => {
  switch (type) {
    case 'fetchPeople':
      return payload;
    default:
      return state;
  }
};
