const buttons=document.querySelectorAll('.button');
const cover = document.querySelector('.cover');

buttons.forEach(function (button) {
  console.log(button);
   button.addEventListener('click',function(eve){
      console.log(eve);
      console.log(eve.target);

      if(eve.target.id === "grey"){
        cover.style.backgroundColor= button.id;
      }
      if(eve.target.id === 'white'){
        cover.style.backgroundColor= eve.target.id;
      }
      if(eve.target.id === 'blue'){
        cover.style.backgroundColor= eve.target.id;
      }
      if(eve.target.id === 'yellow'){
        cover.style.backgroundColor= eve.target.id;
      }
   });
});

