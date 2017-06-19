var express=require('express');

var providerRouter=function(Provider,Utility){
var providerRouter=express.Router();
var providerCotroller=require('../controllers/providerController')(Provider,Utility);
providerRouter.route('')
    .get(providerCotroller.get);
    return providerRouter
};

module.exports=providerRouter;