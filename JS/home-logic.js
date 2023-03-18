document.onreadystatechange = function () {
    if (document.readyState == "complete") {
		var loginPage = document.getElementById('main');
		console.log("this is login page", loginPage);
    }
}

function login(uname, pwd){

    var uname = document.getElementById("email").value;
    console.log(uname);
    var pwd = document.getElementById("pwd").value;
    console.log(pwd);
    var formData = document.getElementById("loform").value;
    console.log(formData);
        if(uname == ""){
        alert("please enter username.");
    }
    else if(pwd == ""){
        alert("please enter password");
    }
    else{
        alert("thank you for login this page");
        
    }
    window.location.href = "file:///C:/Users/HP/Desktop/Ang-Project/my-login-page/calculator.html";   
}

// function create(){
//     window.location = "file:///C:/Users/HP/Desktop/Ang-Project/my-login-page/calculator.html";
// }

// function clearFunc()
// 	{
// 		document.getElementById("email").value="";
// 		document.getElementById("pwd1").value="";
// 	}	

    