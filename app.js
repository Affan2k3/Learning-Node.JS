const fs = require('fs')

console.log(
    
    fs.readdir("./", function (err, files) {
        if (err) console.log("Err", err);
        else console.log("Res",files)
    })
)