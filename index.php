<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
include("DbConnect.php");

$db = new DbConnect();
$connection = $db->connect();
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        if ($_SERVER['REQUEST_URI'] === "/tree/generateforest/") {
            generate();
            $data = ['success' => true, 'message' => 'Generation succeeded !'];
            echo json_encode($data);    
        }
        break;
    case 'GET':
        if ($_SERVER['REQUEST_URI'] === "/tree/getforest/") {
            $trees = getforest();
            $data = ['success' => true, 'message' => $trees];
            echo json_encode($data);
        }
        if ($_SERVER['REQUEST_URI'] === "/tree/getStandtable/") {
            $standtable = getStandtable();
            $data = ['success' => true, 'message' => $standtable];
            echo json_encode($data);
        }
        if (strpos($_SERVER['REQUEST_URI'], "/tree/getTreesInBlock/") !== false) {
            $parts = explode("/", $_SERVER['REQUEST_URI']);
            $blockX = $parts[3];
            $blockY = $parts[4];
            $trees = getTreesInBlock($blockX, $blockY);
            $data = ['success' => true, 'message' => $trees];
            echo json_encode($data);
        }
        break;
}

if (array_key_exists('calculate', $_POST)) { 
    calculate_volume();
} 

function getStandtable()
{
    global $connection;
    $sql = "SELECT * FROM StandTable";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $standtable = array();
    while ($row = $result->fetch()) {
        array_push($standtable,
            [
                "GroupName" => $row["GroupName"],
                "Diameter" => $row["Diameter"],
                "Volume" => $row["Volume"],
                "Num" => $row["Num"],
            ]
        );
    }
    return $standtable;
}

function getforest()
{
    global $connection;
    $sql = "SELECT * FROM trees";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $trees = array();
    while ($row = $result->fetch()) {
        array_push($trees,
            [
                "BlockX" => $row["BlockX"],
                "BlockY" => $row["BlockY"],
                "x" => $row["x"],
                "y" => $row["y"],
                "RealX" => $row["RealX"],
                "RealY" => $row["RealY"],
                "TreeNum" => $row["TreeNum"],
                "species" => $row["species"],
                "spgroup" => $row["spgroup"],
                "Diameter" => $row["Diameter"],
                "DiameterClass" => $row["DiameterClass"],
                "Height" => $row["Height"],
                "Volume" => $row["Volume"],
                "status" => $row["status"],
                "PROD" => $row["PROD"],
                "CutAngle" => $row["CutAngle"],
                "DamageSTEM" => $row["DamageSTEM"],
                "DamageCROWN" => $row["DamageCROWN"],
                "GrowthD30" => $row["GrowthD30"],
                "Volume30" => $row["Volume30"],
            ]
        );
    }
    return $trees;
}

function getTreesInBlock($blockX, $blockY) {
    global $connection;
    $sql = "SELECT * FROM trees WHERE BlockX = :blockX AND BlockY = :blockY";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':blockX', $blockX);
    $stmt->bindParam(':blockY', $blockY);
    $stmt->execute();
    
    $trees = array();
    while ($row = $stmt->fetch()) {
        $trees[] = array(
            "BlockX" => $row["BlockX"],
            "BlockY" => $row["BlockY"],
            "x" => $row["x"],
            "y" => $row["y"],
            "TreeNum" => $row["TreeNum"],
            "species" => $row["species"],
            "spgroup" => $row["spgroup"],
            "Diameter" => $row["Diameter"],
            "DiameterClass" => $row["DiameterClass"],
            "Height" => $row["Height"],
            "Volume" => $row["Volume"],
            "status" => $row["status"]
        );
    }
    return $trees;
}

function insert_stand_table_to_database($STAND_TABLE)
{
    global $connection;

    foreach ($STAND_TABLE as $groupName => $diameterClasses) {
        foreach ($diameterClasses as $diameter => $data) {
            $volume = $data["Volume"];
            $num = $data["Num"];
            $sqlValues[] = "('$groupName', '$diameter', '$volume', '$num')";
        }
    }
    $sqlValuesString = implode(", ", $sqlValues);
    $sql = "INSERT INTO `StandTable` (`GroupName`, `Diameter`, `Volume`, `Num`)
                VALUES $sqlValuesString";
    $connection->query($sql);
}

