array = [];

function forLoop(array) {
  for (i = 0; i < 25; i++) {
      array.push('I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.')
  }
  return array
}

function whileLoop(n) {

  while (n > 0) {
    console.log(--n);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhile(array) {
  do {
    array.pop();
    return array
  } while (array.length > 0 && maybeTrue());
}
