const fs = require(`fs`);



fs.readFile("./keyboard.txt", "utf8",(err,data) =>{
    if(err) throw err;
    console.log(`Here is the keyboaaaard : `)
    console.log(data)
});