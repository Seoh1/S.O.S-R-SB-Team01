
  const custForm = document.querySelector('#customerSignUp');
  custForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = custForm['email'].value;
    const password = custForm['password'].value;
    
    //sign up uset to auth
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
    
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });

  })
