String.prototype.trimapi=function(){return this.replace(/^\s+|\s+$/g,"")};function createTable(tbl)
{if(tbl==undefined)
{var tbl=document.createElement("TABLE")}
tbl.newRow=function(){if(document.all)
{tbl.insertRow()}
else{tbl.insertRow(tbl.rows.length)}}
tbl.newTD=function(){var TD=document.createElement("TD")
return TD}
tbl.newTH=function(){var TD=document.createElement("TH")
return TD}
tbl.insertLast=function(TD){tbl.rows[tbl.rows.length-1].appendChild(TD)}
tbl.findMyIndex=function(obj){var elm
if(document.all)
{elm=obj.parentElement}
else{elm=obj.parentNode}
if(obj.tagName=="TD")
{var junx=elm.cells}
if(obj.tagName=="TR")
{var junx=elm.rows}
for(var i=0;i<junx.length;i++)
{if(obj==junx[i])
{return i}}}
return tbl}
function findPar(obj,ElmType){var parE=obj
while(parE.tagName!=ElmType)
{if(document.all)
{parE=parE.parentElement}
else{parE=parE.parentNode}}
return parE}
function overLay(){var dv=document.createElement("DIV")
document.body.style.overflow="hidden"
dv.style.width=document.body.clientWidth
dv.style.height=document.body.clientHeight
dv.style.position="absolute"
dv.style.top=document.body.scrollTop
dv.style.left="0px"
dv.style.background="URL(/CSS/trans.png)"
dv.hide=function(){document.body.removeChild(this)
document.body.style.overflow=""}
dv.ondblclick=function(){dv.hide()}
dv.closeButton=function(img){var a=document.createElement("A")
if((img=="")||(img==undefined))
{a.innerHTML="X"}
else{a.innerHTML="<img border=0 alt='Close' src='"+img+"'>"}
a.onclick=function(){dv.hide()}
a.href="javascript:void(0)"
a.title="Close"
return a}
dv.formUI=function(obj){var t=createTable()
t.className="dvFrame"
t.newRow()
var td=t.newTH()
td.innerHTML="Cox &amp; Kings"
t.insertLast(td)
var td=t.newTD()
td.appendChild(dv.closeButton("/close.gif' width='10px"))
td.style.textAlign="right"
t.insertLast(td)
t.newRow()
var td=t.newTD()
td.colSpan=2
td.appendChild(obj)
t.insertLast(td)
dv.appendChild(t)
t.relocate=function(){this.style.left=((document.body.offsetWidth-t.offsetWidth)/2)+"px"
this.style.top=((document.body.clientHeight-t.offsetHeight)/2)+"px"}
t.relocate()
return t}
dv.alert=function(show){var x=createTable()
x.newRow()
var td=x.newTD()
x.className="dvInner"
x.style.width="200px";x.style.height="100px";td.innerHTML=show
x.insertLast(td)
dv.formUI(x)}
dv.aalert=function(show){var x=document.createElement("div")
x.style.width="400px"
x.className="dvInner"
x.appendChild(show)
var l=dv.formUI(x)
if((document.body.clientHeight-x.offsetHeight)<50)
{x.style.height=document.body.clientHeight-50
x.style.overflowY="scroll"
l.relocate()}}
document.body.appendChild(dv)
return dv}
function createForm(frm){if(frm==undefined||typeof(frm)=="string"){if(document.all)
{var frm=document.createElement("<FORM name='"+frm+"'>")
frm.id=frm}
else{var frm=document.createElement("FORM")
frm.name=frm
frm.id=frm}}
frm.createInput=function(ename,evalue,etype,defText){if(document.all)
{var elm=document.createElement("<INPUT name='"+ename+"' type='"+etype+"'>")
elm.id=ename}
else{var elm=document.createElement("INPUT")
elm.name=ename
elm.id=ename
elm.type=etype}
elm.value=evalue;if(!(defText==undefined))
{defText=defText
elm.value=defText}
elm.defText=defText
if(etype=="radio")
{elm.getValue=function()
{var x=frm[this.name]
for(var i=0;i<x.length;i++)
{if(x[i].checked)
{return x[i].value}}}}
if(etype=="datePicker"){elm.onclick=function(){if(!(this.Calender))
{this.Calender=Calender()}
this.Calender.drawCal(this,this.value)}}
return elm}
frm.createSelect=function(ename){if(document.all)
{var elm=document.createElement("<SELECT name='"+ename+"'>")
elm.id=ename}
else{var elm=document.createElement("SELECT")
elm.name=ename
elm.id=ename}
elm.createOption=function(eTitle,eValue){var option=document.createElement("OPTION")
option.value=eValue
if(document.all)
{option.innerText=eTitle}
else{option.text=eTitle}
elm.appendChild(option)}
elm.fillNumbers=function(numStart,numEnd){for(var i=numStart;i<=numEnd;i++)
{elm.createOption(i,i)}}
elm.selectValue=function(value){var v=elm.options
for(var i=0;i<v.length;i++)
{if(v[i].value==value)
{elm.selectedIndex=i}}}
return elm}
frm.setValidate=function(){var elms=frm.elements
for(var i=0;i<elms.length;i++)
{if(!(elms[i].getAttribute("validate")==undefined))
{frm.onsubmit=function(){if(typeof(frm.prevalidate)=="function")
{if(frm.prevalidate()==!1)
{return!1}}
return frm.validate()}
var typ=elms[i].getAttribute("type");var typName=elms[i].getAttribute("radioType");if((typ=="email")||(typ=="isValEid")){elms[i].checkValidate=function(){var str=this.value
if(typeof(this.getAttribute("defvalue"))!="undefined"&&str==this.getAttribute("defvalue"))
{return!1}
var str=str.split("@")
if(str[1]==undefined)
{return!1}
if((str[0].length<1)||((str[1].indexOf(".")<3)||((str[1].length-str[1].indexOf("."))<3)))
{return!1}
return!0}}
if(typ=="datePicker"||typ=="caldate"){elm=elms[i]
elm.checkValidate=function(){if(isDate(this.value))
{return!0}
else{return!1}
return!1}}
if((typ=="text")||(typ==undefined)||(typ=="select-one")||(typ=="textarea")||(typ=="file")){elms[i].checkValidate=function(){var str=this.value;str=str.trimapi();str=str.toString()
if(typeof(this.getAttribute("defvalue"))!="undefined"&&str==this.getAttribute("defvalue"))
{return!1}
if(str.length<this.getAttribute("validate"))
{return!1}
return!0}}
if(typ=="radio"){elms[i].checkValidate=function(){var radio=this;var x=findPar(radio,"FORM");var radGroup=x[radio.name];for(var k=0;k<radGroup.length;k++)
{if(radGroup[k].checked==!0)
{var checkedVal=!0;break}}
if(checkedVal==!0)
{return!0}
else{return!1}
return!1}}
if(typ=="checkbox"){elms[i].checkValidate=function(){var checkbox=this;var x=findPar(checkbox,"FORM");var chkGroup=x[checkbox.name];if(typeof(chkGroup.length)=="undefined")
{if(chkGroup.checked==!0)
{var checkedVal=!0}}
else{for(var k=0;k<chkGroup.length;k++)
{if(chkGroup[k].checked==!0)
{var checkedVal=!0;break}}}
if(checkedVal==!0)
{return!0}
else{return!1}
return!1}}
if(typ=="numb"||typ=="number"||typ=="int"){elms[i].checkValidate=function()
{var str=this.value
if(str.toString().search(/^-?[0-9]+$/))
{return!1}
else{if(str.length<this.getAttribute("validate"))
{return!1}
else{return!0}}}}}}}
frm.validate=function(){elems=frm.elements
var errorNode="Please Check the Fields Below";for(var i=0;i<elems.length;i++)
{if(elems[i].checkValidate!=undefined)
{var oops=elems[i].checkValidate()
if(!oops)
{if(!elems[i].value)
{if(elems[i].type=="select-one"||elems[i].type=="select")
{errorNode=errorNode+"\n- Please select "}
else{errorNode=errorNode+"\n- Please enter "}}
else if(elems[i].type=="checkbox")
{errorNode=errorNode+"\n- Kindly check "}
else{errorNode=errorNode+"\n- Please provide valid "}
errorNode=errorNode+elems[i].getAttribute("titleName");if(elems[i].getAttribute("titleName")=="Mobile")
{}
if(elems[i].getAttribute("condition"))
{errorNode=errorNode+" ("+elems[i].getAttribute("condition")+")"}}}}
if(document.getElementById('mobile'))
{var mob=document.getElementById('mobile').value;if(mob.charAt(0)==7||mob.charAt(0)==8||mob.charAt(0)==9)
{}
else{}
if(mob.length<6)
{errorNode=errorNode+"\n- Mobile No. must contain atleast 6 digits."}
else{var i;var str;var ltr;var err;for(i=0;i<10;i++)
{if(i==0)
{str=mob.charAt(i);ltr=mob.charAt(i)}
else{if(ltr==mob.charAt(i))
{str+=mob.charAt(i);if(str.length>6)
{err='1'}}
else{str=''}
ltr=mob.charAt(i)}}
if(err=='1')
{errorNode=errorNode+'\n- Mobile No. should not contain more than 6 same consecutive digit.'}}}
if(document.getElementById('recomm_yes'))
{if(document.getElementById("recomm_yes").checked==!0||document.getElementById("recomm_yes").defaultChecked==!0)
{var friendEmail=document.getElementById("Friend_Email");if(friendEmail.value=="")
{errorNode=errorNode+"\n- Please enter Friend's Email"}
if(friendEmail.value!="")
{var atpos=friendEmail.value.indexOf("@");var dotpos=friendEmail.value.lastIndexOf(".");var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(reg.test(friendEmail.value)==!1)
{errorNode=errorNode+"\n- Please provide valid Friend's Email"}}}}
if(document.getElementById('dfrom'))
{var dfrom=document.getElementById('dfrom').value;var dto=document.getElementById('dto').value;if(dfrom>dto)
{errorNode=errorNode+"\n- From Date of Journey cannot be greater than To Date of Journey."}}
if(errorNode&&errorNode!="Please Check the Fields Below")
{alert(errorNode)
return!1}
else{return!0}}
return frm}
function validateMobilePhone(mobile){var re5digit=/[9|8|7]\d{}/
if(mobile.search(re5digit)!=-1){alert('SUCCESS')}else{alert('NO SUCCESS')}}
function ConvToTab(tbl){tbl=createTable(tbl)
tbl.firstRow=tbl.rows[0].cells
tbl.content=tbl.rows[1].cells
if(tbl.getAttribute("defaultTab")==undefined)
{tbl.active=0}
else{if(tbl.getAttribute("defaultTab")<tbl.firstRow.length)
{tbl.active=tbl.getAttribute("defaultTab")}}
tbl.showTab=function(obj){for(var i=0;i<tbl.firstRow.length;i++)
{tbl.firstRow[i].className="inactive"
if(tbl.content[i])
{tbl.content[i].style.display="none"}}
tbl.firstRow[(tbl.findMyIndex(obj))].className="active"
if(document.all)
{tbl.content[(tbl.findMyIndex(obj))].style.display="block"}
else{tbl.content[(tbl.findMyIndex(obj))].style.display="table-cell"}}
for(var i=0;i<tbl.firstRow.length;i++)
{var cll=tbl.firstRow[i]
if(cll.getAttribute("defaultTab")=="true")
{tbl.active=0}
cll.onclick=function(){tbl.showTab(this)}
if(tbl.content[i])
{tbl.content[i].colSpan=tbl.firstRow.length
tbl.content[i].style.display="none"}}
tbl.showTab(tbl.firstRow[tbl.active])}
function currData(tbl)
{tbl=createTable(tbl)}
function findPosX(obj)
{var curleft=0;if(obj.offsetParent)
while(1)
{curleft+=obj.offsetLeft;if(!obj.offsetParent)
break;obj=obj.offsetParent}
else if(obj.x)
curleft+=obj.x;return curleft}
function findPosY(obj)
{var curtop=0;if(obj.offsetParent)
while(1)
{curtop+=obj.offsetTop;if(!obj.offsetParent)
break;obj=obj.offsetParent}
else if(obj.y)
curtop+=eval(obj.y);return curtop+18}
function ticker(){if(!(document.flashingObj==undefined))
{if(document.flashBannner==undefined)
{document.flashBannner=document.createElement("DIV")
FB=document.flashBannner
document.body.appendChild(FB)}
if(document.flashingTime<100)
{document.flashBannner.style.display="block"
FB.style.position="absolute"
FB.style.background="#CCFFFF"
FB.style.border="red solid 1px"
FB.style.padding="2px"
FB.innerHTML="<b> Please enter valid info for "+document.flashingObj.getAttribute("titleName")+"</b>";FB.style.left=findPosX(document.flashingObj)
FB.style.top=findPosY(document.flashingObj)+2}
if(document.flashingObj.style.backgroundColor=="yellow")
{document.flashingObj.style.backgroundColor="white"}
else{document.flashingObj.style.backgroundColor="yellow"}
document.flashingTime=document.flashingTime+50}
if(document.flashingTime<=500)
{setTimeout("ticker()",document.flashingTime)}
else{document.flashBannner.style.display="none"}}
function Inint_AJAX(){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}
try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}
try{return new XMLHttpRequest()}catch(e){}
return null};function newDoc(txt){if(document.all)
{xmlDoc=new ActiveXObject("Microsoft.XMLDOM");xmlDoc.async="false";xmlDoc.loadXML(txt);return xmlDoc}
else{parser=new DOMParser();xmlDoc=parser.parseFromString(txt,"text/xml");return xmlDoc}}
var dtCh="/";var minYear=1900;var maxYear=2100;function isInteger(s){var i;for(i=0;i<s.length;i++){var c=s.charAt(i);if(((c<"0")||(c>"9")))return!1}
return!0}
function stripCharsInBag(s,bag){var i;var returnString="";for(i=0;i<s.length;i++){var c=s.charAt(i);if(bag.indexOf(c)==-1)returnString+=c}
return returnString}
function daysInFebruary(year){return(((year%4==0)&&((!(year%100==0))||(year%400==0)))?29:28)}
function DaysArray(n){for(var i=1;i<=n;i++){this[i]=31
if(i==4||i==6||i==9||i==11){this[i]=30}
if(i==2){this[i]=29}}
return this}
function isDate(dtStr){var daysInMonth=DaysArray(12)
var pos1=dtStr.indexOf(dtCh)
var pos2=dtStr.indexOf(dtCh,pos1+1)
var strDay=dtStr.substring(0,pos1)
var strMonth=dtStr.substring(pos1+1,pos2)
var strYear=dtStr.substring(pos2+1)
strYr=strYear
if(strDay.charAt(0)=="0"&&strDay.length>1)strDay=strDay.substring(1)
if(strMonth.charAt(0)=="0"&&strMonth.length>1)strMonth=strMonth.substring(1)
for(var i=1;i<=3;i++){if(strYr.charAt(0)=="0"&&strYr.length>1)strYr=strYr.substring(1)}
month=parseInt(strMonth)
day=parseInt(strDay)
year=parseInt(strYr)
if(pos1==-1||pos2==-1){return!1}
if(strMonth.length<1||month<1||month>12){return!1}
if(strDay.length<1||day<1||day>31||(month==2&&day>daysInFebruary(year))||day>daysInMonth[month]){return!1}
if(strYear.length!=4||year==0||year<minYear||year>maxYear){return!1}
if(dtStr.indexOf(dtCh,pos2+1)!=-1||isInteger(stripCharsInBag(dtStr,dtCh))==!1){return!1}
return!0}
function isValidString(str){var result=!0;var iChars="`~!@#$%^";if(str.length==0)return!1;for(var i=0;i<str.length;i++){if(iChars.indexOf(str.charAt(i))!=-1){result=!1}}
return result}
function numericValue(evt){evt=(evt)?evt:window.event;var charCode=(evt.which)?evt.which:evt.keyCode;if(charCode>31&&(charCode<48||charCode>57)){return!1}
return!0}
function alphabetValue(evt){evt=(evt)?evt:event;var charCode=(evt.charCode)?evt.charCode:((evt.keyCode)?evt.keyCode:((evt.which)?evt.which:0));if((charCode>=65&&charCode<=90)||(charCode>=97&&charCode<=122)||(charCode==32)||(charCode==127)||(charCode==8)||(charCode==9))
{return!0}
else{return!1}}
function noSpace(evt){evt=(evt)?evt:event;var charCode=(evt.charCode)?evt.charCode:((evt.keyCode)?evt.keyCode:((evt.which)?evt.which:0));if((charCode>=64&&charCode<=90)||(charCode>=97&&charCode<=122)||(charCode>=48&&charCode<=57)||(charCode==95)||(charCode==127)||(charCode==8)||(charCode==9)||(charCode==46)||(charCode==45))
{return!0}
else{return!1}}
function alphabetNumValue(evt){evt=(evt)?evt:event;var charCode=(evt.charCode)?evt.charCode:((evt.keyCode)?evt.keyCode:((evt.which)?evt.which:0));if((charCode>=97&&charCode<=122)||(charCode>=48&&charCode<=57)||(charCode==127)||(charCode==8))
{return!0}
else{return!1}}
function stdCodeValidation(evt){evt=(evt)?evt:event;var charCode=(evt.charCode)?evt.charCode:((evt.keyCode)?evt.keyCode:((evt.which)?evt.which:0));if(charCode>30&&(charCode<48||charCode>57)&&charCode!=46&&charCode!=44&&charCode!=43){return!1}
return!0}