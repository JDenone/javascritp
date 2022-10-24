console.log('hello word from external scripts');


  var age = prompt('How old are you?');
  var ageParser = parseInt(age);
  
  for (var a = 0; a < ageParser; a++) {
    console.log(a);  
  }
/*

  if (ageParser >= 18) {
    console.log('You are authorized.');    
  } else {
    console.log('You are not authorized.');
  }
  

  switch (true) {
    case (ageParser >= 18):
      console.log('You are authorized switch.');
      break;
    case (ageParser < 18):
      console.log('You are not authorized switch.');
      break;
    default:
      console.log('Please, refresh the page and insert your age.');
      break;
  }


var i = 0

while (i < 10) {
  console.log(i);
  i++;
}


for (var a = 0; a < 10; a++) {
  console.log(a);  
}


[0,1,2,3,4,5,6].forEach(function(value, key) {
  console.log(value, key)
});

*/