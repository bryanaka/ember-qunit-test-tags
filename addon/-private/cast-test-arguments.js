import Em from 'ember';
const { A, typeOf, makeArray } = Em;

function castTestArguments(description, tags, callback) {
  if (typeOf(tags) === 'function') {
    callback = tags;
    tags     = A();
  }

  if(arguments.length === 3) {
    tags = makeArray(tags);
  }

  return [ description, tags, callback ];
}

export default castTestArguments;
