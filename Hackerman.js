
async function func1(){
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Initialising Hack program.....")
        }, 2000);
    })
    return promise1;
}
async function func2(){
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Hacking user data")
        }, 3000);
    })
    return promise1;
}
async function func3(){
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("username found from the device")
        }, 3000);
    })
    return promise1;
}
async function func4(){
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Connecting to user account with username")
        }, 3000);
    })
    return promise1;
}
async function func5(){
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Hack completed successfully")
        }, 3000);
    })
    return promise1;
}

let result = async()=>{
    let a = await func1();
    const t1 = document.querySelector("#p1 .center .text");
    if(t1){ t1.textContent = a; t1.dataset.text = a; }

    let b = await func2();
    const t2 = document.querySelector("#p2 .center .text");
    if(t2){ t2.textContent = b; t2.dataset.text = b; }

    let c = await func3();
    const t3 = document.querySelector("#p3 .center .text");
    if(t3){ t3.textContent = c; t3.dataset.text = c; }

    let d = await func4();
    const t4 = document.querySelector("#p4 .center .text");
    if(t4){ t4.textContent = d; t4.dataset.text = d; }

     let e = await func5();
    const t5 = document.querySelector("#p5 .center .text");
    if(t5){ t5.textContent = e; t5.dataset.text = e; document.body.style.backgroundColor = "green" }
    
    

    
}
result();

