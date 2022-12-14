// if((document.getElementById("start").value) === null)
// {
//   document.getElementById("start").classList.toggle("input-empty");
// }

// if((document.getElementById("step").value) === null)
// {
//   document.getElementById("step").classList.toggle("input-empty");
// }
// if((document.getElementById("stepcount").value) === null)
// {
//   document.getElementById("stepcount").classList.toggle("input-empty");
// }

function Task1() {
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = 0 + Math.floor(Math.random() * ((arr.length - 1) + 1 - 0));
  alert(`Случайный элемент массива [ ${arr} ] : ${arr[rand]}`);
};

function Task2(){
  let start = parseInt(document.getElementById("start").value);
  let step = parseInt(document.getElementById("step").value);
  let stepcount = parseInt(document.getElementById("stepcount").value);
  
  var func = sequence(start,step);

  alert(`${take(func,stepcount)}`);
};

function take(func, number = 1) {
  let answer = [];
  for(let i = 0; i < number; i++)
  {
    answer.push(func());
  }

  return answer;
}

function sequence(start = 0, step = 1){
  let callNumber = start;
  return function() {
    var returnValue = callNumber;
    callNumber += step; 
    return returnValue;
  }
}