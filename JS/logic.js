


// window.onclick = function(event) {
//     if (event.target == loginPage) {
//         loginPage.style.display = "block";
//     }
// }


document.onreadystatechange = function () {
    if (document.readyState == "complete") {
		var loginPage = document.getElementById('main');
		console.log("this is login page", loginPage);
    }
}
// //IIFE function example

// (function sum(){
// 	console.log(1+2);
// }());

// function ClearLogin(){
// 	document.getElementById('main').style.display="none"
// }

// for(let i=0;i<10;i++){
// 	 console.log("hellow"); 
// 	} 
	// console.log(i) 
//hellow 10 times 
//syntax error ref error

//if var i
//hellow 10 times
//heloow 10 times
  

    function login()
	{
		var uname = document.getElementById("email").value;
        console.log(uname);
		var pwd = document.getElementById("pwd1").value;
        console.log(pwd);
		localStorage.setItem("user", uname);
        localStorage.setItem("pass", pwd); 
		var userName= localStorage.getItem("user"); 
		console.log("userName",userName)
        //  document.getElementById("userName").innerHTML=localStorage.getItem("user");
		// var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		// else if(!filter.test(uname))
		// {
		// 	alert("Enter valid email id.");
		// }
		// else if(pwd.length < 6 || pwd.length > 6)
		// {
		// 	alert("Password min and max length is 6.");
		// }
		else
		{
	alert('Thank You for Login');
  
       window.location = "file:///C:/Users/HP/Desktop/Ang-Project/my-login-page/calculator.html";
			}
	}
	
     var a=document.getElementById("userName");
	 a.innerHTML=this.userName;
	// document.write(userName);

	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}	

    // function setData(){
    //     var username = document.getElementById("email").value;
    //     localStorage.setItem("myValue", username);
    //     window.location.href="index.html";
    // }

    // var getName = localStorage.getItem("myValue");
    // alert("The Value Received is " + getName);
    // var resetValue =0;
    // localStorage.setItem("myValue", resetValue);


	let screen = document.getElementById('screen');
	buttons = document.querySelectorAll('button');
	let screenValue=0;

	for(let items of buttons){
		items.addEventListener('click', (e)=>{
			buttonText = e.target.innerText;
			console.log(buttonText);
			if(buttonText == 'X'){
				buttonText = '*'
				screenValue += buttonText.toString();
				screen.value = screenValue;
			}
			else if(buttonText == 'C'){
				screenValue = " " ;
				screen.value = screenValue;
			}
			else if(buttonText == '='){
				screen.value = eval(screenValue);
			}
			else{
				screenValue += buttonText.toString();
				screen.value = screenValue;
			}
		}) 
	}





