const form= document.querySelector('form');

// this use case will give you empty value
// const height=parseInt(document.querySelector('height').value);


form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const height=parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
  const result= document.querySelector('#result');
  const output= document.querySelector('#output');


    if(height ==='' || height<0 || isNaN(height)){
        result.innerHTML="please give an valid height"
    }
    else if(weight ==='' || weight<0 || isNaN(weight)){
        result.innerHTML="please give an valid weight"
    }
      else{
       const bmi= (weight /((height*height)/10000)).toFixed(2);

        //show result
        result.innerHTML =`<span>${bmi}</span>`

        if(bmi < 18.6){
            output.innerHTML="under weight";
        }
        else  if(bmi >=18.6 && bmi <=24.9){
            output.innerHTML="normal";
        }
        else{
            output.innerHTML="over weight";
        }
      }

});