/////////////////////////////Simple decryptage methode #1
var alp=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
function crypt (string){
	var result=""
	for (var i=0;i<string.length;i++){
		if(string[i]===" "){
			result=result+" "
		}
		if(typeof(string[i])==="string"){
          for (var x=0;x<alp.length;x++){
          	if (string[i]===alp[x]){
          		result=result+alp[x+1]
          	}
          }
		}
	}
	return result
}
function decrypt(string){
	var result=""
	for (var i=0;i<string.length;i++){
		if(string[i]===" "){
			result=result+" "
		}
		if(typeof(string[i])==="string"){
          for (var x=0;x<alp.length;x++){
          	if (string[i]===alp[x]){
          		result=result+alp[x-1]
          	}
          }
		}
	}
	return result
}


function cryptage(string){
	var results=string
	return {
		crypt:function(result){
	var result=""
	for (var i=0;i<results.length;i++){
		if(results[i]===" "){
			result=result+" "
		}
		if(typeof(results[i])==="string"){
          for (var x=0;x<alp.length;x++){
          	if (results[i]===alp[x]){
          		result=result+alp[x+1]
          	}
          }
		}
	}
	return result
},
        decrypt:function(strings){
	var resul=""
	for (var i=0;i<strings.length;i++){
		if(strings[i]===" "){
			resul=resul+" "
		}
		if(typeof(strings[i])==="string"){
          for (var x=0;x<alp.length;x++){
          	if (strings[i]===alp[x]){
          		resul=resul+alp[x-1]
          	}
          }
		}
	}
	return resul
}
	}
}

////////////////////////////////////////////////// cryptage method #2
var alp=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "]
var crr=["9","8","7","6","5","4","3","2","1","0","!","@","#","$","%","^","&","*","'",".",",",";","/","+","-","_","?"]
var crypt=function(string){
var crptResult=""
for(var i=0;i<string.length;i++){
	for(var x=0;x<alp.length;x++){
		if(string[i]===alp[x]){
			crptResult=crptResult+crr[x]
		}
	}

}
return crptResult
}

var decrypt=function(string){
	var decrptResult=""
	for (var i=0;i<string.length;i++){
		for(var x=0;x<crr.length;x++){
			if(string[i]===crr[x]){
				decrptResult=decrptResult+alp[x]
			}
		}
	}
	return decrptResult
}
















































