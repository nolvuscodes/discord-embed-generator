import Layout from "@theme/Layout";
import React from "react";

const htmlBody = `<style>
  [data-custom-class='body'], [data-custom-class='body'] * {
          background: transparent !important;
        }
[data-custom-class='title'], [data-custom-class='title'] * {
          font-family: Arial !important;
font-size: 26px !important;
color: #000000 !important;
        }
[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
          font-family: Arial !important;
color: #595959 !important;
font-size: 14px !important;
        }
[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
          font-family: Arial !important;
font-size: 19px !important;
color: #000000 !important;
        }
[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
          font-family: Arial !important;
font-size: 17px !important;
color: #000000 !important;
        }
[data-custom-class='body_text'], [data-custom-class='body_text'] * {
          color: #595959 !important;
font-size: 14px !important;
font-family: Arial !important;
        }
[data-custom-class='link'], [data-custom-class='link'] * {
          color: #3030F1 !important;
font-size: 14px !important;
font-family: Arial !important;
word-break: break-word !important;
        }
</style>

      <div data-custom-class="body">
      <div><strong><span style="font-size: 26px;"><span data-custom-class="title">COOKIE POLICY</span></span></strong></div><div><br></div><div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated <bdt class="question">May 12, 2023</bdt></span></span></strong></span></div><div><br></div><div><br></div><div><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">This Cookie Policy explains how <bdt class="question">Merlin Fuchs</bdt> ("<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," and "<strong>our</strong>") uses cookies and similar technologies to recognize you when you visit our website at <bdt class="question">https://message.style</bdt> ("<strong>Website</strong>"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0); font-size: 15px;"><strong><span data-custom-class="heading_1">What are cookies?</span></strong></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">Cookies set by the website owner (in this case, <bdt class="question">Merlin Fuchs</bdt>) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0); font-size: 15px;"><strong><span data-custom-class="heading_1">Why do we use cookies?</span></strong></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">We use first-<bdt class="block-component"></bdt> and third-<bdt class="statement-end-if-in-editor"></bdt>party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. <bdt class="block-component"></bdt>Third parties serve cookies through our Website for advertising, analytics, and other purposes. <bdt class="statement-end-if-in-editor"></bdt>This is described in more detail below.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">How can I control cookies?</span></strong></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. </span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">The specific types of first- and third-party cookies served through our Website and the purposes they perform are described in the table below (please note that the specific </span><span data-custom-class="body_text">cookies served may vary depending on the specific Online Properties you visit):</span></span></span><span style="font-size: 15px;"></div><div style="line-height: 1.5;"><span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong><u><br>Performance and functionality cookies:</u></strong></span></span></div><div><p style="font-size: 15px; line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</span></span></p><div><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><section data-custom-class="body_text" style="width: 100%; border: 1px solid #e6e6e6; margin: 0 0 10px; border-radius: 3px;"><div style="padding: 8px 13px; border-bottom: 1px solid #e6e6e6;"><table><tbody><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Name:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__cfruid</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Purpose:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">Used by the content network, Cloudflare, to identify trusted web traffic.</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Provider:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">.discord.com</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Service:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">Cloudflare  <a href="https://www.cloudflare.com/privacypolicy/" style="color: #1a98eb !important;" target="_blank">View Service Privacy Policy</a>  </span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Country:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Type:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">server_cookie</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Expires in:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">session</span></td></tr></tbody></table></div></section></span></span></div></div><div style="line-height: 1.5;"><span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong><u><br>Unclassified cookies:</u></strong></span></span></div><div><p style="font-size: 15px; line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">These are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers.</span></span></span></p><div><span data-custom-class="body_text"><section data-custom-class="body_text" style="width: 100%; border: 1px solid #e6e6e6; margin: 0 0 10px; border-radius: 3px;"><div style="padding: 8px 13px; border-bottom: 1px solid #e6e6e6;"><table><tbody><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Name:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__dcfduid</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Purpose:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Provider:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">discord.com</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Service:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________  </span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Country:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Type:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">http_cookie</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Expires in:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">1 year 1 month 4 days</span></td></tr></tbody></table></div></section><section data-custom-class="body_text" style="width: 100%; border: 1px solid #e6e6e6; margin: 0 0 10px; border-radius: 3px;"><div style="padding: 8px 13px; border-bottom: 1px solid #e6e6e6;"><table><tbody><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Name:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">oauth_state</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Purpose:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Provider:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">message.style</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Service:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________  </span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Country:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">United States</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Type:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">http_cookie</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Expires in:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">session</span></td></tr></tbody></table></div></section><section data-custom-class="body_text" style="width: 100%; border: 1px solid #e6e6e6; margin: 0 0 10px; border-radius: 3px;"><div style="padding: 8px 13px; border-bottom: 1px solid #e6e6e6;"><table><tbody><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Name:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__sdcfduid</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Purpose:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Provider:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">discord.com</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Service:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________  </span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Country:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Type:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">http_cookie</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Expires in:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">1 year 1 month 4 days</span></td></tr></tbody></table></div></section><section data-custom-class="body_text" style="width: 100%; border: 1px solid #e6e6e6; margin: 0 0 10px; border-radius: 3px;"><div style="padding: 8px 13px; border-bottom: 1px solid #e6e6e6;"><table><tbody><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Name:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">send-settings</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Purpose:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Provider:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">message.style</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Service:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________  </span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Country:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">United States</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Type:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">html_local_storage</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Expires in:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">persistent</span></td></tr></tbody></table></div></section><section data-custom-class="body_text" style="width: 100%; border: 1px solid #e6e6e6; margin: 0 0 10px; border-radius: 3px;"><div style="padding: 8px 13px; border-bottom: 1px solid #e6e6e6;"><table><tbody><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Name:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">current-message</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Purpose:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Provider:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">message.style</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Service:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">__________  </span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Country:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">United States</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Type:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">html_local_storage</span></td></tr><tr style="font-family: Roboto, Arial; font-size: 12px; line-height: 1.67; margin: 0 0 8px; vertical-align: top;"><td style="text-align: right; color: #19243c; min-width: 80px;">Expires in:</td><td style="display: inline-block; margin-left: 5px;"><span style="color: #8b93a7; word-break: break-all;">persistent</span></td></tr></tbody></table></div></section></span></div></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0); font-size: 15px;"><strong><span data-custom-class="heading_1">How can I control cookies on my browser?</span></strong></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span data-custom-class="body_text">As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. The following is information about how to manage cookies on the most popular browsers:</span></div><ul><li style="line-height: 1.5;"><a href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Chrome</span></a></li><li style="line-height: 1.5;"><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Internet Explorer</span></a></li><li style="line-height: 1.5;"><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Firefox</span></a></li><li style="line-height: 1.5;"><a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Safari</span></a></li><li style="line-height: 1.5;"><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Edge</span></a></li><li style="line-height: 1.5;"><a href="https://help.opera.com/en/latest/web-preferences/" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Opera</span></a></li></ul><div style="line-height: 1.5;"><span data-custom-class="body_text">In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:</span></div><ul><li style="line-height: 1.5;"><a href="http://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Digital Advertising Alliance</span></a></li><li style="line-height: 1.5;"><a href="https://youradchoices.ca/" rel="noopener noreferrer" target="_blank"><span data-custom-class="link">Digital Advertising Alliance of Canada</span></a></li><li style="line-height: 1.5;"><a href="http://www.youronlinechoices.com/" rel="noopener noreferrer" target="_blank"><span data-custom-class="body_text"><span data-custom-class="link">European Interactive Digital Advertising Alliance</span></span></a></li></ul><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0); font-size: 15px;"><strong><span data-custom-class="heading_1">What about other tracking technologies, like web beacons?</span></strong></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">Cookies are not the only way </span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website<bdt class="block-component"></bdt> or opened an email including them<bdt class="statement-end-if-in-editor"></bdt>. This allows us, for example, to monitor </span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</span><bdt class="block-component"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">Do you use Flash cookies or Local Shared Objects?</span></strong></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.</span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the </span></span><span data-custom-class="body_text"><span style="color: rgb(48, 48, 241);"><a data-custom-class="link" href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" target="_BLANK"><span style="font-size: 15px;">Website Storage Settings Panel</span></a></span><span style="font-size: 15px; color: rgb(89, 89, 89);">. You can also control Flash Cookies by going to the </span><span style="color: rgb(48, 48, 241);"><a data-custom-class="link" href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" target="_BLANK"><span style="font-size: 15px;">Global Storage Settings Panel</span></a></span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"> and </span><span style="font-size:15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).</span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</span></span></span><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">Do you serve targeted advertising?</span></strong></span></span></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. They can accomplish this by using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.</span></span><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">How often will you update this Cookie Policy?</span></strong></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may update </span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">The date at the top of this Cookie Policy indicates when it was last updated.</span></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">Where can I get further information?</span></strong></span></span></span></div><div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have any questions about our use of cookies or other technologies, please email us at <bdt class="question">__________</bdt> or by post to:</span></span></span></span></div><div style="line-height: 1.5;"><span data-custom-class="body_text"><br></span></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="question">Merlin Fuchs</bdt></span></span></span></div><div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><bdt class="question"><span data-custom-class="body_text">Dijonstr. 17</span></bdt><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></div><div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><bdt class="question">Bremen</bdt><bdt class="block-component"></bdt>, <bdt class="question">Bremen</bdt><bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></bdt> <bdt class="question">28211</bdt><bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt></span></span></div><div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><bdt class="question">Germany</bdt><bdt class="statement-end-if-in-editor"></bdt></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"><bdt class="block-component"></bdt></bdt></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><bdt class="block-component"></bdt></span></span></div><style>
      ul {
        list-style-type: square;
      }
      ul > li > ul {
        list-style-type: circle;
      }
      ul > li > ul > li > ul {
        list-style-type: square;
      }
      ol li {
        font-family: Arial ;
      }
    </style>
      </div>
      <div style="color: #595959;font-size: 14px;font-family: Arial;padding-top:16px;">
      This cookie policy was created using Termly's <a style="color: rgb(48, 48, 241) !important;" href="https://termly.io/products/cookie-consent-manager/">Cookie Consent Manager</a>.
      </div>`;

export default function CookiePolicy(): JSX.Element {
  return (
    <Layout title="Cookie Policy">
      <div
        dangerouslySetInnerHTML={{ __html: htmlBody }}
        style={{ padding: "3rem 2rem" }}
      ></div>
    </Layout>
  );
}
