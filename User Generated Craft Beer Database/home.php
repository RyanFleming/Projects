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
if(!($stmt = $mysqli->prepare("SELECT beer.name, beer.description, beer.availability, beer.abv, style.name FROM beer INNER JOIN style ON beer.style_id = style.id"))){ 
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
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

<div>
	<form method="post" action="searchbeer.php">
		<fieldset>
			<legend>Search by Beer Name (look at table above)</legend>
				<p>Name: <input type="text" name ="Name" /></p>
			</fieldset>
		<p><input type="submit" value="Search" /></p>
	</form>
</div>

<div>
	<form method="post" action="sortstyle.php">
		<fieldset>
			<legend>Filter by Style</legend>
				<select name="style">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM style"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>				
				</select>
			</fieldset>
		<p><input type="submit" value="Filter" /></p>
	</form>
</div>

<div>
	<form method="post" action="sortbrewery.php">
		<fieldset>
			<legend>Filter by Brewery</legend>
				<select name="brewery">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM brewery"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>				
				</select>
			</fieldset>
		<p><input type="submit" value="Filter" /></p>
	</form>
</div>

<div>
	<form method="post" action="sortregion.php">
		<fieldset>
			<legend>Filter by Region Available</legend>
				<select name="region">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM region"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>				
				</select>
			</fieldset>
		<p><input type="submit" value="Filter" /></p>
	</form>
</div>

<div>
	<form method="post" action="sortglassware.php">
		<fieldset>
			<legend>Filter by Glassware</legend>
				<select name="glassware">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM glassware"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>				
				</select>
			</fieldset>
		<p><input type="submit" value="Filter" /></p>
	</form>
</div>

<div>
	<form method="post" action="sortpairing.php">
		<fieldset>
			<legend>Filter by Food Pairing</legend>
				<select name="pairing">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM pairing"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>				
				</select>
			</fieldset>
		<p><input type="submit" value="Filter" /></p>
	</form>
</div>

<div>
	<form method="post" action="sorttemperature.php">
		<fieldset>
			<legend>Filter by Serving Temperature</legend>
				<select name="temperature">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM temperature"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>				
				</select>
			</fieldset>
		<p><input type="submit" value="Filter" /></p>
	</form>
</div>

<div>
	<form method="post" action="addbeer.php">
		<fieldset>
		<legend>Add Beer</legend>
			<p>Name: <input type="text" name ="Name" /></p>
			<p>Description: <input type="text" name ="Description" /></p>
			<p>Availability: <input type="text" name ="Availability" /></p>
			<p>ABV: <input type="text" name ="ABV" /></p>
			<legend>Style: </legend>
			<select name="Style">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM style"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>				
			</select>
			<legend>Brewery: </legend>
			<select name="Brewery">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM brewery"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>
			</select>
		</fieldset>
		<p>
			<input type="submit" />
		</p>
	</form>
</div>

<div>
	<form method="post" action="addstyle.php">
		<fieldset>
		<legend>Add Beer Style</legend>
			<p>Name: <input type="text" name ="Name" /></p>
			<p>Description: <input type="text" name ="Description" /></p>
			<legend>Glassware: </legend>
			<select name="Glassware">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM glassware"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>
			</select>
			<legend>Pairing: </legend>
			<select name="Pairing">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM pairing"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>
			</select>
			<legend>Temperature: </legend>
			<select name="Temperature">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM temperature"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>
			</select>
		</fieldset>
		<p><input type="submit" /></p>
	</form>
</div>

<div>
	<form method="post" action="addbrewery.php">
		<fieldset>
		<legend>Add Brewery</legend>
			<p>Name: <input type="text" name ="Name" /></p>
			<p>Address: <input type="text" name ="Address" /></p>
			<p>Phone Number: <input type="text" name ="PhoneNumber" /></p>
			<p>Website: <input type="text" name ="Website" /></p>
		</fieldset>
		<p><input type="submit" /></p>
	</form>
</div>

<div>
	<form method="post" action="addregion.php">
		<fieldset>
		<legend>Add New Region</legend>
			<p>Name: <input type="text" name ="Name" /></p>
		</fieldset>
		<p><input type="submit" /></p>
	</form>
</div>

<div>
	<form method="post" action="addglassware.php">
		<fieldset>
		<legend>Add Glassware</legend>
			<p>Name: <input type="text" name ="Name" /></p>
		</fieldset>
		<p><input type="submit" /></p>
	</form>
</div>

<div>
	<form method="post" action="addpairing.php">
		<fieldset>
		<legend>Add New Food</legend>
			<p>Name: <input type="text" name ="Name" /></p>
		</fieldset>
		<p><input type="submit" /></p>
	</form>
</div>

<div>
	<form method="post" action="addtemperature.php">
		<fieldset>
		<legend>Add New Temperature Range</legend>
			<p>Temperature Range: <input type="text" name ="TemperatureRange" /></p>
		</fieldset>
		<p><input type="submit" /></p>
	</form>
</div>

<div>
	<form method="post" action="addmarket.php">
		<fieldset>
		<legend>Add Beer to Market</legend>
		<legend>Beer</legend>
		<select name="Beer">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM beer"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>
	</select>
	<legend>Region</legend>
	<select name="Region">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM region"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>
		</select>
		</fieldset>
		<p><input type="submit" /></p>
	</form>
</div>

<div>
	<form method="post" action="deletebeer.php">
		<fieldset>
			<legend>Delete a Beer</legend>
				<select name="name">
<?php
if(!($stmt = $mysqli->prepare("SELECT id, name FROM beer"))){
	echo "Prepare failed: "  . $stmt->errno . " " . $stmt->error;
}

if(!$stmt->execute()){
	echo "Execute failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
if(!$stmt->bind_result($id, $pname)){
	echo "Bind failed: "  . $mysqli->connect_errno . " " . $mysqli->connect_error;
}
while($stmt->fetch()){
	echo '<option value=" '. $id . ' "> ' . $pname . '</option>\n';
}
$stmt->close();
?>				
				</select>
			</fieldset>
		<p><input type="submit" value="Delete" /></p>
	</form>
</div>

</body>
</html>