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
         window.location = "kwitter_page.html";
   }
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id='+Room_names' onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

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
