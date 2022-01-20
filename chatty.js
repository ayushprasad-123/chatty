var firebaseConfig = {
  apiKey: "AIzaSyCzM2sThINFtosC6olBaOfs6UWyJBGSST4",
  authDomain: "chatty-e434e.firebaseapp.com",
  databaseURL: "https://chatty-e434e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatty-e434e",
  storageBucket: "chatty-e434e.appspot.com",
  messagingSenderId: "189518004104",
  appId: "1:189518004104:web:c9179d00a9051acf18c43d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var rrooms=[];
var irooms=[];
var trooms=[];
function getAllRooms(){

}
function login(){

}
function getkey(loc,str){
    firebase.database.ref(loc).on('value', function snapshot(){
        snapshot.forEach(function (childSnapshot){
            str.push(childSnapshot.key);
        });
    });
}
function pushData(loc,data){
    firebase.database.ref(loc).push(data);
}

// data={msg=... like=... ......}
