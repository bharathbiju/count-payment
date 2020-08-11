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
   
    name = document.getElementById("name").value;
    Phonenumber = document.getElementById("Phonenumber").value;
    email = document.getElementById("email").value;
    state = document.getElementById("state").value;
    District = document.getElementById("District").value;
    console.log("hi")




    if(email.length != 0 && Phonenumber.length != 0)  
      {
      document.getElementById("input_button").disabled = true;
  var key = firebase.database().ref().child("cust").push().key;
      var task = {
        name: name,
        Phonenumber: Phonenumber,
        email: email,
        state: state,
        District:District,
        Paymentid:""
      };

      
      var updates = {};
      updates["/cust/" + key] = task;
      firebase.database().ref().update(updates);

    
      wait(1.3*1000).then(() => {
        document.getElementById("input_button").disabled = false;
        window.location="second.html"
    })
    }
    else {
      alert("Enter valid Mail and phone number");
    }
    


    
  }


  function myFunction(){
  task_array = [];
    firebase.database().ref("cust").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
        
      });

      console.log(task_array.length)

      remaing=10-task_array.length

      if(remaing==0){
        document.querySelector('.contact').innerHTML = " offers over to get update pls leave you mail"
       

      }
      else{
        document.querySelector('.alert').innerHTML = remaing+" more Slots"
        document.querySelector('.alert').style.display = 'block';

      }

     
    })

  
 

  }
  
  
 
