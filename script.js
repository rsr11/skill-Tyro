const counters = document.querySelectorAll(".counter");




counters.forEach((e)=>{

    e.innerHTML= 0;

const updateCounter = ()=>{
     const targetData = +e.getAttribute("data-target");
    //  console.log(targetData);
    const startingValue = +e.innerHTML;

    let inc = targetData/100;

    if(startingValue < targetData){
        e.innerHTML = `${startingValue + inc}`;
        setTimeout(updateCounter,90);
    }
}



updateCounter();
});





