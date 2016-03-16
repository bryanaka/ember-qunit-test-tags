import { module }        from 'qunit';
import TestRunCounter    from 'dummy/tests/helpers/test-run-counter';
import runTaggedTest from 'ember-cli-qunit-test-tags/run-tagged-test';

const TEST_TAGS = {
  cool:    true,
  onFleek: true,
  sick:    'true',
  bitchin: false,
  swell:   false,
  tubular: 'wut',
  rad:     undefined,
  groovy:  null
};

function taggedTest(description, tags, callback) {
  runTaggedTest(TEST_TAGS, description, tags, callback);
}

var multiTagTests;

module('tagged test - multiple tags', {
  beforeEach() {
    multiTagTests = multiTagTests || new TestRunCounter(6);
  },

  afterEach() {
    multiTagTests.testRan();
  }
});

taggedTest('runs a tagged test when one tag value is true', ['onFleek', 'bitchin'], function(assert) {
  assert.expect(1);
  assert.ok(true, 'onFleek tag is true and should have run');
});

taggedTest('runs a tagged test when one tag value is true and rest are undefinded', ['onFleek', 'soFetch'], function(assert) {
  assert.expect(1);
  assert.ok(true, 'onFleek tag is true and should have run');
});

taggedTest('runs a tagged test when one tag value is the string "true"', ['cool', 'bitchin'], function(assert) {
  assert.expect(1);
  assert.ok(true, 'onFleek tag is true and should have run');
});

taggedTest('runs a tagged test when all tag values are true', ['onFleek', 'cool'], function(assert) {
  assert.expect(1);
  assert.ok(true, 'onFleek and cool tag are true and should have run');
});

taggedTest('runs a tagged test when all tag values are true-ish', ['onFleek', 'sick'], function(assert) {
  assert.expect(1);
  assert.ok(true, 'onFleek and sick tag are true-ish and should have run');
});

taggedTest('runs a tagged test when all tag values are undefined', ['farOut', 'wild'], function(assert) {
  assert.expect(1);
  assert.ok(true, 'onFleek and sick tag are true-ish and should have run');
});

taggedTest('skips a tagged test when all tag values are false', ['bitchin', 'swell'], function(assert) {
  assert.expect(1);
  assert.ok(false, 'bitchin tag is false and should not have run');
});

taggedTest('skips a tagged test when all tag values are falsey (false + undefined)', ['bitchin', 'rad'], function(assert) {
  assert.expect(1);
  assert.ok(false, 'bitchin tag is false and should not have run');
});

taggedTest('skips a tagged test when all tag values are falsey (false + string)', ['bitchin', 'tubular'], function(assert) {
  assert.expect(1);
  assert.ok(false, 'bitchin tag is false and should not have run');
});

taggedTest('skips a tagged test when all tag values are falsey (false + null)', ['bitchin', 'groovy'], function(assert) {
  assert.expect(1);
  assert.ok(false, 'bitchin tag is false and should not have run');
});

taggedTest('skips a tagged test when all tag values are falsey (undefined + string)', ['rad', 'tubular'], function(assert) {
  assert.expect(1);
  assert.ok(false, 'tubular tag is falsey and should not have run');
});

taggedTest('skips a tagged test when all tag values are falsey (undefined + null)', ['rad', 'groovy'], function(assert) {
  assert.expect(1);
  assert.ok(false, 'tubular tag is falsey and should not have run');
});

taggedTest('skips a tagged test when all tag values are falsey (string + null)', ['tubular', 'groovy'], function(assert) {
  assert.expect(1);
  assert.ok(false, 'tubular tag is falsey and should not have run');
});
