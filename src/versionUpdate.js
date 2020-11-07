
const fs=require('fs');
const list=fs.readdirSync('./src/data');


let jsonArray=new Array();

let firstPath=fs.readdirSync('./src/data');
let firstArray=Object.values(firstPath);
//console.log(firstArray[0]);
for(let i=0;i<firstArray.length;i++){
    let secondPath=fs.readdirSync('./src/data/'+firstArray[i]);
    let secondArray=Object.values(secondPath);
    for(let j=0;j<secondArray.length;j++){
        let thirdPath=fs.readdirSync('./src/data/'+firstArray[i]+'/'+secondArray[j]);
        let thirdArray=Object.values(thirdPath);
        
        
            let obj=new Object();
            obj.data=firstArray[i];
            obj.db=secondArray[j];
            obj.version=thirdArray;
            jsonArray.push(obj);
        


        
        //save data/db/version(배열로 넣음)
        /**
         * data : db
         * db: mysql
         * version[3]
         * 0: 5.6.json
         * 1: 5.7.json
         * 2: 8.0.json
         */

    }
}
let master=new Object();
master.versionInfo=jsonArray;
let ver=JSON.stringify(jsonArray);
fs.writeFile('./src/version.json',ver,(err)=>{
    if(err){
        throw err;
    }
    console.log("JSON data is saved");
});

