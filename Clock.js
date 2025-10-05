let clock = document.getElementById("clock")
let time;
function updatedTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    time = `${h}:${m}:${s}`
    clock.innerHTML = time;
}
setInterval(updatedTime,1000);
updatedTime();
