
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
		var userName =  new URLSearchParams(window.location.search).get('uname');
            console.log(userName);
        document.getElementById("userDetail").innerHTML = userName;
 

let screen = document.getElementById('screen');
	buttons = document.querySelectorAll('button');
	let screenValue=0;
  
 
	for(let items of buttons){
		items.addEventListener('click', (e)=>{
			buttonText = e.target.innerText;
			console.log(buttonText);
			if(buttonText == 'X'){
				buttonText = '*'
				screenValue += buttonText;
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

}
}

function backToLogin(){
    window.open("file:///C:/Users/HP/Desktop/Ang-Project/my-login-page/index.html");
}