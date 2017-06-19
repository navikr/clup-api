var profileController=function(){
var get=function(req,res){
        res.json(req.userProfile);
    }
var put=function(req,res){
        req.userProfile.firstName=req.body.firstName;
        req.userProfile.lastName=req.body.lastName;
        req.userProfile.contact=req.body.contact;
        req.userProfile.email=req.body.email;
        req.userProfile.dob=req.body.dob;
        req.userProfile.save(function(err){
           if(err){
            Utility.log(err,'Profile');
            res.status(500).send(err);
          }else
          {
            res.json(req.userProfile);
          }
      });
    }
var patch=function(req,res){
        if(req.body._id)
          delete req.body._id;
        for(var p in req.body){
          req.userProfile[p]=req.body[p];
        }
        req.userProfile.save(function(err){
           if(err){
            Utility.log(err,'Profile');
            res.status(500).send(err);
          }else
          {
            res.json(req.userProfile);
          }
      });
    }
    return{
        get:get,
        put:put,
        patch:patch
    }
};

module.exports=profileController;