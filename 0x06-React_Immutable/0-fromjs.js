const { fromJS } = require('immutable');

function getImmutableObject(obj) {
  const immutabeMap = fromJS(obj);

  return immutabeMap;
}

module.exports = getImmutableObject;
