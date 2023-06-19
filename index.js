import express from 'express';
import path from 'path';
const __dirname = path.resolve();
const app = express();
import cors from 'cors';
import fs from 'fs';
app.use(cors());
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });
   app.use(express.static(path.resolve(__dirname,'files')))

app.get('/blocks',(req,res)=>{
    let data = []; 
    fs.readdirSync('./files/html/block').forEach((el)=>{
        data.push(el);
    })
    res.send(data);
})
app.get('/test',(req,res)=>{
    let data = []; 
    fs.readdirSync('./files/tests').forEach((el)=>{
        data.push(el);
    })
    res.send(data);
})

app.listen(3000)