function valueIsTruthy(value) {
  return value === true || value === 'true';
}

function matchesTags(envTags, testTags) {
  var everyTagUndefined = testTags.every(function (tag) {
    return envTags[tag] === undefined;
  });

  if(everyTagUndefined) { return true; }

  return testTags.some( (tag) => valueIsTruthy(envTags[tag]) );
}

export default matchesTags;
