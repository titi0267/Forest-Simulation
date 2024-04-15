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
        break;
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
                "TreeNum" => $row["TreeNum"],
                "species" => $row["species"],
                "spgroup" => $row["spgroup"],
                "Diameter" => $row["Diameter"],
                "DiameterClass" => $row["DiameterClass"],
                "Height" => $row["Height"],
                "Volume" => $row["Volume"],
                "status" => $row["status"]
            ]
        );
    }
    return $trees;
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
                // $x = ($blockX - 1) * 100 + $locationx;
                // $y = ($blockY - 1) * 100 + $locationy;
                $treeId = "T" . ($blockX < 10 ? "0" . strval($blockX) : strval($blockX)) . ($blockY < 10 ? "0" . strval($blockY) : strval($blockY)) . ($x < 10 ? "0" . strval($x) : strval($x)) . ($y < 10 ? "0" . strval($y) : strval($y));
                $volume = 3.142 * ($diameter / 200) ** 2 * $height * 0.50;
                $status = "";
                if (in_array($group, [1, 2, 3, 5])) {
                    $status = ($diameter < 45) ? "Keep" : "Cut";
                }
                $sqlValues[] = "('$blockX', '$blockY', '$x', '$y', '$treeId', '$species', '$group', '" . round($diameter, 1) . "', '$diameterClass', '" . round($height, 1) . "', '$volume', '$status')";
                // array_push($TREES, ["x" => $x, "y" => $y, "species" => $species, "diameter" => round($diameter, 2)]);
            }
        }
    }
    $sqlValuesString = implode(", ", $sqlValues);
    $sql = "INSERT INTO `trees` (`BlockX`, `BlockY`, `x`, `y`, `TreeNum`, `species`, `spgroup`, `Diameter`, `DiameterClass`, `Height`, `Volume`, `status`)
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
?>
