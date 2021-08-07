const express = require('express');
const PostRoute = express.Router();
const Vehicle = require('../Models/Vehicle_Model');
const VehicleImage = require('../Models/VehicleImage_Modle');

// Upload vehicle information
PostRoute.post('/addVehicle',
    (req,res)=>{
      const vehicle = new Vehicle({
         Name: req.body.Name,
         Type: req.body.Type,
         gasType: req.body.gasType,
         Year:req.body.Year,
         Description:req.body.Description,
         Price:req.body.Price
      });

      vehicle.save()
          .then(data =>{
              res.status(200).json(data);
          })
          .catch( err =>{
             res.status(400).json({message:"error",err});
          });
    }
);

PostRoute.post('/addVehicleImage',
    (req,res)=>{

        const vehicleImage = new VehicleImage({});
    }
);

module.exports = PostRoute;