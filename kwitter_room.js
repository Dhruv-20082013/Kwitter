const firebaseConfig = {
    apiKey: "AIzaSyDXNg20KpRDr8ZHeopP6OroDjabafFKh0s",
    authDomain: "kwiter-ec9c3.firebaseapp.com",
    databaseURL: "https://kwiter-ec9c3-default-rtdb.firebaseio.com",
    projectId: "kwiter-ec9c3",
    storageBucket: "kwiter-ec9c3.appspot.com",
    messagingSenderId: "342168573431",
    appId: "1:342168573431:web:d9fba37560780252cfcaf2",
    measurementId: "G-56G59HGFLW"
  };

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME" + user_name;

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("room_name" + room_name);
            row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>"
            document.getElementById("output").innerHTMl = row;
            


        });
    });
}


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}