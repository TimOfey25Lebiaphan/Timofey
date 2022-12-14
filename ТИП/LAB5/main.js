function Task1(id){
  document.images[3].src = document.images[Number(id)].src;
};


function Task2(id) {
  if(document.images[Number(id)].style.scale != 1.08){
    document.images[Number(id)].style.scale = 1.08;
  }
  else{
    document.images[Number(id)].style.scale = 1;
  }
};


function Task3(position){
  if(document.getElementById('menu').children[position].classList.contains("menu-hover")){
    document.getElementById('menu').children[position].classList.remove("menu-hover");
  }
  else{
    document.getElementById('menu').children[position].classList.add("menu-hover");
  }
}