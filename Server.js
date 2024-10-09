const mongoose=require('mongoose');
const express=require('express');
const AirPods=require('./Airpods.js');
const bodyParser=require('body-parser');
const cors=require('cors');
mongoose.connect('mongodb+srv://23010101136:Rutvi@cluster0.kai7i.mongodb.net/AirPod',{ useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect('mongodb+srv://23010101136:Rutvi@cluster0.kai7i.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors());
    app.get('/', (req,res)=>{
        res.send('hello');
    });

app.get('/AirPod', async (req, res) => {
    const data = await AirPods.find();
    console.log(data); // Log the data retrieved
    res.send(data);
});

        app.get('/AirPod/:id',async (req,res)=>{
            const data=await AirPods.findOne({id:req.params.id})
            res.send (data);
        });

        app.post('/AirPod',async (req,res)=>{
            const A=new AirPods();
            A.id=req.body.id;
            A.AirPodName=req.body.AirPodName;
            A.image=req.body.image;
            A.Price=req.body.Price;

            const data=await A.save();
            res.send(data);
        })  ;

        app.patch('/AirPod/:id',async (req,res)=>{
            const data=await AirPods.findOne({id:req.params.id});
            data.id=req.params.id;
            data.AirPodName=req.body.AirPodName;
            data.image=req.body.image;    
            data.Price=req.body.Price;
        

            await data.save();
            res.send(data);
        });

        app.delete('/AirPod/:id',async (req,res)=>{
            const data =await AirPods.deleteOne({id:req.params.id});
            res.send(data);
        });

        app.listen(2222,()=>{
            console.log('server Started At 2222');
        });
})