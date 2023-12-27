const welcomEmail =
  (username) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" dir="ltr">
 <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
  <style type="text/css">
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head>
 <body style="box-sizing:border-box;font-size:14px;width:100%;background-color:transparent;margin:0">
  <table class="body-wrap" style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;width:100%;background-color:transparent;margin:0">
    <tr style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;margin:0">
     <td style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0" valign="top"></td>
     <td class="container" style="margin:0 auto;max-width:600px;display:block;vertical-align:top;clear:both;width:600px;font-size:14px;font-family:Roboto, sans-serif;box-sizing:border-box" valign="top" align="left">
      <div class="content" style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;max-width:600px;display:block;margin:0 auto;padding:20px">
       <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction" style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;border-radius:3px;margin:0;border:none">
         <tr style="font-family:Roboto, sans-serif;font-size:14px;margin:0">
          <td class="content-wrap" style="font-family:Roboto, sans-serif;box-sizing:border-box;color:#495057;font-size:14px;vertical-align:top;margin:0;padding:30px;box-shadow:0 3px 15px rgba(30,32,37,.06);border-radius:7px;background-color:#fff" valign="top">
           <meta itemprop="name" content="Confirm Email" style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;margin:0">
           <table width="100%" cellpadding="0" cellspacing="0" style="font-family:'Roboto sansSerif';box-sizing:border-box;font-size:14px;margin:0">
             <tr style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;margin:0">
              <td class="content-block" style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px" valign="top">
               <div style="margin-bottom:15px">
                <img src="https://ebhvjkq.stripocdn.email/content/guids/CABINET_61ab58c7f6f69cf9c30ad04f3f50d818996f8770326a14172d2f1bb5f9295268/images/logodark.png" alt height="23" style="display:block">
               </div></td>
             </tr>
             <tr style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;margin:0">
              <td class="content-block" style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:20px;line-height:1.5;font-weight:500;vertical-align:top;margin:0;padding:0 0 10px" valign="top">Hey, ${username}</td>
             </tr>
             <tr style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;margin:0">
              <td class="content-block" style="font-family:Roboto, sans-serif;color:#878a99;box-sizing:border-box;line-height:1.5;font-size:15px;vertical-align:top;margin:0;padding:0 0 10px" valign="top" align="left"><p><strong>We at Inserviz are&nbsp; happy to have you onboard🎊🎊🎉.</strong></p><p>Find Inprovs to render your service. You can also create a gig for inprovs.</p><p>Welcome to the innovative gig economy</p></td>
             </tr><!-- More content blocks go here -->
             <tr style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;margin:0;border-top:1px solid #e9ebec">
              <td class="content-block" style="font-family:Roboto, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0;padding-top:15px" valign="top" align="left">
               <div style="display:flex;align-items:center">
                <div style="margin-left:8px"><b>Maame Dentu</b>
                 <p style="font-size:13px;margin-bottom:0px;margin-top:3px;color:#878a99">Creative Director</p>
                </div><img src="https://ebhvjkq.stripocdn.email/content/guids/CABINET_61ab58c7f6f69cf9c30ad04f3f50d818996f8770326a14172d2f1bb5f9295268/images/avatar3.jpg" alt height="35" width="35" style="border-radius:50px;display:block">
               </div></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <div style="text-align:center;margin:0px auto">
        <ul style="list-style:none;display:flex;justify-content:space-evenly;padding-top:25px;padding-left:0px;margin-bottom:20px;font-family:Roboto, sans-serif">
         <li style="margin-left:0"><a href="/#" style="color:#495057">privacy</a></li>
         <li style="margin-left:0"><a href="/#" style="color:#495057">policy</a></li>
         <li style="margin-left:0"><a href="/#" style="color:#495057">Account</a></li>
        </ul>
        <p style="font-family:Roboto, sans-serif;font-size:14px;color:#98a6ad;margin:0px">2023 Inserviz. Welcome to the innovative Gig economy</p>
       </div>
      </div></td>
    </tr>
  </table>
 </body>
</html>
`;

module.exports = welcomEmail;