function create_stand_table()
{
    $STAND_TABLE = [];
    $group = array(1 => "Mersawa", 2 => "Keruing", 3 => "Dip Commercial", 4 => "Dip NonCommercial",
        5 => "NonDip Commercial", 6 => "NonDip NonCommercial", 7 => "Others");

    for ($spgroup = 1; $spgroup <= 7; $spgroup++) {
        for ($diameter = 1; $diameter <= 5; $diameter++) {
            $STAND_TABLE[$group[$spgroup]][$diameter] = ["Volume" => 0, "Num" => 0];
        }
    }

    global $connection;
    $sql = "SELECT * FROM trees";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }

    while ($row = $result->fetch()) {
        $speciesGroup = $row["spgroup"];
        $diameterClass = $row["DiameterClass"];
        $volume = $row["Volume"];
        $STAND_TABLE[$group[$speciesGroup]][$diameterClass]["Volume"] += $volume;
        $STAND_TABLE[$group[$speciesGroup]][$diameterClass]["Num"] += 1;
    }
    insert_stand_table_to_database($STAND_TABLE);
}

$TREES = array();
function generate()
{
    global $connection;
    global $TREES;
    clear_trees();
    $sql = "SELECT * FROM tableName";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $SPECIES_TABLE = array(1 => [], 2 => [], 3 => [], 4 => [], 5 => [], 6 => [], 7 => []);
    while ($row = $result->fetch()) {
        $speciesGroup = $row["Species_Group"];
        array_push($SPECIES_TABLE[$speciesGroup], array(
            "Species_Code" => $row["Species_Code"],
            "Local_Name" => $row["Local_Name"],
            "Species_Group" => $speciesGroup,
            "Roy_Class" => $row["Roy_Class"],
            "Comm_Group" => $row["Comm_Group"],
            "Dip_NonDip" => $row["Dip_NonDip"],
        ));
    }
    $sql = "SELECT * FROM SpeciesGroup";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $SPECIES_GROUP = array(1 => [], 2 => [], 3 => [], 4 => [], 5 => [], 6 => [], 7 => []);
    while ($row = $result->fetch()) {
        $groupId = $row["groupId"];
        array_push($SPECIES_GROUP[$groupId], array(
            "groupId" => $groupId,
            "diameterMin" => $row["diameterMin"],
            "diameterMax" => $row["diameterMax"],
            "denstity" => $row["denstity"],
        ));
    }
    $NoBlockX = 10;
    $NoBlockY = 10;
    for ($blockX = 1; $blockX <= $NoBlockX; $blockX++) {
        for ($blockY = 1; $blockY <= $NoBlockY; $blockY++) {
            create_tree($blockX, $blockY, $SPECIES_TABLE, $SPECIES_GROUP);
        }
    }
    create_stand_table();
    // calculate_volume();
}

function victim_due_to_crown($cutting_angle, $height, $x0, $y0)
{
    $x = ($height + 5) * sin($cutting_angle / 180 * 3.142);
    $x1 = $x + $x0;

    $y = ($height + 5) * cos($cutting_angle / 180 * 3.142);
    $y1 = $y0 - $y;

    global $connection;
    $sql = "SELECT id, RealX, RealY, Volume FROM trees WHERE status != 'Cut' AND status != 'Victim' AND SQRT(POWER($x1 - RealX, 2) + POWER($y1 - RealY, 2)) <= 5";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }

    $totalVolume = 0;
    $updateSQL = [];

    while ($row = $result->fetch()) {
        $id = $row["id"];
        $volume = $row["Volume"];
        $totalVolume += $volume;
        $updateSQL[] = "UPDATE `trees` SET `status`='Victim',`DamageCROWN`='$volume' WHERE id='$id'";
    }
    if (!empty($updateSQL)) {
        $combinedUpdateSQL = implode("; ", $updateSQL);
        $connection->query($combinedUpdateSQL);
    }
    return $totalVolume;
}

function calculate_volume()
{
    global $connection;
    $sql = "SELECT id, Height, RealX, RealY FROM trees WHERE trees.status='Cut'";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $updateSQL = [];

    while ($row = $result->fetch()) {
        $id = $row["id"];
        $cutting_angle = rand(0, 360);
        $height = $row["Height"];
        $RealX = $row["RealX"];
        $RealY = $row["RealY"];
        $damageCrown = victim_due_to_crown($cutting_angle, $height, $RealX, $RealY);
        if ($damageCrown != 0) {
            $updateSQL[] = "UPDATE `trees` SET `CutAngle`='$cutting_angle', `DamageCROWN`='$damageCrown' WHERE id='$id'";
            break;
        }
    }
    if (!empty($updateSQL)) {
        $combinedUpdateSQL = implode("; ", $updateSQL);
        $connection->query($combinedUpdateSQL);
    }
}

function get_diameter_increment($diameter)
{
    $diameterClassMapping = [
        [5, 15, 0.4],
        [15, 30, 0.6],
        [30, 45, 0.5],
        [45, 60, 0.5],
        [60, 250, 0.7],
    ];

    foreach ($diameterClassMapping as $mapping) {
        if ($diameter >= $mapping[0] && $diameter < $mapping[1]) {
            return $mapping[2];
        }
    }
}

