var express=require('express');

var loyaltyWalletRouter=function(LoyaltyWallet,Utility){
    var loyaltyWalletRouter=express.Router();
    var loyaltyWalletController=require('../controllers/loyaltyWalletController')(LoyaltyWallet);
    loyaltyWalletRouter.route('')
        .post(loyaltyWalletController.post);

    return loyaltyWalletRouter;
};

module.exports=loyaltyWalletRouter;