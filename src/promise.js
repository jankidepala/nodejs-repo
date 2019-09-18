// The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet but is expected in the future.



 stats= (file) => {
    
    const fs = require('fs');
    fs
    return new Promise((resolve, reject) => {
      fs.stat(file, (err, data) => {
        if (err) {
          return reject (err)
        }
        resolve(data)
      })
    })
  }
  
  Promise.all([
    stats('../README.md'),
    // stats('file2'),
    // stats('file3')
  ])
  .then((data) => console.log(data))
  .catch((err) => console.log(err))