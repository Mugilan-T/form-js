let userInfo=document.getElementById("userdetl");//div
let userVal=document.getElementById("addInfo");//button
let userName=document.getElementById("name");
let userPlace=document.getElementById("place");
let userFolwr=document.getElementById("follower");
let userPhoto=document.getElementById("picImg");
  let array=[];
userVal.addEventListener("click",function(){
	   let name=userName.value;
	   let place=userPlace.value;
	   let follower=userFolwr.value;
	   let picImg=userPhoto.value;
	  // let getId=Math.random();		   
	   let object={}
	       object["name"]=name;
		   object["place"]=place;
		   object["follower"]=follower;
		   object["picImg"]=picImg; 

	   userName.value="";
	   userPlace.value="";
	   userFolwr.value="";
	   userPhoto.value="";
	   array.push(object);
	   console.log(array);
});