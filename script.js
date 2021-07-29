'use strict';
//dom is model by which html canbe interact byu js, also it represents html objects

//queryselector is a dom method
//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent='Correct Number';

//value set 
//document.querySelector('.number').textContent=14;
//document.querySelector('.score').textContent=10;

let secrect=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

//display message function
const display=function(message){ //for dry prinmciple
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function(){

const guess=Number(document.querySelector('.guess').value);

document.querySelector('.guess').value='';

    console.log(guess, typeof(guess));
    if(!guess){
        display('No Number');

    }
    else if( score ===0){
        display('You lost the game');
    }
    else if(secrect=== guess)
    {
        display('Correct Number');
        document.querySelector('.number').textContent=secrect;
        // css property set
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        
        if(score> highscore){
            highscore= score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
    else if(secrect != guess)
    {   
        //document.querySelector('.message').textContent=(guess >secrect) ?'too high':'Too Low';
        display((guess >secrect) ?'too high':'Too Low');
        score=score -1;
        document.querySelector('.score').textContent=score;
    }
    

}); // close of first eventlistener

document.querySelector('.again').addEventListener('click',function(){
    
    score=20;
    secrect=Math.trunc(Math.random()*20)+1;

    display('Start Guesing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width='15rem';

});