const _ = require('lodash');

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
