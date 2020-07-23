// parts of this code is in reference to The Net Ninja's firebase authentication tutorial
// tutorial link: https://www.youtube.com/watch?v=wkdCpktUfGg&list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ&index=5
// github link: https://github.com/iamshaunjp/firebase-auth

//
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      setupUI(user);
      // document.getElementById("user_div").style.display = "block";
      // document.getElementById("login_div").style.display = "none";
  
      // var user = firebase.auth().currentUser;
  
      // if(user != null){
  
      //   var email_id = user.email;
      //   document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      // }
  
    } else {
      setupUI();
      // No user is signed in.
  
      // document.getElementById("user_div").style.display = "none";
      // document.getElementById("login_div").style.display = "block";
  
    }
  });

  //sign-in Credit to The Net Ninjia for tutorial "https://www.youtube.com/watch?v=wkdCpktUfGg&list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ&index=5"
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    
    //sign up uset to auth
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
    
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });

  })
  
  const logout = document.querySelector('#logout');
  
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() =>{
      console.log('user signed out');
    });
  });

  const loginForm = document.querySelector('#login-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userEmail = loginForm['login-email'].value;
    const userPassword = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(userEmail, userPassword).then(cred =>{

      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();

    })

  })
  



  
 