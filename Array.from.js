


var myArr = [
  [ 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ]
];

console.log(myArr.reduce(function(arr, element){
  return arr.concat(element)
}))
