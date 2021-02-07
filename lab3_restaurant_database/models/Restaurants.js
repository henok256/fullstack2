const mongoose= require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    city: {
        type: String,
        required: [true, 'Please the name of the city where restaurant is'],
        trim: true,
        lowercase:true
    },
    cuisine:{
        type:String,
        required:[true, 'Please the name of the cuisine'],
        trim:true,
        lowercase:true

    },
    name:{
        type:String,
        required:[true, 'please enter the name of the restaurant'],
        trim:true,
        lowercase: true
    
    },
    restaurant_id:{
        type:Number,
        required:true,
        trim:true,
        
    },
    address:{
        building:{
            type: Number,
            required:[true,'please the bulding nuber'],
            trim:true,

        },
        street:{
            type: String,
            required:[true, 'please enter the name of the street'],
            trim:true
        },
        zipcode:{
            type:String,
            required:[true, 'please enter the zip code of the restaurant'],
            trim:true
        }
    }
    
});

RestaurantSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });

  RestaurantSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
  });
  RestaurantSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
  });

  RestaurantSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
  });

  const Restaurant = mongoose.model('Restaurants', RestaurantSchema);
  module.exports= Restaurant;


