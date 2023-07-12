var randomnumber=Math.round(Math.random()*10);
var submitButton=document.getElementById("submit");
var message=document.getElementById("message");
var lives=document.getElementById("lives");
var msg;
submitButton.onclick=()=>
{
    let inputNumber=document.getElementById("number-input").value;
    lives--;
    if(inputNumber==randomnumber)
    {
        location.href="won.html";
    }
    else if(inputNumber>randomnumber)
    {
        msg="Oops! You guess is high";
    }
    else if(inputNumber<randomnumber)
    {
        msg="Oops! You guess is low";
    }
    else if(lives==0)
    {
        location.href="loss.html"
    }
    message.style.display="Inherit";
    message.innerHTML=msg;
    lives.innerHTML=lives;
}