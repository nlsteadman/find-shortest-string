function findShortestString(arr) {
  
  arr.forEach((string) => {
    if (string.length > arr[0].length) {
      return arr[0]
    } else if (string.length === arr[0].length) {
      return arr[0]
    } else {
      arr[0] = string
    }
  })

  return arr[0];
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
