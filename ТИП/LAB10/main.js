class Employee {
  constructor(surname, date){
    this.surname = surname;
    this.date = date;
  }

  VacationStartDate(){
    let date = new Date(this.date.getTime());
    date.setMonth(this.date.getMonth() + 11);
    return date;
  }

  VacationEndDate(){
    let date = this.VacationStartDate();
    date.setDate(date.getDate() + this.VocationRestDays() + 24);
    return date;
  }

  VocationRestDays(){
    let restDaysCount = 0;
    let vacationStartDate = this.VacationStartDate();
    for (let i = 0; i < 24; i++){
      vacationStartDate.setDate(vacationStartDate.getDate() + 1);
      if (vacationStartDate.getDay() == 0 || vacationStartDate.getDay() == 6){
        restDaysCount++;
      }
    }
    return restDaysCount;
  }
}

function Tasks(){
  switch (Number(document.querySelector('input[name="instruction"]:checked').value)){
    case 1: Task1(); break;
    case 2: Task2(); break;
    case 3: Task3(); break;
    case 4: Task4(); break;
    default: alert('WTF?');
  }
}

let Employes = [];

for(let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key != 'LS_W_ON_PAGE'){
    Employes.push(new Employee(key, new Date(localStorage.getItem(key))));
  }
}

function AddEmployee(){
  let surname = document.querySelector('#surname').value;
  let date = new Date(document.querySelector('#date').value);
  localStorage.setItem(surname, date);
  Employes.push(new Employee(surname, date));
  document.querySelector('#surname').value = '';
}

function Task1(){
  let outString = '';
  Employes.forEach(employee => {
    outString += employee.surname + ': ' + employee.VacationStartDate().toDateString() + ' - ' + employee.VacationEndDate().toDateString() + '<br>';
  });
  document.querySelector('#result').innerHTML = outString;
}

function Task2(){
  let month = Number(prompt('Введите номер месяца [1-12]: ') - 1);

  let outString = '';
  Employes.forEach(employee => {
    if(employee.VacationStartDate().getMonth() == month || employee.VacationEndDate().getMonth() == month){
      outString += employee.surname + '<br>';
    }
  });
  document.querySelector('#result').innerHTML = outString;
}

function Task3(){
  let quarter = prompt('Введите номер квартала [1-4]: ') - 1;
  let outString = '';
  Employes.forEach(employee => {
    if(Math.round(employee.VacationEndDate().getMonth() / 4) == quarter){
      outString += employee.surname + '<br>';
    }
  });
  document.querySelector('#result').innerHTML = outString;
}

function Task4(){
  let outString = '';
  Employes.forEach(employee => {
    if((new Date().getYear() + 1) == employee.VacationStartDate().getYear()){
      outString += employee.surname + '<br>';
    }
  });
  document.querySelector('#result').innerHTML = outString;
}
