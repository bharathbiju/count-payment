
<!DOCTYPE html>
<html>
<head>
<title>Page 2</title>
</head>
<body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<?php
$a=500 *100;
$AMOUNT="asda"
?>



<form action="charge.php" method="POST">
  <!-- Note that the amount is in paise = 50 INR -->
  <script
      src="https://checkout.razorpay.com/v1/checkout.js"
      data-key="rzp_test_KBa0kjoAKUUca0"
      data-amount=<?php echo $a?>
      data-buttontext="proced to Pay "
      data-name="PHPExpertise.com"
      data-description="Test Txn with RazorPay"
      data-image="https://your-awesome-site.com/your_logo.jpg"
      data-prefill.name="DIDI"
      data-prefill.email="<?php echo $AMOUNT?>"
      data-theme.color="#F37254"
  >  </script>
  <input type="hidden" value="Hidden Element" name="hidden">
  
  </form>
</body>
</html>