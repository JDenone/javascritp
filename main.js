console.log('hello word from external scripts');

// var age = prompt('How old are you?');
// var ageParser = parseInt(age);

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

function mensage() {
  alert("Não clique em mim!");
}

function mudaCor(cor) {
  let element = document.getElementById("cores");
  element.style.color = cor;
}

function mudaCorBg(bgCor) {
  let element = document.getElementById("bgCores");
  element.style.backgroundColor = bgCor;
}

function mudaTamanhoLetra(tam) {
  let element = document.getElementById("tamanhos");
  element.style.fontSize = tam;
}