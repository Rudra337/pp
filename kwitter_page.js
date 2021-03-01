
var firebaseConfig = {
      apiKey: "AIzaSyBskK64uo9QxYvaEhuLhVMaf-jWE_4ukAk",
      authDomain: "idk-btw-hello.firebaseapp.com",
      databaseURL: "https://idk-btw-hello-default-rtdb.firebaseio.com",
      projectId: "idk-btw-hello",
      storageBucket: "idk-btw-hello.appspot.com",
      messagingSenderId: "617888984027",
      appId: "1:617888984027:web:62e75582a9892a52e455fe"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

    user_name = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name")
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
   function addRoom() 
   {
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });
         localStorage.setItem("room_name", room_name);
         window.location = "kwitter_room.html";
   }
   
   function send()
   {
         msg = document.getElementById("msg").value ;
         firebase.database().ref(room_name).push({
               name:user_name,
               message:msg,
               like:0
         });
         name_of_participant =  msg;
         document.getElementById("outputt").innerHTML = name_of_participant;
         document.getElementById("msg").value = "";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("outputt").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'> </h4>" ;
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("outputt").innerHTML += row;
      } });  }); }
getData();
//End code

function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwiter_room.html";
}
function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

