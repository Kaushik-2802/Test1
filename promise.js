function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 1 completed.");
        resolve();
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 2 completed.");
        resolve();
      }, 1000);
    });
  }
  
  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 3 completed.");
        resolve();
      }, 1000);
    });
  }
  
  function task4() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 4 completed.");
        resolve();
      }, 1000);
    });
  }

  task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => task4())
    .then(() => console.log("All tasks completed."));
  
function asyncTask1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Async task 1 completed")
        },1000)
    })
}
asyncTask1()
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

let resolvedPromise=Promise.resolve("Task2 completed")
resolvedPromise
.then(res=>{
    console.log(res)
})

let rejectedPromise=Promise.reject("Error in task3")
rejectedPromise
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})