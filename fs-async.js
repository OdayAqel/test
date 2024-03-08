const { readFile, writeFile, read } = require('fs');

readFile('./content/first.txt','utf8',(err, result) => {
    if(err){
        console.log('this is first file error'+err);
    }else{
        console.log("this is first file answer "+result);
    }
});

readFile('./content/resusdlt.txt',(err,result) => {
    if(err){
        console.log('this is second file error '+err);
        return
    }
    else {
        console.log(`this is second file answer ${result}`);
    }
});
