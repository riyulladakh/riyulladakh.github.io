function validateLogin(){var message_str='Please Check the Fields Below \n';var errFlag=!1;var email=$.trim(jQuery('#email').val());var Password=$.trim(jQuery('#password').val());if(Password!=''){document.getElementById('password').value=hex_sha1(Password)}
var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(email==''){message_str+=" - Please enter  email. \n";errFlag=!0}else if(reg.test(email)==!1){message_str+=' - Please enter valid email.\n';errFlag=!0}
if(Password==''){message_str+=" - Please enter  password. \n";errFlag=!0}
if(errFlag==!0){alert(message_str);return!1}else{return!0}}
function validateLoginB2b(){var message_str='Please Check the Fields Below \n';var errFlag=!1;var email=$.trim(jQuery('#emailB2b').val());var Password=$.trim(jQuery('#passwordB2b').val());var captcha=$.trim(jQuery('#captchaB2b').val());if(Password!=''){document.getElementById('passwordB2b').value=hex_sha1(Password)}
var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(email==''){message_str+=" - Please enter  email. \n";errFlag=!0}else if(reg.test(email)==!1){message_str+=' - Please enter valid email.\n';errFlag=!0}
if(captcha==''){message_str+=" - Please enter captcha code. \n";errFlag=!0}
if(Password==''){message_str+=" - Please enter  password. \n";errFlag=!0}
if(errFlag==!0){alert(message_str);return!1}else{return!0}}
function validateForgot(){var message_str='Please Check the Fields Below \n';var errFlag=!1;var email=$.trim(jQuery('#emailid').val());var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(email==''){message_str+=" - Please enter  email. \n";errFlag=!0}else if(reg.test(email)==!1){message_str+=' - Please enter valid email.\n';errFlag=!0}
if(errFlag==!0){alert(message_str);return!1}else{return!0}}
function validateNewPassword(){var message_str='Please Check the Fields Below \n';var errFlag=!1;var email=$.trim(jQuery('#newemailid').val());var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(email==''){message_str+=" - Please enter  email. \n";errFlag=!0}else if(reg.test(email)==!1){message_str+=' - Please enter valid email.\n';errFlag=!0}
if(errFlag==!0){alert(message_str);return!1}else{return!0}}
function validateChange(){var message_str='Please Check the Fields Below \n';var errFlag=!1;if(email==''){message_str+=" - Please enter  email. \n";errFlag=!0}else if(reg.test(email)==!1){message_str+=' - Please enter valid email.\n';errFlag=!0}
if(errFlag==!0){alert(message_str);return!1}else{return!0}}
function noSpace(evt){evt=(evt)?evt:event;var charCode=(evt.charCode)?evt.charCode:((evt.keyCode)?evt.keyCode:((evt.which)?evt.which:0));if((charCode>=64&&charCode<=90)||(charCode>=97&&charCode<=122)||(charCode>=48&&charCode<=57)||(charCode==95)||(charCode==127)||(charCode==8)||(charCode==9)||(charCode==46)||(charCode==45)||(charCode>=35&&charCode<=40)){return!0}else{return!1}}
function validateEmail(formname){var formname=formname;var message_str='Please Check the Fields Below \n';var errFlag=!1;var opword=$.trim(jQuery('#opword').val());var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(opword==''){message_str+=" - Please enter Old password. \n";errFlag=!0}else if(npass==''){message_str+=" - Please enter New password. \n";errFlag=!0}
if(errFlag==!0){alert(message_str);return!1}else{return!0}}
function validateRegistration(){var message_str='Please Check the Fields Below \n';var errFlag=!1;var fname=$.trim(jQuery('#fname').val());var lname=$.trim(jQuery('#lname').val());var email=$.trim(jQuery('#register-email').val());var Password1=$.trim(jQuery('#password1').val());var Password2=$.trim(jQuery('#password2').val());var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;var nameReg=/^[a-zA-Z ]+$/;if(fname==''){message_str+=" - Please enter first name. \n";errFlag=!0}else if(nameReg.test(fname)==!1){message_str+=" - Please enter valid first name. \n";errFlag=!0}
if(lname==''){message_str+=" - Please enter last name. \n";errFlag=!0}else if(nameReg.test(lname)==!1){message_str+=" - Please enter valid last name. \n";errFlag=!0}
if(email==''||email=='name@gmail.com'){message_str+=" - Please enter  your email. \n";errFlag=!0}else if(reg.test(email)==!1){message_str+=' - Please enter valid email.\n';errFlag=!0}
var containsDigits=/[0-9]/.test(Password1);var containsUpper=/[A-Z]/.test(Password1);var containsLower=/[a-z]/.test(Password1);var containsSpcial=/[!@#0^&*]/.test(Password1);if(Password1==''||Password1=="******"){message_str+=" - Please enter password.\n";errFlag=!0}
if(Password2==''){message_str+=" - Please enter confirm password.\n";errFlag=!0}
if(Password1!=''&&Password2!=''){if(Password1!=Password2){message_str+=" - Entered passwords are not matching.\n";errFlag=!0}else{if(containsDigits&&containsUpper&&containsLower&&containsSpcial){}else{message_str+=" - Password must be a combination of \n     one uppercase character,\n     one lowercase character  \n     atleast one digit & special character  \n     length at least 4 characters and maximum of 12.\n";errFlag=!0}}}
if(errFlag==!0){alert(message_str);return!1}else{return!0}}
function validateChangePassword(){var message_str='Please Check the Fields Below \n';var errFlag=!1;var opword=$.trim(jQuery('#opword').val());var npword=$.trim(jQuery('#npword').val());var cpword=$.trim(jQuery('#cpword').val());var containsDigits=/[0-9]/.test(npword);var containsUpper=/[A-Z]/.test(npword);var containsLower=/[a-z]/.test(npword);var containsSpcial=/[!@#0^&*]/.test(npword);if(opword==''){message_str+=" - Please enter old password.\n";errFlag=!0}
if(npword==''){message_str+=" - Please enter new password.\n";errFlag=!0}
if(npword!=''){if(opword==npword){message_str+=" - Old password matching with new password \n please change the new password.\n";errFlag=!0}else{if(cpword==''){message_str+=" - Please enter confirm password.\n";errFlag=!0}}}
if(npword!=''&&cpword!=''){if(npword!=cpword){message_str+=" - Entered passwords are not matching.\n";errFlag=!0}else{if(containsDigits&&containsUpper&&containsLower&&containsSpcial){}else{message_str+=" - Password must be a combination of \n     one uppercase character,\n     one lowercase character  \n     atleast one digit & special character  \n     length at least 4 characters and maximum of 12.\n";errFlag=!0}}}
if(errFlag==!0){alert(message_str);return!1}else{return!0}}
function sleep(delay){var start=new Date().getTime();while(new Date().getTime()<start+delay);}
function validateMobile(mobileNo){var errorNode='';var mob=mobileNo;if(mob.charAt(0)==7||mob.charAt(0)==8||mob.charAt(0)==9){}else{errorNode=" - Mobile No. should start with 7,8 or 9 only \n"}
if(mob.length<10){errorNode=" - Mobile No. must contain 10 digits. \n"}else{var i;var str;var ltr;var err;for(i=0;i<10;i++){if(i==0){str=mob.charAt(i);ltr=mob.charAt(i)}else{if(ltr==mob.charAt(i)){str+=mob.charAt(i);if(str.length>6){err='1'}}else{str=''}
ltr=mob.charAt(i)}}
if(err=='1'){errorNode=' - Mobile No. should not contain more than 6 same consecutive digit. \n'}}
return errorNode}
var hexcase=0;var b64pad="";function hex_sha1(s){output=rstr2hex(rstr_sha1(str2rstr_utf8(s)));return output}
function b64_sha1(s){return rstr2b64(rstr_sha1(str2rstr_utf8(s)))}
function any_sha1(s,e){return rstr2any(rstr_sha1(str2rstr_utf8(s)),e)}
function hex_hmac_sha1(k,d){return rstr2hex(rstr_hmac_sha1(str2rstr_utf8(k),str2rstr_utf8(d)))}
function b64_hmac_sha1(k,d){return rstr2b64(rstr_hmac_sha1(str2rstr_utf8(k),str2rstr_utf8(d)))}
function any_hmac_sha1(k,d,e){return rstr2any(rstr_hmac_sha1(str2rstr_utf8(k),str2rstr_utf8(d)),e)}
function sha1_vm_test(){return hex_sha1("abc").toLowerCase()=="a9993e364706816aba3e25717850c26c9cd0d89d"}
function rstr_sha1(s){return binb2rstr(binb_sha1(rstr2binb(s),s.length*8))}
function rstr_hmac_sha1(key,data){var bkey=rstr2binb(key);if(bkey.length>16)bkey=binb_sha1(bkey,key.length*8);var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C}
var hash=binb_sha1(ipad.concat(rstr2binb(data)),512+data.length*8);return binb2rstr(binb_sha1(opad.concat(hash),512+160))}
function rstr2hex(input){try{hexcase}catch(e){hexcase=0}
var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var output="";var x;for(var i=0;i<input.length;i++){x=input.charCodeAt(i);output+=hex_tab.charAt((x>>>4)&0x0F)+hex_tab.charAt(x&0x0F)}
return output}
function rstr2b64(input){try{b64pad}catch(e){b64pad=''}
var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var output="";var len=input.length;for(var i=0;i<len;i+=3){var triplet=(input.charCodeAt(i)<<16)|(i+1<len?input.charCodeAt(i+1)<<8:0)|(i+2<len?input.charCodeAt(i+2):0);for(var j=0;j<4;j++){if(i*8+j*6>input.length*8)output+=b64pad;else output+=tab.charAt((triplet>>>6*(3-j))&0x3F)}}
return output}
function rstr2any(input,encoding){var divisor=encoding.length;var remainders=Array();var i,q,x,quotient;var dividend=Array(Math.ceil(input.length/2));for(i=0;i<dividend.length;i++){dividend[i]=(input.charCodeAt(i*2)<<8)|input.charCodeAt(i*2+1)}
while(dividend.length>0){quotient=Array();x=0;for(i=0;i<dividend.length;i++){x=(x<<16)+dividend[i];q=Math.floor(x/divisor);x-=q*divisor;if(quotient.length>0||q>0)quotient[quotient.length]=q}
remainders[remainders.length]=x;dividend=quotient}
var output="";for(i=remainders.length-1;i>=0;i--)output+=encoding.charAt(remainders[i]);var full_length=Math.ceil(input.length*8/(Math.log(encoding.length)/Math.log(2)))
for(i=output.length;i<full_length;i++)output=encoding[0]+output;return output}
function str2rstr_utf8(input){var output="";var i=-1;var x,y;while(++i<input.length){x=input.charCodeAt(i);y=i+1<input.length?input.charCodeAt(i+1):0;if(0xD800<=x&&x<=0xDBFF&&0xDC00<=y&&y<=0xDFFF){x=0x10000+((x&0x03FF)<<10)+(y&0x03FF);i++}
if(x<=0x7F)output+=String.fromCharCode(x);else if(x<=0x7FF)output+=String.fromCharCode(0xC0|((x>>>6)&0x1F),0x80|(x&0x3F));else if(x<=0xFFFF)output+=String.fromCharCode(0xE0|((x>>>12)&0x0F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F));else if(x<=0x1FFFFF)output+=String.fromCharCode(0xF0|((x>>>18)&0x07),0x80|((x>>>12)&0x3F),0x80|((x>>>6)&0x3F),0x80|(x&0x3F))}
return output}
function str2rstr_utf16le(input){var output="";for(var i=0;i<input.length;i++)output+=String.fromCharCode(input.charCodeAt(i)&0xFF,(input.charCodeAt(i)>>>8)&0xFF);return output}
function str2rstr_utf16be(input){var output="";for(var i=0;i<input.length;i++)output+=String.fromCharCode((input.charCodeAt(i)>>>8)&0xFF,input.charCodeAt(i)&0xFF);return output}
function rstr2binb(input){var output=Array(input.length>>2);for(var i=0;i<output.length;i++)output[i]=0;for(var i=0;i<input.length*8;i+=8)output[i>>5]|=(input.charCodeAt(i/8)&0xFF)<<(24-i%32);return output}
function binb2rstr(input){var output="";for(var i=0;i<input.length*32;i+=8)output+=String.fromCharCode((input[i>>5]>>>(24-i%32))&0xFF);return output}
function binb_sha1(x,len){x[len>>5]|=0x80<<(24-len%32);x[((len+64>>9)<<4)+15]=len;var w=Array(80);var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;var e=-1009589776;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;var olde=e;for(var j=0;j<80;j++){if(j<16)w[j]=x[i+j];else w[j]=bit_rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1);var t=safe_add(safe_add(bit_rol(a,5),sha1_ft(j,b,c,d)),safe_add(safe_add(e,w[j]),sha1_kt(j)));e=d;d=c;c=bit_rol(b,30);b=a;a=t}
a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);e=safe_add(e,olde)}
return Array(a,b,c,d,e)}
function sha1_ft(t,b,c,d){if(t<20)return(b&c)|((~b)&d);if(t<40)return b^c^d;if(t<60)return(b&c)|(b&d)|(c&d);return b^c^d}
function sha1_kt(t){return(t<20)?1518500249:(t<40)?1859775393:(t<60)?-1894007588:-899497514}
function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF)}
function bit_rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}
function myFocus(element){if(element.value==element.defaultValue){element.value=''}}
function myBlur(element){if(element.value==''){element.value=element.defaultValue}}
function validateGuestLogin(){var message_str='Please Check the Fields Below \n';var errFlag=!1;var email=$.trim(jQuery('#guestemail').val());var reemail=$.trim(jQuery('#guestreemail').val());var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(email==''){message_str+=" - Please enter email. \n";errFlag=!0}else if(reg.test(email)==!1){message_str+=' - Please enter valid email.\n';errFlag=!0}
if(reemail==''){message_str+=" - Please enter confirm email. \n";errFlag=!0}else if(reg.test(reemail)==!1){message_str+=' - Please enter valid confirm email.\n';errFlag=!0}
if(reemail!=''&&email!=''){if(reemail!=email){message_str+=' - Email and confirm email do not match.\n';errFlag=!0}}
if(errFlag==!0){alert(message_str);return!1}else{return!0}}
$(document).ready(function(){$("#forgetPassword,#newPassword,#loginForm,#changePassword,#registerForm,#login-b2b,#login").submit(function(event){var status=!1;if($(this).attr("id")=="changePassword"){status=validateChangePassword($(this).attr("id"))}else if($(this).attr("id")=="loginForm"){status=validateLogin();}else if($(this).attr("id")=="forgetPassword"){status=validateForgot();}else if($(this).attr("id")=="newPassword"){status=validateNewPassword();}else if($(this).attr("id")=="registerForm"){status=validateRegistration();}
else if($(this).attr("id")=="login"){status=validateLogin()}
else if($(this).attr("id")=="login-b2b"){status=validateLoginB2b()}
if(status){console.log($("#"+$(this).attr("id")).serialize());actionCall($(this).attr("id"))}else{return!1}
event.preventDefault()})});function actionCall(formId)
{$.ajax({url:"/ajax/ajaxAction?action1="+formId,data:$("#"+formId).serialize(),type:'POST',dataType:"jsonp",success:function(response){if(response.message=="Password updated successfully")
{$('#'+formId)[0].reset();$('.mfp-close').trigger('click')}else if(response.message=="Valid user")
{window.location=response.redirect_url}
else if(response.message=="User registered successfully.")
{window.location='https://www.tutc.com/thank-you'}else if(response.message=='Incorrect credentials.'){alert(response.message)}else if(response.message=='Email Already Exist'){alert(response.message)}else if(response.message=='Password sent to your email.'){alert(response.message);$('.mfp-close').trigger('click')}else{alert(response.message)}},complete:function(response){}});return!1}
$('#Logout').click(function(){$.ajax({type:"POST",url:"/ajax/ajaxAction?action1=logout",success:function(msg){location.reload()},error:function(msg){alert('Error: cannot load page.')}})})