var namelength=localStorage.getItem("persons").length-1
var name=localStorage.getItem("persons").substring(1,namelength)
var balance=parseInt($("#balancevalue").text())
var amount=0  //The amout That the user will enter to bet with
var check=0  //Check If client chose arrow or not
var roll=0  ///Client Chose Up Or down
var checkifwin=false //////check if number match
//////////////////////////////////////////////////////
$("#arrow1").on("click",function(){
	checkifwin=0
	check=1
	$("#tickup").css("visibility","visible")
	$("#tickdown").css("visibility","hidden")
})
$("#arrow2").on("click",function(){
	check=2
	$("#tickup").css("visibility","hidden")
	$("#tickdown").css("visibility","visible")
})
$("#rolldice").on("click",function(){
	$('#sound')[0].play()
     checkifwin=false
	var imgs=["diceface1.png","diceface2.png","diceface3.png","diceface4.png","diceface5.png","diceface6.png"]
		var random=Math.ceil(Math.random()*6)
		if(balance>0){
if(check===0){
	alert("pick up or down")
}
if(check===1){
	roll=[4,5,6]

}if(check===2){
	roll=[1,2,3]
}
if(check!==0){
$("#finalresult").attr("src",imgs[(random-1)])
for(var x=0;x<roll.length;x++){
if(roll[x]===random){
checkifwin=true	
}
}
if(checkifwin===true){
	balance=balance+parseInt($("#betamount").val())
	$("#balancevalue").text(balance)
	$('#sound')[1].play()
}else {
	balance=balance-parseInt($("#betamount").val())
	$("#balancevalue").text(balance)
}
}
}if(balance<=0){
	alert("sorry No Money")
	$("#balancevalue").text(0)
}
})
