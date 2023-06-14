let username = document.getElementById('username').value.trim()
let usernumber = document.getElementById('usernumber').value.trim()
let useremail = document.getElementById('useremail').value.trim()
let location = document.getElementById('location').value.trim()
let errorMsg = document.getElementsByClassName('error')
let button = document.getElementById('btn')
let form = document.getElementById('form-info')

//using trim to avoid spaces in the input
  
  form.addEventListener('submit', (e) => {
      let isValid = true;

      // Reset error messages
      errorMsg.innerHTML = '';
      // name validation
      const nameValue = username.value;
      if (!nameValue) {
          errorMsg.innerHTML = 'Please enter your fullname';
          isValid = false;
    }
      //phonenumber validation
      const phoneValue = usernumber.value;
      if (!phoneValue) {
        errorMsg.innerHTML = 'Please enter your number';
        isValid = false;
    }
      // email validation
      const emailValue = useremail.value;
      if (!emailValue) {
          errorMsg.innerHTML = 'Please enter your email';
          isValid = false;
      }
      // location validation
      const locationValue = location.value;
      if (!locationValue) {
        errorMsg.innerHTML = 'Please enter your location';
        isValid = false;
    }
    
      if (!isValid) {
          e.preventDefault(); // Prevent form submission if there are errors
      }
  });