$("#button").on("click",function() {
	$("#maincontainer").css("visibility","hidden")
   	$("#ourgames").css("animation-iteration-count","0")
	$("#maincontainer1").css("visibility","hidden")
	$("#maincontainer2").css("visibility","hidden")
	$("#maincontainer3").css("visibility","hidden")
	$("#ourgames").css("visibility","hidden")
	$("#Sign-in-card").css("visibility","visible")
	$("#inputname").css("visibility","visible")
	$("#inputpass").css("visibility","visible")
	$("#m-card").css("visibility","visible")
	$("#yourname").css("visibility","visible")
	$("#password").css("visibility","visible")
	$("#paymentcard").css("visibility","visible")
	$("#cheeps").css("visibility","visible")
	$("#send").css("visibility","visible")
})


 var persons=[]

$("#send").on("click",function(){
	persons.push({
		 "name":$("#inputname").val(),
		 "password":$("#inputpass").val(),
		 "m-card":$("#m-card").val()
	})
	localStorage.setItem('persons',JSON.stringify(persons[0].name));
	$("#Sign-in-card").css("visibility","hidden")
	$("#inputname").css("visibility","hidden")
	$("#inputpass").css("visibility","hidden")
	$("#m-card").css("visibility","hidden")
	$("#yourname").css("visibility","hidden")
	$("#password").css("visibility","hidden")
	$("#paymentcard").css("visibility","hidden")
	$("#cheeps").css("visibility","hidden")
	$("#send").css("visibility","hidden")
	$("#button").css("visibility","hidden")
	$("#button1").css("visibility","visible")
	$("#maincontainer").css("visibility","visible")
	$("#maincontainer1").css("visibility","visible")
	$("#maincontainer2").css("visibility","visible")
	$("#maincontainer3").css("visibility","visible")
	$("#ourgames").css("visibility","visible")

})

$("#button1").on("click",function(){
	$("#inputpass").val("")
	$("#inputname").val("")
$("#Sign-in-card").css("visibility","visible")
$("#password").css("visibility","visible")
$("#yourname").css("visibility","visible")
$("#inputpass").css("visibility","visible")
$("#inputname").css("visibility","visible")
$("#maincontainer").css("visibility","hidden")
$("#maincontainer1").css("visibility","hidden")
$("#maincontainer2").css("visibility","hidden")
$("#maincontainer3").css("visibility","hidden")
$("#ourgames").css("visibility","hidden")
$("#send1").css("visibility","visible")
})

var checkname=false
var checkpass=false
$("#send1").on("click",function(){

for (var i = 0; i < persons.length; i++) {
  if(persons[i].name===$("#inputname").val()){
  	checkname=true
  }
}
for(var x=0;x<persons.length;x++){
	debugger	
console.log(persons)
  if(persons[x]["password"]===$("#inputpass").val()){
		checkpass=true
	}
}
if(checkpass===true&&checkname===true){
$("#Sign-in-card").css("visibility","hidden")
$("#yourname").css("visibility","hidden")
$("#password").css("visibility","hidden")
$("#inputpass").css("visibility","hidden")
$("#inputname").css("visibility","hidden")
$("#send1").css("visibility","hidden")
$("#button1").css("visibility","hidden")
window.open("DiceGame.html")
}else {
	$("#inputname").val("")
	$("#inputpass").val("")
	alert("password Or name Are wrong")

}
})
