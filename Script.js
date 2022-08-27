//Restart game button
var restart=document.querySelector("#b");

//Grab all the squares
var squares=document.querySelectorAll('td');

//clear all the squares
function clearBoard(){
  for(var i=0;i<squares.length;i++){
    squares[i].textContent='';
  }
}

restart.addEventListener('click',clearBoard);
//check the square marker

function changeMarker(){
  if(this.textContent===''){
    this.textContent='x';
  }
  else if(this.textContent==='x'){
    this.textContent='o';
  }
  else{
    this.textContent='';
  }
}

for(var i=0;i<squares.length;i++){
  squares[i].addEventListener('click',changeMarker)
}
