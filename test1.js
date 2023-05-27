var cnt=255;
var outputText="";
alert("Global call function: alert"+"\n"+"cnt="+cnt);
function onClickTest() {
	cnt++;
	alert("Clicked button:Test"+"\n"+"cnt="+cnt);
	return false;
}
function onClickTest2() {
	
	alert("cnt in 16x= "+cnt.toString(16));
	return false;
}
