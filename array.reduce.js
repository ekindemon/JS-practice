var myArr = [
  'C/C++',
  'JavaScript',
  'Ruby',
  'Java',
  'Objective-C',
  'JavaScript',
  'PHP'
];

// 計算出每種語言出現過幾次
var langStatistics = myArr.reduce(function(langs, langName) {
  if (langs.hasOwnProperty(langName)) {
      langs[langName]++
  } else {
      langs[langName] = 1;
  }
  return langs;
}, {});
console.log(langStatistics)

function add(a, b) {
  return a + b;
}

var add1 = add.bind(null, 1);
console.log(add1(2));			// 3
console.log(add1(4));			// 5