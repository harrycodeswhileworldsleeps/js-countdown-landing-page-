const countdown=()=>{
    const countDate=new Date("Feb 14,2022 00:00:00").getTime();
    const now=new Date().getTime();
    const diff=countDate-now;

    const second=1000;
    const minutes=second*60;
    const hour=minutes*60;
    const day=hour*24;

    const textDay=Math.floor(diff/day);
    const textHour=Math.floor((diff%day)/hour);
    const textMinutes=Math.floor((diff%hour)/minutes);
    const textSecond=Math.floor((diff%minutes)/second);
    console.log(textDay)
    console.log(textHour)
    console.log(textMinutes)
    console.log(textSecond)

    document.querySelector('.day').innerText=textDay;
    document.querySelector('.hour').innerText=textHour;
    document.querySelector('.minute').innerText=textMinutes;
    document.querySelector('.sec').innerText=textSecond;
};
setInterval(countdown,1000);
countdown();