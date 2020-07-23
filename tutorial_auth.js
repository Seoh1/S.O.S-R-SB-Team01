
var firebaseConfig = {
    apiKey: "AIzaSyBRmNBPErjiQzclhKDNHC4DJ-NNTdZD6GU",
    authDomain: "team-universal-database.firebaseapp.com",
    databaseURL: "https://team-universal-database.firebaseio.com",
    projectId: "team-universal-database",
    storageBucket: "team-universal-database.appspot.com",
    messagingSenderId: "359143047818",
    appId: "1:359143047818:web:0db611886ddacafd6ba373",
    measurementId: "G-LJZVEVE4BC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



// firebase.analytics();


const auth = firebase.auth();

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
    
}

function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));


    // alert("Signed In" + email.value);

    //take user to a different or home page
}

function signOut(){
    auth.signout();
    alert("Signed Out");
}

auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        alert("Actove user "+ email)
        window.location= "register.html"

    }else{
        alert("No Active user")
    }
})


// const user_prof = document.querySelector('#registered');
// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     db.collection('user-login').add({
//         Email: email,
//         City: user_prof.city.value,
//         Type: user_prof.type.value,
//         Covid: user_prof.mask.value,
//         Delivery: user_prof.delivery.value,
//         Take_out: user_prof.take_out.value,


//     }) 
//             .then(function (docRef) {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch(function (error) {
//             console.error("Error adding document: ", error);
//         });
    
// })



