function Task1(){
  let x1Coordinate = document.getElementById('x1').value;
  let y1Coordinate = document.getElementById('y1').value;
  let x2Coordinate = document.getElementById('x2').value;
  let y2Coordinate = document.getElementById('y2').value;
  let x3Coordinate = document.getElementById('x3').value;
  let y3Coordinate = document.getElementById('y3').value;
  
  let side1 = Math.sqrt(Math.pow(x1Coordinate - x2Coordinate, 2) + Math.pow(y1Coordinate - y2Coordinate, 2));
  let side2 = Math.sqrt(Math.pow(x1Coordinate - x3Coordinate, 2) + Math.pow(y1Coordinate - y3Coordinate, 2));
  let side3 = Math.sqrt(Math.pow(x3Coordinate - x2Coordinate, 2) + Math.pow(y3Coordinate - y2Coordinate, 2));

  let semiperimeter = (side1 + side2 + side3) / 2;
  
  let square = Math.sqrt(semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3));

  document.getElementById('answer').innerText = square.toFixed(3);
}


function Task2() {
  let xCoordinate = document.getElementById('x').value;
  let yCoordinate = document.getElementById('y').value;
  let distance = Math.sqrt(Math.pow(xCoordinate,2) + Math.pow(yCoordinate,2));
  document.getElementById('answer').innerText = distance.toFixed(3);
};

function Castling(input1, input2){
  let buffer = document.getElementById(input1).value
  document.getElementById(input1).value = document.getElementById(input2).value
  document.getElementById(input2).value = buffer;
}