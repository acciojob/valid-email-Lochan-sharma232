
// function validEmail(str) {
// 	let string=/^[A-Za-z_.0-9]{6,30}@[A-Za-z]{4,12}.[A-Za-z]{2,8}$/;
//   return string.test(str);
// 	//your JS code here
// 	}
function validEmail(str) {
    let string = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return string.test(str);
}
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
