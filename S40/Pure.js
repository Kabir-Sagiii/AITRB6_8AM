var a = 500;

function add(x, y) {
  var result = x + y + a; //sideeffect
  return result;
}

console.log(add(50, 20)); //170;  //570

console.log(add(50, 20)); //170  //570
