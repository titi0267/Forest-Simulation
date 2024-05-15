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
        if (str_starts_with($_SERVER['REQUEST_URI'], "/tree/getTree/") === true) {
            $l = explode("/", $_SERVER['REQUEST_URI']);
            $id = $l[count($l) - 1];
            $tree = getTree($id);
            $data = ['success' => true, 'message' => $tree];
            echo json_encode($data);
        }
        if ($_SERVER['REQUEST_URI'] === "/tree/getStandtableGroup/") {
            $standtable = getStandtableGroup();
            $data = ['success' => true, 'message' => $standtable];
            echo json_encode($data);
        }
        if ($_SERVER['REQUEST_URI'] === "/tree/getProdtable/") {
            $prodtable = getProdtable();
            $data = ['success' => true, 'message' => $prodtable];
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

function getStandtableGroup()
{
    global $connection;
    $sql = "SELECT SpeciesGroup, `5-15`, `15-30`, `30-45`, `45-60`, `60+` FROM StandTableGroup";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }

    $standtable = array();
    while ($row = $result->fetch()) {
        array_push(
            $standtable,
            [
                "SpeciesGroup" => $row["SpeciesGroup"],
                "5-15" => $row["5-15"],
                "15-30" => $row["15-30"],
                "30-45" => $row["30-45"],
                "45-60" => $row["45-60"],
                "60+" => $row["60+"],
            ]
        );
    }
    return $standtable;
}

