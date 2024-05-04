const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())

app.use(express.urlencoded({extended:true}));

let arry =[
    {
        name:"mahdis",
        last_name:"mozafari"
    }]



    app.post('/', (req, res) => {
     
        const formData = req.body;
        const title = formData.title;
        const post = formData.post;
    
        arry.push({title:title,
        post:post})
        console.log(arry);
        res.status(200).send('Form data received successfully!');
    });


app.get('/',(req,res)=>{
res.json(arry)
})
  
// try{
//    const dataJson  = fs.readFile('data.json','utf8')
    
// }


app.listen(3000,()=>{
    console.log('run this port');
})