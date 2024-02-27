console.log('connected')
//random
const randnum= parseInt(Math.random()*10+1) ;
console.log(randnum)
//accessing button
const btn= document.getElementsByClassName('btn')[0];
//access form
const form=document.getElementsByClassName('border')[0];
//access notice
const notice=document.getElementById('notice');
const score=document.getElementsByClassName('score')[0];
var count=0;


btn.addEventListener('click',function(e){
    const num=document.getElementById('num').value;
    e.preventDefault()
    console.log(num)
    if(randnum>num){
        console.log("Try bigger number")
        notice.innerText="Try bigger number🎰"
        form.style.borderColor="red"
        count++;
        score.innerText=count;
    }else if(randnum==num){
        console.log("congrats🎊🎉")
        notice.innerText="congrats🎉🎊"
        form.style.borderColor="green"
        score.innerText=count;
    }else{
        console.log("Try Smaller Number")
        notice.innerText="Try smaller number 🎰"
        form.style.borderColor="red"
        count++
        score.innerText=count;
    form.reset()

    }
}
)

