require("dotenv").config();
const passwordReset = (
  idx
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
   <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Password Reset</title><!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <style type="text/css">
  .rollover:hover .rollover-first {
    max-height:0px!important;
    display:none!important;
  }
  .rollover:hover .rollover-second {
    max-height:none!important;
    display:inline-block!important;
  }
  .rollover span {
    font-size:0px;
  }
  u + .body img ~ div div {
    display:none;
  }
  #outlook a {
    padding:0;
  }
  span.MsoHyperlink,
  span.MsoHyperlinkFollowed {
    color:inherit;
    mso-style-priority:99;
  }
  a.es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
  }
  .es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
  }
  .es-button-border:hover > a.es-button {
    color:#ffffff!important;
  }
  @media only screen and (max-width:600px) {h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important; display:table-row!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20b { padding-bottom:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } }
  @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
  </style>
   </head>
   <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
       <tr>
        <td valign="top" style="padding:0;Margin:0">
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
           <tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
               <tr>
                <td align="left" style="Margin:0;padding-bottom:10px;padding-right:20px;padding-left:20px;padding-top:10px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                          cellspacing="0"><tr><td style="width:268px" valign="top"><![endif]-->
                 <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:268px">
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td class="es-m-p0l es-m-txt-c" align="left" style="padding:0;Margin:0;font-size:0px"><img src="https://ebhvjkq.stripocdn.email/content/guids/CABINET_ab436092b3c60c4727759939060fa8416b49f74349e2457f43c894826f5555b2/images/logodark.png" alt width="108" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td><td style="width:20px"></td><td style="width:272px" valign="top"><![endif]-->
                 <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:272px">
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;display:none"></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td></tr></table><![endif]--></td>
               </tr>
               <tr>
                <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-right:20px;padding-left:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;font-size:0px"><img src="https://ebhvjkq.stripocdn.email/content/guids/CABINET_91d375bbb7ce4a7f7b848a611a0368a7/images/69901618385469411.png" alt style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" width="100"></td>
                       </tr>
                       <tr>
                        <td align="center" class="es-m-p0r es-m-p0l es-m-txt-c" style="Margin:0;padding-top:15px;padding-right:40px;padding-bottom:15px;padding-left:40px"><h1 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55px;color:#333333">Password reset&nbsp;</h1></td>
                       </tr>
                       <tr>
                        <td align="left" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">After you click the button, you'll be asked to complete the following steps:</p>
                         <ol style="font-family:arial, 'helvetica neue', helvetica, sans-serif;padding:0px 0px 0px 40px;margin:15px 0px">
                          <li style="color:#333333;margin:0px 0px 15px;font-size:14px;margin-left:0">Enter a new password.</li>
                          <li style="color:#333333;margin:0px 0px 15px;font-size:14px;margin-left:0">Confirm your new password.</li>
                          <li style="color:#333333;margin:0px 0px 15px;font-size:14px;margin-left:0">Click Submit.</li>
                         </ol></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#5C68E2;border-width:0px;display:inline-block;border-radius:6px;width:auto"><a href="${process.env.CLIENT_URL}/${idx}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#5C68E2;border-radius:6px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2;padding-left:30px;padding-right:30px">RESET YOUR PASSWORD</a></span></td>
                       </tr>
                       <tr>
                        <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:30px;color:#333333">This link is valid for one use only. Expires in 2 hours.</h3></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">If you didn't request to reset your&nbsp;password, please disregard this message or contact our customer service department.</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tr>
            <td align="center" style="padding:0;Margin:0">
             <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
               <tr>
                <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">Welcome to the innovative Gig Economy!</p></td>
                       </tr>
                       <tr>
                        <td style="padding:0;Margin:0">
                         <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr class="links">
                            <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-bottom:5px;padding-top:5px;padding-right:5px;padding-left:5px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#333333;font-size:12px">Visit Us </a></td>
                            <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-bottom:5px;padding-top:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#333333;font-size:12px">Privacy Policy</a></td>
                            <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-bottom:5px;padding-top:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#333333;font-size:12px">Terms of Use</a></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table></td>
       </tr>
     </table>
    </div>
   </body>
  </html>`;

module.exports = passwordReset;
