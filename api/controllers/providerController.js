var providerController=function(Provider,Utility){
    var get=function(req,res){
      var query=req.query;
        Provider.find(query,function(err,provider){
          if(err){
            Utility.log(err,'Provider');
          }
          else{
            res.json(provider);
          }
        });
    }

return{
    get:get
}
}
module.exports=providerController;