var loyaltyWalletController=function(LoyaltyWallet){
    var post=function(req,res){
      var loyaltywallet=new LoyaltyWallet(req.body);
        loyaltywallet.save();
        res.status(201).send(loyaltywallet);
    }
    return{
        post:post
    }
}
module.exports=loyaltyWalletController;