const secondHand = document.querySelector('.sec-hand'); 
const minHand = document.querySelector('.min-hand'); 
const hourHand = document.querySelector('.hour-hand'); 
    
function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const secondsDegrees = ((sec / 60) * 360)+90;
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const min = now.getMinutes();
    const minutesDegrees = ((min / 60) * 360)+90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360)+90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    
    console.log(sec);
}

    setInterval(setDate, 1000);