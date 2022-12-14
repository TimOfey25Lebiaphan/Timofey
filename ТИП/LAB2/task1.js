function Task1() {
  let surname = prompt('Введите свою фамилию');
  let name = prompt('Введите свое имя');
  let secondname = prompt('Введите своё отчество');
  
  if (confirm(`${surname} ${name} ${secondname}`)){
    alert(`Молодец,\n${surname} ${name} ${secondname}`);
  }
  else{
    alert('Ошибка данных');
  }
};