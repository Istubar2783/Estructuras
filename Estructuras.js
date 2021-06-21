/*var contadortimer = 59
while(contadortimer >= 0){

  setTimeout(()=>{
    
const Timer2 = document.querySelector(".Timer2");
    const Timer2NewText2 = document.createElement("p");
    Timer2NewText2.innerHTML = ":"+contadortimer;
    const Timer2OldText2 = Timer2.firstElementChild;
    Timer2.replaceChild(Timer2NewText2, Timer2OldText2);
    
    (contadorTimer--)}, 1000);}*/


    const getRemainingTime = deadline => {
      let now = new Date(),
          remainTime = (new Date(deadline) - now + 1000) / 1000,
          remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
          remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
          remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
          remainDays = Math.floor(remainTime / (3600 * 24));
    
      return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
      }
    };
    
    const countdown = (deadline,elem,finalMessage) => {
      const el = document.getElementById(elem);
    
      const timerUpdate = setInterval( () => {
        let t = getRemainingTime(deadline);
        el.innerHTML = `${t.remainMinutes}m:${t.remainSeconds}s`;
    
        if(t.remainTime <= 1) {
          clearInterval(timerUpdate);
          el.innerHTML = finalMessage;
        }
    
      }, 1000)
    };
    
    countdown('Dec 31 2025 21:34:40 GMT-0500', 'clock', '¡Ya empezó!');

  
