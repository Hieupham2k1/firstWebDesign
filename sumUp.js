	var menu=document.getElementById("menu");
	menu.style.height=menu.clientWidth+"px";
	var menuHeight=menu.clientHeight;
	var menuButton=document.getElementById("menuButton");
	menuButton.style.top=menuHeight/2-menuButton.clientHeight/2+"px";
	menuButton.style.left=menuHeight/2-menuButton.clientWidth/2+"px";
	var dropdown=document.getElementById("dropdown");
	dropdown.style.marginTop=menuHeight*2+"px";
	var dropdownPiece=document.getElementsByClassName("dropdownPiece");
	for(var i=0; i<dropdownPiece.length;i++){
		dropdownPiece[i].style.left=i*25+"%";
	}
function resize(){
	menu.style.height=menu.clientWidth+"px";
	menuButton.style.top=menuHeight/2-menuButton.clientHeight/2+"px";
	menuButton.style.left=menuHeight/2-menuButton.clientWidth/2+"px";
	dropdown.style.marginTop=menuHeight*2+"px";
	for(var i=0; i<dropdownPiece.length;i++){
		dropdownPiece[i].style.left=i*25+"%";
	}
body.style.height=body.clientWidth+"px";
}
var ddP= new Array();
for(var i=1; i<5; i++){
	ddP[i]=document.getElementsByClassName("ddP"+i);
}
var holderddP=new Array();
for(var i=1; i<5; i++){
	holderddP[i]=document.getElementsByClassName("holderddP"+i);
}
var ddPClick=new Array();
for(var j=0; j<ddP.length; j++){
	ddPClick[j]=0;
}
var stopBgButton= document.getElementById("stopBackgroundButton");
function stopBackground(){
	document.getElementById("video").classList.toggle("hide");
}
function ddPShow(i){
	ddPClick[i]++;
	if(ddPClick[i]%2==1){
		for(var j=0; j<ddP[i].length; j++){
			ddP[i][j].style.transform="rotate("+(j+1)*45+"deg)";
			holderddP[i][j].style.float="right";
			holderddP[i][j].style.transform="rotate("+-(j+1)*45+"deg)";
		}
	}
	else{
		for(var j=0; j<ddP[i].length; j++){
			ddP[i][j].style.transform="rotate(0deg)";
			holderddP[i][j].style.transform="rotate(0deg)";
		}
	}
}
function menuToggle(){
	var menuContent= new Array("content 1","content 1","content 1","content 1");
	document.getElementById("menu").classList.toggle("menuHide");
	for(var i=0;i<4; i++){
		document.getElementsByClassName("menuQuarter")[i].innerHTML=menuContent[i];
		document.getElementsByClassName("menuQuarter")[i].style.fontSize="10px";
	}
}
var body=document.getElementById("body");
body.style.height=body.clientWidth+"px";
var bGPiece= document.getElementsByClassName("bGPiece");
var bGContent=new Array();
for(var i=0; i<9;i++){
	bGContent[i]=document.getElementById("bGContent"+(i+1));
}
function infoShow( i){
document.getElementById("informer").innerHTML=bGContent[i-1].innerHTML;
}
function infoHide(){
	document.getElementById("informer").innerHTML="";
}
var infoVisible=1;
function letInfoVisible( i){
	infoVisible=i;
	if(i==0) escInfo();
}
function popupInfo(){
	if(window.scrollY/window.innerHeight>0.2&&infoVisible==1){
		document.getElementById("informerContainer").style.transform="scale(1,1)";
		document.getElementById("informerContainer").style.opacity="1";
	}
	else escInfo();
}
function escInfo(){
	document.getElementById("informerContainer").style.opacity="0";
	document.getElementById("informerContainer").style.transform="scale(0.1, 0.1)";
}