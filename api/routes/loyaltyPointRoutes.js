var express=require('express');

var loyaltyPointRouter=function(LoyaltyPoints,Utility){
var loyaltyPointRouter=express.Router();
var loyaltyPointController=require('../controllers/loyaltyPointController')(LoyaltyPoints,Utility);
loyaltyPointRouter.route('')
    .get(loyaltyPointController.get);
    return loyaltyPointRouter
};

module.exports=loyaltyPointRouter;