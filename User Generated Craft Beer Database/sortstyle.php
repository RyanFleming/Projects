<?php
//Turn on error reporting
ini_set('display_errors', 'On');
//Connects to the database
$mysqli = new mysqli("oniddb.cws.oregonstate.edu","fleminry-db","XlEgm36lgb19079p","fleminry-db");
if($mysqli->connect_errno){
	echo "Connection error " . $mysqli->connect_errno . " " . $mysqli->connect_error;
	}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<body>
<div>
	<table>
		<tr>
			<td>Beer</td>
		</tr>
		<tr>
			<td>Name</td>
			<td>Description</td>
			<td>Availability</td>
			<td>ABV</td>
			<td>Style</td>
		</tr>
<?php
if(!($stmt = $mysqli->prepare("SELECT beer.name, beer.description, beer.availability, beer.abv, style.name FROM beer INNER JOIN style ON beer.style_id = style.id WHERE style.id = ?"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!($stmt->bind_param("i",$_POST['style']))){
	echo "Bind failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($name, $description, $availability, $abv, $style)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
 echo "<tr>\n<td>\n" . $name . "\n</td>\n<td>\n" . $description . "\n</td>\n<td>\n" . $availability . "\n</td>\n<td>\n" . $abv . "\n</td>\n<td>\n" . $style . "\n</td>\n</tr>";
}
$stmt->close();
?>		
	</table>
</div>

<p><a href="home.php">Back to Main Menu</a></p>
</body>
</html>