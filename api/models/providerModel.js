var mongoose=require('mongoose');
var Schema= mongoose.Schema;

var providerModel=new Schema({
    providerName:{type:String},
    providerIconUrl:{type:String}
});
module.exports=mongoose.model('Provider',providerModel);