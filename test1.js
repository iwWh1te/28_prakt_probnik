var cnt=255;
var outputText="";
alert("Global call function: alert"+"\n"+"cnt="+cnt);
function onClickTest() {
	cnt++;
	alert("Clicked button:Test"+"\n"+"cnt="+cnt);
	return false;
}
