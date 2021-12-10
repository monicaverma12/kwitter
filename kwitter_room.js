     var firebaseConfig = {
      apiKey: "AIzaSyB02V0Et6q3maotWH3t8F_Sdor8MikuUVA",
      authDomain: "practice-7e64b.firebaseapp.com",
      databaseURL: "https://practice-7e64b-default-rtdb.firebaseio.com",
      projectId: "practice-7e64b",
      storageBucket: "practice-7e64b.appspot.com",
      messagingSenderId: "585436325461",
      appId: "1:585436325461:web:bf4f245993e267c6fe96dc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function logout(){
      window.location = "index.html";
}

User_name = localStorage.getItem("User_Name");
document.getElementById("user_name").innerHTML = "Welcome " + User_name + "!";


//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_room.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}