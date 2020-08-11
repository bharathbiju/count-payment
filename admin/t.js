var firebaseConfig = {
  apiKey: "AIzaSyBnWGQfM677TswYMBUDMCVSC1CtuswL5Fo",
  authDomain: "login-95de5.firebaseapp.com",
  databaseURL: "https://login-95de5.firebaseio.com",
  projectId: "login-95de5",
  storageBucket: "login-95de5.appspot.com",
  messagingSenderId: "277584537988",
  appId: "1:277584537988:web:5daaebaa41f589624215d1",
  measurementId: "G-R7EXMV3NJG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function firebaseret(){

    var  finalstring="";
    
      task_array = [];
    firebase.database().ref("cust").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
        
      });
      for(var i, i = 0; i < task_array.length; i++){
        District = task_array[i][0];
       Phonenumber = task_array[i][1];
        email = task_array[i][2];
        name= task_array[i][3];
        state= task_array[i][4];

        finalstring+=" <tr><td>"+name+"</td><td>"+state+"</td><td>"+email+"</td><td>"+Phonenumber+"</td><td>"+District+"</td></tr>";
      }

      
      document.getElementById("TableContent").innerHTML = finalstring;
      
  })

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cors-anywhere.herokuapp.com/https://api.razorpay.com/v1/orders",
    "method": "GET",
    "headers": {
      "authorization": "Basic cnpwX3Rlc3Rfczc3aFVZdTc1UXB5RlI6SUZpZTRHVXRQUVhKYkIxbmFJdG8zeWZZ",
      "access-control-allow-origin": "*",
      "cache-control": "no-cache",
      "postman-token": "935f7114-f7c7-cf6e-58fb-e6aeedbf4076",
      'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*' 
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  
  
  }
 