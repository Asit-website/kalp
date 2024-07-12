const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender2 = async(name , email )=>{
  try{
     let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth:{
          user:process.env.MAIL_USER,
          pass:process.env.MAIL_PASS,
      }
     })


     let info = await transporter.sendMail({
      from: 'Kushel Digi Solution',
      to: `${email}`,
      
      html:`<!DOCTYPE html>
      <html>
      
      <head>
         <meta charset="UTF-8">

      
      </head>
      
      <body>
         <div class="container">
           
            <div class="body">
             
             <h2>Thanks ${name} for filling the form . </h2> 
            
            </div>
           
         </div>
      </body>
      
      </html>`
     })

     console.log("this is email send info ",info);
     return info;
  }
   catch(error){
      console.log(error);

   }
}

module.exports = mailSender2;