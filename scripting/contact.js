
let username = document.getElementById('username').value.trim()
let usernumber = document.getElementById('usernumber').value.trim()
let useremail = document.getElementById('usermail').value.trim()
let location = document.getElementById('location').value.trim()

//using trim to avoid spaces in the input

/*try{
    let button = document.getElementById('btn')
    button.addEventListener('click', (e) =>{
        if((username === '') && (usernumber == '') ){
            throw {errorname:'Empty Error',
                message: 'Please fill those fields!'}
        }    
    })
}
catch(e){
    console.log(e)
}*/

let button = document.getElementById('btn')
button.addEventListener('click', (e) =>{
    e.preventDefault()
    if((username == '') && (usernumber == '')) || ((usernumber == '') && (useremail == '')){
        alert('Please fill in all fields!')
    }
}
)