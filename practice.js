// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGYMqcp90tGHzdCKp1zFTlLYb27L_iCKU",
    authDomain: "kwitter-92532.firebaseapp.com",
    databaseURL: "https://kwitter-92532-default-rtdb.firebaseio.com",
    projectId: "kwitter-92532",
    storageBucket: "kwitter-92532.appspot.com",
    messagingSenderId: "948378602889",
    appId: "1:948378602889:web:fb2325c56ebce6f9fc2558",
    measurementId: "G-FQPLCYXMCD"
  };
//ADD YOUR FIREBASE LINKS
firebase.initializeApp(firebaseConfig);
function adduser() {
    var username=document.getElementById("username").value;
firebase.database().ref("/").child(username).update({
    purpose: "adding user"
});
}