var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var loyaltyWalletModel=new Schema({
    custId:{type:String},
    providerId:{type:String},
    cardNumber:{type:Number},
    validity:{type:String},
    notification:{type:Boolean,default:true}
});

module.exports=mongoose.model('LoyaltyWallet',loyaltyWalletModel);