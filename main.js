console.log('hello word from scripts');

  var age = prompt('How old are you?');
  var ageParser = parseInt(age);

  if (ageParser >= 18) {
    console.log('You are authorized.');    
  } else {
    console.log('You are not authorized.');
  }