function get_diameter_after_30_years($diameter0)
{
    $diameter30 = $diameter0;

    for ($i = 0; $i < 30; $i++) {
        $increment = get_diameter_increment($diameter30);
        $diameter30 += $increment;
    }
    return $diameter30;
}

function get_volume_after_30_years($diameter30, $group)
{
    if (in_array($group, [1, 2, 3, 5])) {
        if ($diameter30 < 15) {
            $volume30 = 0.022 + 3.4 * ($diameter30 ** 2);
        } else {
            $volume30 = (-0.0971) + 9.503 * ($diameter30 ** 2);
        }
    } else {
        if ($diameter30 < 30) {
            $volume30 = 0.03 + 2.8 * ($diameter30 ** 2);
        } else {
            $volume30 = (-0.331) + 6.694 * ($diameter30 ** 2);
        }
    }
    return $volume30;
}

function create_tree($blockX, $blockY, $SPECIES_TABLE, $SPECIES_GROUP)
{
    global $connection;
    global $TREES;
    $NoGroupSpecies = 7;
    $NumDclass = 5;
    $diameterClass = 0;
    $diameterClassMapping = [
        [5, 15, 1],
        [15, 30, 2],
        [30, 45, 3],
        [45, 60, 4],
        [60, 250, 5],
    ];
    $sqlValues = [];
    for ($group = 1; $group <= $NoGroupSpecies; $group++) {
        for ($class = 0; $class < $NumDclass; $class++) {
            $density = $SPECIES_GROUP[$group][$class]["denstity"];
            for ($i = 0; $i < $density; $i++) {
                $random = rand(0, count($SPECIES_TABLE[$group]) - 1);
                $species = $SPECIES_TABLE[$group][$random]["Species_Code"];
                $diameter = rand($SPECIES_GROUP[$group][$class]["diameterMin"] * 100, $SPECIES_GROUP[$group][$class]["diameterMax"] * 100) / 100;
                foreach ($diameterClassMapping as $mapping) {
                    if ($diameter >= $mapping[0] && $diameter < $mapping[1]) {
                        $diameterClass = $mapping[2];
                        break;
                    }
                }
                $height = rand(10 * 100, 35 * 100) / 100;
                $locationx = rand(1, 99);
                $locationy = rand(1, 99);
                $x = $locationx;
                $y = $locationy;
                $realx = ($blockX - 1) * 100 + $locationx;
                $realy = ($blockY - 1) * 100 + $locationy;
                $treeId = "T" . ($blockX < 10 ? "0" . strval($blockX) : strval($blockX)) . ($blockY < 10 ? "0" . strval($blockY) : strval($blockY)) . ($x < 10 ? "0" . strval($x) : strval($x)) . ($y < 10 ? "0" . strval($y) : strval($y));
                $volume = 3.142 * ($diameter / 200) ** 2 * $height * 0.50;
                $status = "None";
                if (in_array($group, [1, 2, 3, 5])) {
                    $status = ($diameter < 45) ? "Keep" : "Cut";
                }
                $uuid = guidv4();
                $PROD = (float) 0;
                if ($status == "Cut") {
                    $PROD = $volume;
                }
                $diameter30 = get_diameter_after_30_years($diameter);
                $volume30   = get_volume_after_30_years($diameter30 / 100, $group);
                $zero = 0;
                $sqlValues[] = "('$uuid', '$blockX', '$blockY', '$x', '$y', '$realx', '$realy', '$treeId', '$species', '$group', '" . round($diameter, 1) . "', '$diameterClass', '" . round($height, 1) . "', '$volume', '$status', '$PROD', '$zero', '$zero', '$zero', '$diameter30', '$volume30')";
                // array_push($TREES, ["x" => $x, "y" => $y, "species" => $species, "diameter" => round($diameter, 2)]);
            }
        }
    }
    $sqlValuesString = implode(", ", $sqlValues);
    $sql = "INSERT INTO `trees` (`id`, `BlockX`, `BlockY`, `x`, `y`, `RealX`, `RealY`, `TreeNum`, `species`, `spgroup`, `Diameter`, `DiameterClass`, `Height`, `Volume`, `status`, `PROD`, `CutAngle`, `DamageSTEM`, `DamageCROWN`, `GrowthD30`, `Volume30`)
                VALUES $sqlValuesString";
    $connection->query($sql);
}

function clear_trees()
{
    global $connection;

    $sql = "DELETE FROM trees";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $sql = "DELETE FROM StandTable";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
}

function guidv4($data = null)
{
    $data = $data ?? random_bytes(16);
    assert(strlen($data) == 16);
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}
?>
