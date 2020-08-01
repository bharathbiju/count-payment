const wait=ms=>new Promise(resolve => setTimeout(resolve, ms))

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



  function add_task(){
   
    name_box = document.getElementById("name_box");
    number_box = document.getElementById("number_box");
    email_box = document.getElementById("email_box");
    city_box = document.getElementById("city_box");
    state_box = document.getElementById("state_box");




    if(email_box.value.length != 0 && number_box.value.length != 0)    {
      document.getElementById("input_button").disabled = true;
      // var dt = new Date()
      // var date=dt.toLocaleString()
 
  var key = firebase.database().ref().child("cust").push().key;
      var task = {
        name: name_box.value,
        number: number_box.value,
        email: email_box.value,
        city_box: city_box.value,
        state_box: state_box.value,
        key: key,
        // date:date
      };

      var updates = {};
      updates["/cust/" + key] = task;
      firebase.database().ref().update(updates);
      wait(2*1000).then(() => {
        document.getElementById("input_button").disabled = false;
        window.location="second.html"
    })
    }
    else{
      alert("Enter Mail and Phone number");
    }
    
  }
    
