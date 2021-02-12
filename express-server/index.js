const express=require('express');
const app = express();
const path=require('path');
var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
app.use(myLogger);

app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    // res.send({
    //     message:'hi'
    // })
    res.sendFile(`${__dirname}/public/index.html`)
})
app.listen('8081',()=>{
    console.log('listining');
})

