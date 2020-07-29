<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <div class="container">
    <div class="wrapper">
      <div class="company-info">

      </div>
      <div class="contact">
        <h3>Email Us</h3>
        <div class="alert"></div>
        <form id="contactForm"  name="form"  method="POST">
          <p>
            <label>Name</label>
            <input type="text" name="name" id="name" required>
          </p>
          <p>
            <label>Company</label>
            <input type="text" name="company" id="company">
          </p>
          <p>
            <label>Email Address</label>
            <input type="email"  name="email" id="email"  required>
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" id="phone">
          </p>
          <p class="full">
            <label>Message</label>
            <textarea name="message" rows="5" id="message"></textarea>
          </p>
          <p class="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
  <script src="https://www.gstatic.com/firebasejs/4.3.0/firebase.js"></script>
 
  <script >

    // Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBnWGQfM677TswYMBUDMCVSC1CtuswL5Fo",
  authDomain: "login-95de5.firebaseapp.com",
  databaseURL: "https://login-95de5.firebaseio.com",
  projectId: "login-95de5",
  storageBucket: "login-95de5.appspot.com",
  messagingSenderId: "277584537988",
  appId: "1:277584537988:web:5daaebaa41f589624215d1",
  measurementId: "G-R7EXMV3NJG"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert

  var x=Math.random()*10
  var y=(Math.ceil(x));

  document.querySelector('.alert').innerHTML = y+" remaining offers"
  document.querySelector('.alert').style.display = 'block';



  // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.alert').style.display = 'none';
    // },3000);

 
    
  
  // Clear form
  // document.getElementById('contactForm').reset();
  // window.location.replace("second.php");
}


// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}


  </script>

<?php
$a=500 *100;
$AMOUNT="asda@gmail.com"
?>

  

<script
src="https://checkout.razorpay.com/v1/checkout.js"
data-key="rzp_test_KBa0kjoAKUUca0"
data-amount="200000"
data-buttontext="proced to Pay "
data-name="PHPExpertise.com"
data-description="Test Txn with RazorPay"
data-image="https://your-awesome-site.com/your_logo.jpg"
data-prefill.name="DIDI"
data-prefill.email="<?php echo  $AMOUNT?>"
data-theme.color="#F37254"
> </script>


<!-- <script>
function myFunction() {
  var x=Math.random()*10
  alert(Math.ceil(x));
}
</script> -->


</body>
</html>

