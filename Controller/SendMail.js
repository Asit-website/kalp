const mailSender = require("../utils/mailSender");
const mailSender2 = require("../utils/mailSender2");


exports.SendMail = async(req ,res)=>{
     // send mail -> password change

      const {name , email , contact , category } = req.body;

     try {
        const mailResponse = await mailSender(
          name, email , contact , category
        );

        const mailResponse2 = await mailSender2(
          name, email 
        );

        
       
         return res.status(200).json({
            success:true ,
            message:"Succesfully send the mail"
         })

      } catch (error) {
        console.log(`error occur while sending password change mail  `, error);
        throw error;
      }
}