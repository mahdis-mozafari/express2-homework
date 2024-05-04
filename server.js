const express = require('express')
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}));

 let calculator = [
    {
        hight:167,
        weight:95
    }
 ]


app.post('/', (req, res) => {
     
    const formData = req.body;
    const hight = formData.hight;
    const weight = formData.weight;

    const bmi = weight/hight*hight

    calculator.push({hight:hight,
    weight:weight})
    console.log(calculator);
    res.status(200).send(`'your bmi is ${bmi}'`);
});

app.get('/',(req,res)=>{
    res.json(calculator)
})

app.listen(4000,()=>{
    console.log('run this port');
})