const quote = document.getElementById('quote');
const buttonDice = document.querySelector('.container__dice');
const adviceNum = document.querySelector('.num');
const url = 'https://api.adviceslip.com/advice';


buttonDice.addEventListener('click',(e)=>{
  fetch(url, {cache: 'no-cache'})
  .then(res => res.json())
  .then(function(data){
    getInf = data.slip.advice;
    getId = data.slip.id;
    init(getInf,getId)
  })

})

  function init(getInf,getId){
    const quoteMark = '"';
    quote.innerText =  `${quoteMark}` + getInf +  `${quoteMark}`;
    adviceNum.innerText = "#" + getId;
  
  
  
  }
