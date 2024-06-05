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
        if (str_starts_with($_SERVER['REQUEST_URI'], "/tree/getStandTable/") === true) {
            $l = explode("/", $_SERVER['REQUEST_URI']);
            $table = $l[count($l) - 1];
            $standtable = get_stand_table($table);
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
            [$trees, $damages] = getTreesInBlock($blockX, $blockY);
            $data = ['success' => true, 'message' => $trees, 'damages' => $damages];
            echo json_encode($data);
        }
        break;
}

function getProdtable()
{
    global $connection;
    $sql = "SELECT SpeciesGroup, Volume, Number, Production0, Damage, Growth30, Production30 FROM prod_tables";
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
            "id" => $row["id"],
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

    $sql = "SELECT * FROM `DamageTrees`";
    $damages = array();

    while ($row = $stmt->fetch()) {
        $damages[] = array(
            "Cut_ID" => $row["Cut_ID"],
            "Victim_ID" => $row["Victim_ID"],
            "CategoryDamage" => $row["CategoryDamage"],
        );
    }

    return [$trees, $damages];
}

function create_stand_table($group)
{
    $INFO = [];

    for ($spgroup = 1; $spgroup <= 7; $spgroup++) {
        for ($class = 1; $class <= 5; $class++) {
            $INFO[$group[$spgroup]][$class] = [
                "Volume" => 0,
                "Number" => 0,
                "Production0" => 0,
                "Damage" => 0,
                "Growth30" => 0,
                "Production30" => 0,
            ];
        }
    }

    global $connection;
    $sql = "SELECT spgroup, DiameterClass, Volume, `status`, DamageSTEM, DamageCROWN, GrowthD30, Volume30 FROM trees";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }

    while ($row = $result->fetch()) {
        $speciesGroup = $row["spgroup"];
        $class = $row["DiameterClass"];
        $volume = $row["Volume"];
        $status = $row["status"];
        $damageStem = $row["DamageSTEM"] ?? 0;
        $damageCrown = $row["DamageCROWN"] ?? 0;
        $diameter30 = $row["GrowthD30"] ?? 0;
        $volume30 = $row["Volume30"] ?? 0;
        $INFO[$group[$speciesGroup]][$class]["Volume"] += $volume;
        $INFO[$group[$speciesGroup]][$class]["Number"] += 1;
        if ($status == "Cut") {
            $INFO[$group[$speciesGroup]][$class]["Production0"] += 1;
        }
        $INFO[$group[$speciesGroup]][$class]["Damage"] += $damageStem;
        $INFO[$group[$speciesGroup]][$class]["Damage"] += $damageCrown;
        $INFO[$group[$speciesGroup]][$class]["Growth30"] += $volume30;
        if (in_array($speciesGroup, [1, 2, 3, 5]) && ($status == "Victim" || $diameter30 >= 45)) {
            $INFO[$group[$speciesGroup]][$class]["Production30"] += 1;
        }
    }
    return $INFO;
}

function get_stand_table($table)
{
    $group = array(
        1 => "Mersawa", 2 => "Keruing", 3 => "Dip Commercial", 4 => "Dip NonCommercial",
        5 => "NonDip Commercial", 6 => "NonDip NonCommercial", 7 => "Others"
    );

    $INFO = create_stand_table($group);
    $STAND_TABLE = [];

    $dclass = array(
        1 => "5-15", 2 => "15-30", 3 => "30-45",
        4 => "45-60", 5 => "60+",
    );

    foreach ($group as $key => $value) {
        array_push(
            $STAND_TABLE, [
                "SpeciesGroup" => $value,
                "5-15" =>  $INFO[$value][1][$table],
                "15-30" => $INFO[$value][2][$table],
                "30-45" => $INFO[$value][3][$table],
                "45-60" => $INFO[$value][4][$table],
                "60+"  =>  $INFO[$value][5][$table],
            ]
        );
    }

    return $STAND_TABLE;
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
    $sql = "INSERT INTO `prod_tables` (`SpeciesGroup`, `Volume`, `Number`, `Production0`, `Damage`, `Growth30`, `Production30`)
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
    calculate_volume();
    create_production_table();
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

    $sql = "INSERT INTO trees (id, DamageCROWN)
            SELECT cutter.id, SUM(victim.Volume)
            FROM trees AS cutter
            JOIN DamageTrees AS dt ON dt.Cut_ID = cutter.id
            JOIN trees AS victim ON victim.id = dt.Victim_ID
            GROUP BY cutter.id
            ON DUPLICATE KEY UPDATE DamageCROWN = VALUES(DamageCROWN)";

    $connection->query($sql);
}

