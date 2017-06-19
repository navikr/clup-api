var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var loyaltyPointModel=new Schema({
    contact:{type:Number},
    cardNumber:{type:Number},
    points:{type:Number}
});
module.exports=mongoose.model('LoyaltyPoints',loyaltyPointModel);