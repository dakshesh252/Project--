 var firebaseConfig = {
    apiKey: "AIzaSyBwldqZwNtyCpqfJYvcvDeHab2C0xtNSgA",
    authDomain: "let-s-chat-web-app-3ebdd.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-3ebdd-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-3ebdd",
    storageBucket: "let-s-chat-web-app-3ebdd.appspot.com",
    messagingSenderId: "627999803616",
    appId: "1:627999803616:web:d3eb34fc0fd6ab53f7e885"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function update1() {

  user_name= localStorage.getItem("user-name");
 document.getElementById("user-1name").innerText = "Welcome " + user_name + " !" ;

  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  console.log("Room name - " + Room_names);
  row = " <div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' > #" + Room_names +"</div><hr>";
    //End code
    });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name" , name)
window.location="kwitter_page.html";

}



function addroom() {

room_name= document.getElementById("room-name").value ;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room-name"
});

localStorage.setItem("room-name" , room_name);
window.location="kwitter_page.html";

}

function logout() {
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location="kwitter.html";

}