function getProdtable()
{
    global $connection;
    $sql = "SELECT SpeciesGroup, Volume, Number, Production0, Damage, Growth30, Production30 FROM ProdTable";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $prodtable = array();
    while ($row = $result->fetch()) {
        array_push(
            $prodtable,
            [
                "SpeciesGroup" => $row["SpeciesGroup"],
                "Volume" => $row["Volume"],
                "Number" => $row["Number"],
                "Production0" => $row["Production0"],
                "Damage" => $row["Damage"],
                "Growth30" => $row["Growth30"],
                "Production30" => $row["Production30"],
            ]
        );
    }
    return $prodtable;
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
        array_push(
            $trees,
            [
                "id" => $row["id"],
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

function getTree($id)
{
    global $connection;
    $sql = "SELECT * FROM trees WHERE id='$id'";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $row = $result->fetch();
    $tree = [
        "id" => $row["id"],
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
    ];
    return $tree;
}

function getTreesInBlock($blockX, $blockY)
{
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

function insert_stand_table_to_database($STAND_TABLE, $INFO)
{
    global $connection;

    $dclass = array(
        1 => "5-15", 2 => "15-30", 3 => "30-45",
        4 => "45-60", 5 => "60+",
    );

    foreach ($INFO as $groupName => $diameterClasses) {
        foreach ($diameterClasses as $diameter => $data) {
            $volume = round($data["Volume"], 2);
            $num = $data["Num"];
            $STAND_TABLE[$groupName][$dclass[$diameter]] = "$volume | $num";
        }
    }

    foreach ($STAND_TABLE as $groupName => $data) {
        $diameter1 = $data["5-15"];
        $diameter2 = $data["15-30"];
        $diameter3 = $data["30-45"];
        $diameter4 = $data["45-60"];
        $diameter5 = $data["60+"];
        $sqlValues[] = "('$groupName', '$diameter1', '$diameter2', '$diameter3', '$diameter4', '$diameter5')";
    }

    $sqlValuesString = implode(", ", $sqlValues);
    $sql = "INSERT INTO `StandTableGroup` (`SpeciesGroup`, `5-15`, `15-30`, `30-45`, `45-60`, `60+`)
                VALUES $sqlValuesString";
    $connection->query($sql);
}

function create_stand_table_group()
{
    $STAND_TABLE = [];
    $INFO        = [];

    $group = array(
        1 => "Mersawa", 2 => "Keruing", 3 => "Dip Commercial", 4 => "Dip NonCommercial",
        5 => "NonDip Commercial", 6 => "NonDip NonCommercial", 7 => "Others"
    );

    for ($spgroup = 1; $spgroup <= 7; $spgroup++) {
        $STAND_TABLE[$group[$spgroup]] = [
            "5-15" => "",
            "15-30" => "",
            "30-45" => "",
            "45-60" => "",
            "60+" => "",
        ];
        for ($class = 1; $class <= 5; $class++) {
            $INFO[$group[$spgroup]][$class] = [
                "Volume" => 0,
                "Number" => 0,
            ];
        }
    }

    global $connection;
    $sql = "SELECT spgroup, DiameterClass, Volume FROM trees";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }

    while ($row = $result->fetch()) {
        $speciesGroup = $row["spgroup"];
        $class = $row["DiameterClass"];
        $volume = $row["Volume"];
        $INFO[$group[$speciesGroup]][$class]["Volume"] += $volume;
        $INFO[$group[$speciesGroup]][$class]["Num"] += 1;
    }
    insert_stand_table_to_database($STAND_TABLE, $INFO);
}

function insert_production_table_to_database($PROD_TABLE)
{
    global $connection;

    foreach ($PROD_TABLE as $key => $value) {
        $volume = $value["Volume"];
        $number = $value["Number"];
        $prod0 = $value["Production0"];
        $damage = $value["Damage"];
        $growth30 = $value["Growth30"];
        $prod30 = $value["Production30"];
        $sqlValues[] = "('$key', '$volume', '$number', '$prod0', '$damage', '$growth30', '$prod30')";
    }
    $sqlValuesString = implode(", ", $sqlValues);
    $sql = "INSERT INTO `ProdTable` (`SpeciesGroup`, `Volume`, `Number`, `Production0`, `Damage`, `Growth30`, `Production30`)
                VALUES $sqlValuesString";
    $connection->query($sql);
}

function create_production_table()
{
    $PROD_TABLE = [];
    $group = array(
        1 => "Mersawa", 2 => "Keruing", 3 => "Dip Commercial", 4 => "Dip NonCommercial",
        5 => "NonDip Commercial", 6 => "NonDip NonCommercial", 7 => "Others"
    );

    for ($spgroup = 1; $spgroup <= 7; $spgroup++) {
        $PROD_TABLE[$group[$spgroup]] = [
            "Volume" => 0, "Number" => 0, "Production0" => 0,
            "Damage" => 0, "Growth30" => 0, "Production30" => 0];
    }

    global $connection;
    $sql = "SELECT spgroup, Volume, status, DamageSTEM, DamageCROWN, GrowthD30, Volume30 FROM trees";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }

    while ($row = $result->fetch()) {
        $speciesGroup = $row["spgroup"];
        $volume = $row["Volume"];
        $status = $row["status"];
        $damageStem = $row["DamageSTEM"];
        $damageCrown = $row["DamageCROWN"];
        $diameter30 = $row["GrowthD30"];
        $volume30 = $row["Volume30"];
        $PROD_TABLE[$group[$speciesGroup]]["Volume"] += $volume;
        $PROD_TABLE[$group[$speciesGroup]]["Number"] += 1;
        if ($status == "Cut") {
            $PROD_TABLE[$group[$speciesGroup]]["Production0"] += 1;
        }
        $PROD_TABLE[$group[$speciesGroup]]["Damage"] += $damageStem;
        $PROD_TABLE[$group[$speciesGroup]]["Damage"] += $damageCrown;
        $PROD_TABLE[$group[$speciesGroup]]["Growth30"] += $volume30;
        if (in_array($speciesGroup, [1, 2, 3, 5]) && ($status == "Victim" || $diameter30 >= 45)) {
            $PROD_TABLE[$group[$speciesGroup]]["Production30"] += 1;
        }
    }
    insert_production_table_to_database($PROD_TABLE);
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
    create_stand_table_group();
    // calculate_volume();
    // create_production_table();
}

function update_victims_due_to_crown()
{
    global $connection;

    $sql = "INSERT INTO DamageTrees (Cut_ID, Victim_ID, CategoryDamage)
            SELECT new_positions.cutter_id, t.id, 2
            FROM trees AS t
            JOIN (
                SELECT id AS cutter_id, Height, RealX, RealY, CutAngle,
                       (Height + 5) * SIN(RADIANS(CutAngle)) + RealX AS x1,
                       RealY - (Height + 5) * COS(RADIANS(CutAngle)) AS y1
                FROM trees 
                WHERE status = 'Cut'
            ) AS new_positions
            ON SQRT(POWER(new_positions.x1 - t.RealX, 2) + POWER(new_positions.y1 - t.RealY, 2)) <= 5
            WHERE t.status NOT IN ('Cut', 'Victim')";
    
    $connection->query($sql);

    $sql = "UPDATE trees
            SET status = 'Victim', DamageCROWN = Volume
            WHERE id IN (
                SELECT Victim_ID
                FROM DamageTrees
            )";
    $connection->query($sql);
}

function update_cut_trees_damage_crown()
{
    global $connection;

    $sql = "INSERT INTO trees (id, DamageCROWN)
            SELECT cutter.id, SUM(victim.Volume)
            FROM trees AS cutter
            JOIN DamageTrees AS dt ON dt.Cut_ID = cutter.id
            JOIN trees AS victim ON victim.id = dt.Victim_ID
            GROUP BY cutter.id
            ON DUPLICATE KEY UPDATE DamageCROWN = VALUES(DamageCROWN)";
    
    $connection->query($sql);
}

function calculate_volume()
{
    global $connection;
    $connection->beginTransaction();

    // try {
    //     update_victims_due_to_stem();
    // } catch (Exception $e) {
    //     $connection->rollBack();
    //     throw $e;
    // }
    update_victims_due_to_crown();
    update_cut_trees_damage_crown();

    $connection->commit();
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
                $cutID = "";
                $PROD = (float) 0;
                $cutting_angle = 0;
                if ($status == "Cut") {
                    $PROD = $volume;
                    $cutting_angle = rand(0, 360);
                }
                $diameter30 = get_diameter_after_30_years($diameter);
                $volume30   = get_volume_after_30_years($diameter30 / 100, $group);
                $zero = 0;
                $sqlValues[] = "('$blockX', '$blockY', '$x', '$y', '$realx', '$realy', '$treeId', '$species', '$group', '" . round($diameter, 1) . "', '$diameterClass', '" . round($height, 1) . "', '$volume', '$status', '$cutID', '$PROD', '$cutting_angle', '$zero', '$diameter30', '$volume30')";
            }
        }
    }
    $sqlValuesString = implode(", ", $sqlValues);
    $sql = "INSERT INTO `trees` (`BlockX`, `BlockY`, `x`, `y`, `RealX`, `RealY`, `TreeNum`, `species`, `spgroup`, `Diameter`, `DiameterClass`, `Height`, `Volume`, `status`, `CutID`, `PROD`, `CutAngle`, `DamageSTEM`, `GrowthD30`, `Volume30`)
                VALUES $sqlValuesString";
    $connection->query($sql);
}

function clear_trees()
{
    global $connection;

    $sql = "DELETE FROM DamageTrees";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $sql = "DELETE FROM trees";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $sql = "DELETE FROM StandTableGroup";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $sql = "DELETE FROM ProdTable";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
}
?>
