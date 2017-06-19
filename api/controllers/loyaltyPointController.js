var loyaltyPointController=function(LoyaltyPoints,Utility){
    var get=function(req,res){
      var query=req.query;
        LoyaltyPoints.find(query,function(err,loyaltyPoints){
          if(err){
            Utility.log(err,'Loyalty Points');
          }
          else{
            res.json(loyaltyPoints);
          }
        });
    }
return{
    get:get
}
}
module.exports=loyaltyPointController;