const fs = require("node:fs");

const arrBoys = [];
const arrGirls = [];

fs.readFile(`./data/data.json`,(err, data)=>{
    const students = JSON.parse(data.toString());
    students.map((value)=>{
        if(value.gender === "male"){
            arrBoys.push(value);
            fs.writeFile('./boys/boys.json',`${JSON.stringify(arrBoys)}`,(err)=>{});
        } else if(value.gender === "female"){
            arrGirls.push(value);
            fs.writeFile('./girls/girls.json',`${JSON.stringify(arrGirls)}`,(err)=>{})
        }
    })
})



