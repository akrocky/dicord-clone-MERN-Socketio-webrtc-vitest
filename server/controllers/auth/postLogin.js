const User= require('../../models/user.model');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const postLogin=  async(req,res)=>{
   try {
     const {mail, password} = req.body ;
    
     const user = await User.findOne({mail:mail.toLowerCase()});
        
     if (user && ( await bcrypt.compare(password, user.password))) {
         // send new token
         const token= jwt.sign({
            userId:user._id,
            mail 
         },
         process.env.TOKEN_KEY,
         {
            expiresIn:'24h',
         }
         );

          return res.status(200).json({
            mail:user.mail,
            token:token,
            username:user.username
          })
     }

         return res.status(400).send('Invalid credentioalials. Please try again');
   } catch (error) {
    return res.status(500).send("Error occures. Please try again")
   }
};


module.exports=postLogin;