  function Task3(){
    let finalSum = 0;
    let dest = document.getElementById("Destination").value;
    switch (dest)
    {
      case '1':
        finalSum += 200;
        break;
      case '2':
        finalSum += 300;
        break;
      case '3':
        finalSum += 400;
        break;
      case '4':
        finalSum += 500;
        break;
      case '5':
        finalSum += 600;
        break;
      case '6':
        finalSum += 700;
        break;
      case '7':
          finalSum += 800;
          break;
    }

    if(document.getElementById("hour36").checked){
      finalSum *= 36;
    }
    else if(document.getElementById("hour64").checked){
      finalSum *= 64;
    }
    else if(document.getElementById("hour96").checked){
      finalSum *= 96;
    }

    let language = document.getElementById("Language").value;

    switch(language){
      case 'Rus':
        finalSum *= 1;
        break;
      case 'Bel':
        finalSum *= 3;
        break;
      case 'Eng':
        finalSum *= 2;
        break;
    }

    alert(`Курс обойдется вам в ${finalSum} рублей`);
  }