function task1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 1 completed.");
        resolve("Data from Task 1");
      }, 1000);
    });
  }
  
  function task2(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 2 completed using:", data);
        resolve("Data from Task 2");
      }, 1000);
    });
  }
  
  function task3(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 3 completed using:", data);
        resolve("Final Result from Task 3");
      }, 1000);
    });
  }

  task1()
    .then((result) => {
      return task2(result); 
    })
    .then((result) => {
      return task3(result); 
    })
    .then((finalResult) => {
      console.log(finalResult); 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  