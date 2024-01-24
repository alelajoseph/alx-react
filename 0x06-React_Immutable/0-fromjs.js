const Immutable = require('immutable');

function getImmutableObject(obj) {
  const immutabeMap = Immutable.fromJS(obj);

  return immutabeMap;
}

module.exports = getImmutableObject;
