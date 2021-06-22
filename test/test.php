<?php session_start()?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="../assets/src/style/main.css" rel="stylesheet">
</head>
<style>
    .form{
        display: grid;
        place-content: center;
        padding: 30vh 0;
    }
</style>
<body>
<span class="form">
    <form action="form.php" method="POST" >
        <div class="form-group">
            <input type="text" name="name" class="form-control"  required>
            <span>NAME</span>
            <span class="border text"></span>
        </div>
        <div class="form-group">
            <input type="text" name="email" class="form-control"  required>
            <span>EMAIL</span>
            <span class="border text"></span>
        </div>
        <div class="form-group">
            <input type="text" name="subject" class="form-control"  required>
            <span>SUBJECT</span>
            <span class="border text"></span>
        </div>
        <div class="form-group mb" >
            <textarea name="message" class="form-control" required></textarea>
            <span>MESSAGE</span>
            <span class="border"></span>
        </div>
        <input name="send" class="send" type="submit" value=".send{}">
    </form>
</span>
<?php
				if(ISSET($_SESSION['status'])){
					if($_SESSION['status'] == "ok"){
			?>
<div class="alert alert-info"><?php echo $_SESSION['result']?></div>
<?php
					}else{
			?>
<div class="alert alert-danger"><?php echo $_SESSION['result']?></div>
<?php
					}

					unset($_SESSION['result']);
					unset($_SESSION['status']);
				}
			?>
</body>
</html>