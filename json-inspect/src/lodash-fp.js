const _ = require('lodash/fp');

_.fromPairs([
  ['a', 1],
  ['b', 2],
  ['c', 5],
  ['5', 4],
]);

1 + 2;

_.identity('a');

5 * 8;

var array = [
  { dir: 'left', code: 97 },

  { dir: 'right', code: 100 },
];

_.keyBy(array, function (o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

_.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
//
//
//
function square(n) {
  return n * n;
}

_.map([4, 8], square);

_.map({ a: 4, b: 8 }, square);

var users = [{ user: 'barney' }, { user: 'fred' }];

_.map('user', users);
