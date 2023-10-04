function getFormvalue() {
    //Write your code here
	let firstname = document.getElementsByName("fname")[0].value;
	let lastname =  document.getElementsByName("lname")[0].value;
	const message = firstname +" "+lastname;
	alert(message);

}
