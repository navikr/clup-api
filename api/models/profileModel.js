var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var profileModel=new Schema({
    firstName:{type:String},
    lastName:{type:String},
    contact:{type:Number},
    email:{type:String},
    dob:{type:String}
});
module.exports=mongoose.model('Profile',profileModel);