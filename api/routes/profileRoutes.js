var express=require('express');

var profileRoute=function(Profile,Utility){
var profileRouter=express.Router();
var profileController=require('../controllers/profileController')();
profileRouter.use('/:custId',function(req,res,next){
Profile.findById(req.params.custId,function(err,userProfile){
          if(err){
            Utility.log(err,'Profile');
            res.status(500).send(err);
          }
          else if(userProfile)
          {
            req.userProfile=userProfile;
            next();
          }
          else{
            res.status(404).send("Sorry User not found!");
          }
        });
});
profileRouter.route('/:custId')
    .get(profileController.get)
    .put(profileController.put)
    .patch(profileController.patch);
    return profileRouter
};

module.exports=profileRoute;