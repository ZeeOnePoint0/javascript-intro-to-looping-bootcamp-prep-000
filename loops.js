array = [];

function forLoop(array) {


  for (i = 0; i < 26; i++) {
    if (i <= 1) {
      array.push('I am' + ${i} + 'strange loop')
    } else {
      array.push('I am ${i} strange loops');
    }
  }
}
