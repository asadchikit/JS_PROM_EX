function calculate(a, b, callback) {
    return callback(a, b);
  }
  
  function add(x, y) {
    return x + y;
  }
  
  function minus(x, y) {
    return x - y;
  }
  
  function um(x, y) {
    return x * y;
  }
  
  console.log(calculate(5, 3, add));       
  console.log(calculate(5, 3, minus));  
  console.log(calculate(5, 3, um));  