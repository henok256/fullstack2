const express = require('express');
const restaurantModel = require('../models/Restaurants');
const app = express();


// find all restaurants  
// http://localhost:3000/restaurants
app.get('/restaurants', async (req, res) =>{
    const restaurants = await restaurantModel.find({});

    try {
        res.send(restaurants);
    }
    catch (err){
        res.status(500).send(err);
    }
});
//http://localhost:3000/restaurants/cuisine/Japanese

app.get('/restaurants/cuisine/Japanese', async(req, res)=>{
   try{
    const restaurants = await restaurantModel.
    find({})
    .where('cuisine').equals('japanese')
    .select('city cuisine name restaurant_id address ')
    .exec((err, data)=>{
        if(err){
            res.send(JSON.stringify({status:false, message:"No resaurants found"}))
        }
        else{
            res.send(data);
        }
    });
   } 
   catch (err){
res.status(500).send(err)
   }

});

//http://localhost:3000/restaurants/cuisine/Bakery

app.get('/restaurants/cuisine/Bakery', async(req, res)=>{
    try{
     const restaurants = await restaurantModel.
     find({})
     .where('cuisine').equals('Bakery')
     .select('city cuisine name restaurant_id address ')
     .exec((err, data)=>{
         if(err){
             res.send(JSON.stringify({status:false, message:"No resaurants found"}))
         }
         else{
             res.send(data);
         }
     });
    } 
    catch (err){
 res.status(500).send(err)
    }
 
 });

//http://localhost:3000/restaurants/cuisine/Italian

app.get('/restaurants/cuisine/Italian', async(req, res)=>{
    try{
     const restaurants = await restaurantModel.
     find({})
     .where('cuisine').equals('Italian')
     .select('city cuisine name restaurant_id address ')
     .exec((err, data)=>{
         if(err){
             res.send(JSON.stringify({status:false, message:"No resaurants found"}))
         }
         else{
             res.send(data);
         }
     });
    } 
    catch (err){
 res.status(500).send(err)
    }
 
 });

 


 module.exports=app;
