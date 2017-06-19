var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var LoyaltyBites=require('./api/models/loyaltyBiteModel');
var LoyaltyWallet=require('./api/models/loyaltyWalletModel');
var Profile=require('./api/models/profileModel');
var Provider=require('./api/models/providerModel');
var LoyaltyPoints=require('./api/models/loyaltyPointModel');

//var Slider=require('../models/Slider');
var Utility=require('./utility');

var db=mongoose.connect('mongodb://192.168.33.30/clup');

var app=express();
var port=process.env.PORT||3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var clupRouter=express.Router();
profileRouter=require('./api/routes/profileRoutes')(Profile,Utility);
loyaltyBiteRouter=require('./api/routes/loyaltyBiteRoutes')(Utility);
loyaltyPointRouter=require('./api/routes/loyaltyPointRoutes')(LoyaltyPoints,Utility);
providerRouter=require('./api/routes/providerRoutes')(Provider,Utility);
loyaltyWalletRouter=require('./api/routes/loyaltyWalletRoutes')(LoyaltyWallet,Utility);
app.get('/',function(req,res){
    res.send('Welcome to CLUP API!!');
});
app.use('/api/profile',profileRouter);
app.use('/api/loyalty',loyaltyBiteRouter);
app.use('/api/loyaltypoints',loyaltyPointRouter);
app.use('/api/provider',providerRouter);
app.use('/api/loyaltywallet',loyaltyWalletRouter);
app.use('/api',clupRouter);

app.listen(port,function(){
console.log("api exporse on : "+port);
});
