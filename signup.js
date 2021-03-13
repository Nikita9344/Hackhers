// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCnRHLv2Nf2AyINpmKq2s0kY1waoCLR2is",
    authDomain: "home-b5ed0.firebaseapp.com",
    projectId: "home-b5ed0",
    storageBucket: "home-b5ed0.appspot.com",
    messagingSenderId: "603790139667",
    appId: "1:603790139667:web:5f5a37c6883b17021afae6",
    measurementId: "G-DHLJRMRK4E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const auth = firebase.auth();


function register() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message));
    alert("Registered Successfully");
}