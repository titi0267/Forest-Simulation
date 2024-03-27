<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tree generation</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
</head>

<body style="text-align:center;">
    <h1 style="color:green;">
        Tree generation
    </h1>

    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "tree";

        $connection = new mysqli($servername, $username, $password, $database);

        if ($connection->connect_error) {
            die("Connection failed: " . $connection->connect_error);
        }

        $TREES = array();

        if (array_key_exists('generate', $_POST)) {
            generate();
        }
        if (array_key_exists('clear', $_POST)) {
            clear();
        }
        function generate()
        {
            global $connection;
            global $TREES;

            $sql = "DELETE FROM trees";
            $result = $connection->query($sql);
    
            if (!$result) {
                die("Invalid query: " . $connection->error);
            }

            $sql = "SELECT * FROM tableName";
            $result = $connection->query($sql);
    
            if (!$result) {
                die("Invalid query: " . $connection->error);
            }

            $SPECIES_TABLE = array(1 => [], 2 => [], 3 => [], 4 => [], 5 => [], 6 => [], 7 => []);

            while ($row = $result->fetch_assoc()) {
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
                die("Invalid query: " . $connection->error);
            }

            $SPECIES_GROUP = array(1 => [], 2 => [], 3 => [], 4 => [], 5 => [], 6 => [], 7 => []);

            while ($row = $result->fetch_assoc()) {
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

            var_dump($TREES);
        }

        function create_tree($blockX, $blockY, $SPECIES_TABLE, $SPECIES_GROUP) {
            global $connection;
            global $TREES;

            $NoGroupSpecies = 7;
            $NumDclass = 5;

            for ($group = 1; $group <= $NoGroupSpecies; $group++) {
                for ($class = 0; $class < $NumDclass; $class++) {
                    $density = $SPECIES_GROUP[$group][$class]["denstity"];
                    for ($i = 0; $i < $density; $i++) {
                        $random = rand(0, count($SPECIES_TABLE[$group]) - 1);
                        $species = $SPECIES_TABLE[$group][$random]["Species_Code"];
                        $diameter = rand($SPECIES_GROUP[$group][$class]["diameterMin"] * 100, $SPECIES_GROUP[$group][$class]["diameterMax"] * 100) / 100;
                        $height = rand(10 * 100, 35 * 100) / 100;
                        $locationx = rand(1, 100);
                        $locationy = rand(1, 100);
                        $x = ($blockX - 1) * 100 + $locationx;
                        $y = ($blockY - 1) * 100 + $locationy;
                        $treeId = "T" . ($blockX < 10 ? "0" . strval($blockX) : strval($blockX)) . ($blockY < 10 ? "0" . strval($blockY) : strval($blockY)) . ($x < 10 ? "0" . strval($x) : strval($x)) . ($y < 10 ? "0" . strval($y) : strval($y));
                        $sql = "INSERT INTO `trees` (`BlockX`, `BlockY`, `x`, `y`, `TreeNum`, `species`, `diameter`, `height`) VALUES ('$blockX', '$blockY', '$x', '$y', '$treeId', '$species', '$diameter', '$height')";
                        $connection->query($sql);
                        array_push($TREES, ["x" => $x, "y" => $y, "species" => $species, "diameter" => round($diameter, 2)]);
                    }
                }
            }
        }
        function clear()
        {
            echo "This is Clear that is selected";
        }
    ?>

    <form method="post">
        <button type="submit" name="generate">GENERATE DATA</button>
        <button type="submit" name="clear">CLEAR DATA</button>
    </form>
</body>

</html>