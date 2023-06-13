let username = id('username')
let usernumber = id('usernumber')
let useremail = id('useremail')
let location = id('location')
let errorMsg = document.getElementsByClassName('error')

//using trim to avoid spaces in the input

let validation = (id, serial, message ) => {
    if(id.value.trim()=== ''){
        errorMsg[serial].innerHTML = message;
       
    }
}


button.addEventListener('submit', (e) =>{
    e.preventDefault()
    validation(username, 0, 'Enter your fullname')
    validation(usernumber, 1, 'Enter your fullname')
    validation(useremail, 2, 'Enter your fullname')
    validation(location, 3, 'Enter your fullname')
});