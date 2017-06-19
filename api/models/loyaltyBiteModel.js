var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var loyaltyBiteModel=new Schema({
    title:{type:String},
    description:{type:String},
    validity:{type:String},
    email:{type:String},
    dob:{type:String},
    provider:{type:String}
});
module.exports=mongoose.model('LoyaltyBites',loyaltyBiteModel);