function update_victims_due_to_stem()
{
    global $connection;

    $sql = "INSERT INTO DamageTrees (Cut_ID, Victim_ID, CategoryDamage)
            SELECT new_positions.cutter_id, t.id, 1
            FROM trees AS t
            JOIN (
                SELECT id AS cutter_id, Height, RealX, RealY, CutAngle,
                       TAN(RADIANS(CutAngle + 1)) + 0.0001 AS tan_plus,
                       TAN(RADIANS(CutAngle - 1)) + 0.0001 AS tan_minus,
                       RealX AS x0, RealY AS y0,
                       CASE WHEN (CutAngle >= 0 AND CutAngle < 90) OR (CutAngle > 270 AND CutAngle <= 360)
                            THEN 1 ELSE -1 END AS direction
                FROM trees 
                WHERE status = 'Cut'
            ) AS new_positions
            ON t.status NOT IN ('Cut', 'Victim')
            AND (new_positions.direction * (new_positions.x0 + new_positions.Height + 10)) > t.RealX
            AND (new_positions.direction * (new_positions.x0)) < t.RealX
            AND (t.RealY > (t.RealX / new_positions.tan_plus) AND t.RealY < (t.RealX / new_positions.tan_minus))";
    $connection->query($sql);

    $sql = "UPDATE trees
            SET status = 'Victim', DamageSTEM = Volume
            WHERE id IN (
                SELECT Victim_ID
                FROM DamageTrees
            )";
    $connection->query($sql);

    $sql = "INSERT INTO trees (id, DamageSTEM)
            SELECT cutter.id, SUM(victim.Volume)
            FROM trees AS cutter
            JOIN DamageTrees AS dt ON dt.Cut_ID = cutter.id
            JOIN trees AS victim ON victim.id = dt.Victim_ID
            GROUP BY cutter.id
            ON DUPLICATE KEY UPDATE DamageSTEM = VALUES(DamageSTEM)";
    
    $connection->query($sql);
}

function calculate_volume()
{
    global $connection;
    $connection->beginTransaction();

    update_victims_due_to_stem();
    update_victims_due_to_crown();

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
    $heightMap = [
        1 => [250, 550],
        2 => [550, 1500],
        3 => [1500, 2500],
        4 => [2000, 4000],
        5 => [2000, 4000],
    ];
    $sqlValues = [];
    for ($group = 1; $group <= $NoGroupSpecies; $group++) {
        for ($class = 0; $class < $NumDclass; $class++) {
            $density = $SPECIES_GROUP[$group][$class]["denstity"];
            for ($i = 0; $i < $density; $i++) {
                $random = mt_rand(0, count($SPECIES_TABLE[$group]) - 1);
                $species = $SPECIES_TABLE[$group][$random]["Species_Code"];
                $diameter = mt_rand($SPECIES_GROUP[$group][$class]["diameterMin"] * 100, $SPECIES_GROUP[$group][$class]["diameterMax"] * 100) / 100;
                foreach ($diameterClassMapping as $mapping) {
                    if ($diameter >= $mapping[0] && $diameter < $mapping[1]) {
                        $diameterClass = $mapping[2];
                        break;
                    }
                }
                $map = $heightMap[$class + 1];
                $height = mt_rand($map[0] / 100, $map[1] / 100) / 100;
                $locationx = mt_rand(1, 99);
                $locationy = mt_rand(1, 99);
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
                    $cutting_angle = mt_rand(0, 360);
                }
                $diameter30 = get_diameter_after_30_years($diameter);
                $volume30   = get_volume_after_30_years($diameter30 / 100, $group);
                $sqlValues[] = "('$blockX', '$blockY', '$x', '$y', '$realx', '$realy', '$treeId', '$species', '$group', '" . round($diameter, 1) . "', '$diameterClass', '" . round($height, 1) . "', '$volume', '$status', '$cutID', '$PROD', '$cutting_angle', '$diameter30', '$volume30')";
            }
        }
    }
    $sqlValuesString = implode(", ", $sqlValues);
    $sql = "INSERT INTO `trees` (`BlockX`, `BlockY`, `x`, `y`, `RealX`, `RealY`, `TreeNum`, `species`, `spgroup`, `Diameter`, `DiameterClass`, `Height`, `Volume`, `status`, `CutID`, `PROD`, `CutAngle`, `GrowthD30`, `Volume30`)
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
    $sql = "DELETE FROM stand_table_groups";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
    $sql = "DELETE FROM prod_tables";
    $result = $connection->query($sql);
    if (!$result) {
        die("Invalid query: " . $connection->errorInfo());
    }
}
?>
