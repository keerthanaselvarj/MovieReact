var express = require('express');
var router = express.Router();
var User=require('../models/users');
var express =require('express');

router.route("/add")
.post(function(req,res,next)
{
	if(req.body)
	{
		var userVar= new User(req.body);
        userVar.username= req.body.username;
         userVar.username= req.body.password;
		
		userVar.save(function(err)
		{

			if(err)
			{
				res.send(err);
			}
			else
                {
                	res.send("user inserted");
                }

		});
	}
});
module.exports= router;






