//displaying numbers on screen
function block(){
	document.addEventListener("contextmenu",event =>{
		event.preventDefault();
	})
}
block();

function display(val){
	if(val != ""){
		document.querySelector("#disp").value += val;
	}
	else{//clearing screen
		document.querySelector("#disp").value ='';
		document.querySelector("#disp").style.backgroundColor = "black";
	}
}

function result(){
	//error handle
	try 
	{
		let x = document.querySelector("#disp").value;
		let pattern = /^[+*/-]([0-9]*)$/
		if(pattern.test(x)){
			document.querySelector("#disp").value = "invalid"
			document.querySelector("#disp").style.backgroundColor = "red";
		}
		else{
			let y = eval(x);
			if(y == "Infinity"){//for divison
				document.querySelector("#disp").value = "invalid"
				document.querySelector("#disp").style.backgroundColor = "red";

			}else{
				document.querySelector("#disp").value = y;
			}
		}
	}
	catch(err)
	{
		document.querySelector("#disp").value = "invalid";
		document.querySelector("#disp").style.backgroundColor = "red";
	}
	
}

// enter ==> for result

document.addEventListener("keypress",(event)=>{
	if(event.key ==='Enter'){
		result();
	}
})




// function result(){
// 	//error handle
// 	try 
// 	{
// 		let x = document.querySelector("#disp").value;
// 		let y = eval(x);
// 		if(y == "Infinity"){//for divison
// 			document.querySelector("#disp").value = "invalid"

// 		}else{
// 			document.querySelector("#disp").value = y;
// 		}

// 	}
// 	catch(err)
// 	{
// 		document.querySelector("#disp").value = "invalid";
// 	}
	
// }