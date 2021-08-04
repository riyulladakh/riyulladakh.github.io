function getTimestamp()
{return new Date().getTime()}
function GetParameters()
{var arg=new Object();var href=document.location.href;if(href.indexOf("?")!=-1)
{var params=href.split("?")[1];var param=params.split("&");for(var i=0;i<param.length;++i)
{var name=param[i].split("=")[0];var value=param[i].split("=")[1];arg[name]=value}}
return arg}
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString()}
else var expires="";document.cookie=name+"="+value+expires+"; path=/"}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}
return null}
function eraseCookie(name){createCookie(name,"",-1)}
function addSourceNReffer(track)
{var formObj=document.getElementsByTagName('form');for(var i=0;i<formObj.length;i++)
{var configRef=!1;if(formObj[i].name=="promoForm"||formObj[i].name=="form")
{var FrmElements=formObj[i].elements;var configRef=!1;var sourceRef=!1;var sourceVal="";for(var j=0;j<FrmElements.length;j++)
{if(FrmElements[j].name=='config_referer')
{FrmElements[j].value=window.location.href;configRef=!0}
if(FrmElements[j].name=='source')
{sourceVal=FrmElements[j].value;sourceRef=!0}}
if(configRef==!1)
{var configrefElem=document.createElement("input");configrefElem.type="hidden";configrefElem.name="config_referer";configrefElem.id="config_referer";configrefElem.value=window.location.href;formObj[i].appendChild(configrefElem)}
if(sourceRef==!1)
{var SourceElement=document.createElement('input');SourceElement.type="hidden";SourceElement.name="source";SourceElement.id="source";SourceElement.value=track;formObj[i].appendChild(SourceElement)}}}}
function addGkeywordsNReffer(gkeywords)
{var formObj=document.getElementsByTagName('form');for(var i=0;i<formObj.length;i++)
{var configRef=!1;if(formObj[i].name=="promoForm")
{var FrmElements=formObj[i].elements;var gkeywordsRef=!1;if(gkeywordsRef==!1)
{var GKeywordElement=document.createElement('input');GKeywordElement.type="hidden";GKeywordElement.name="config_gkeywords";GKeywordElement.id="config_gkeywords";GKeywordElement.value=unescape(gkeywords);formObj[i].appendChild(GKeywordElement)}}}}
function addSEMkeywordsNReffer(semkeywords)
{var formObj=document.getElementsByTagName('form');for(var i=0;i<formObj.length;i++)
{var configRef=!1;if(formObj[i].name=="promoForm")
{var FrmElements=formObj[i].elements;var semkeywordsRef=!1;if(semkeywordsRef==!1)
{var SEMKeywordElement=document.createElement('input');SEMKeywordElement.type="hidden";SEMKeywordElement.name="config_semkeywords";SEMKeywordElement.id="config_semkeywords";SEMKeywordElement.value=unescape(semkeywords);formObj[i].appendChild(SEMKeywordElement)}}}}
var UrlObjGET=GetParameters();var CokObjGET="";var CokObjGETGKey="";var CokObjGETSEMKey="";if(readCookie('cnkonline_track'))
{CokObjGET=readCookie('cnkonline_track')}
if(readCookie('cnkonline_gkeywords'))
{CokObjGETGKey=readCookie('cnkonline_gkeywords')}
if(readCookie('cnkonline_semkeywords'))
{CokObjGETSEMKey=readCookie('cnkonline_semkeywords')}
if(UrlObjGET.track!=undefined)
{track=UrlObjGET.track;if(readCookie('cnkonline_track'))
{eraseCookie('cnkonline_track')}
createCookie('cnkonline_track',track);addSourceNReffer(track)}
else if(CokObjGET!=""&&CokObjGET!=undefined)
{track=CokObjGET;addSourceNReffer(track)}
else{addSourceNReffer('TUTC')}
if(UrlObjGET.gkeywords!=undefined)
{gkeywords=UrlObjGET.gkeywords;if(readCookie('cnkonline_gkeywords'))
{eraseCookie('cnkonline_gkeywords')}
createCookie('cnkonline_gkeywords',gkeywords);addGkeywordsNReffer(gkeywords)}
else if(CokObjGETGKey!=""&&CokObjGETGKey!=undefined)
{gkeywords=CokObjGETGKey;addGkeywordsNReffer(gkeywords)}
if(UrlObjGET.semkeywords!=undefined)
{semkeywords=UrlObjGET.semkeywords;if(readCookie('cnkonline_semkeywords'))
{eraseCookie('cnkonline_semkeywords')}
createCookie('cnkonline_semkeywords',semkeywords);addSEMkeywordsNReffer(semkeywords)}
else if(CokObjGETSEMKey!=""&&CokObjGETSEMKey!=undefined)
{semkeywords=CokObjGETSEMKey;addSEMkeywordsNReffer(semkeywords)}
mylocation=window.location.href;if((mylocation.indexOf('thankyou.php'))<0&&(mylocation.indexOf('static')<0))
{if(readCookie('cnk_http_reffer'))
{eraseCookie('cnk_http_reffer')}
createCookie('cnk_http_reffer',mylocation)}