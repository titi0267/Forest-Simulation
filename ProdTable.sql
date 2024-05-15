-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 15 mai 2024 à 11:29
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tree`
--

-- --------------------------------------------------------

--
-- Structure de la table `ProdTable`
--

CREATE TABLE `ProdTable` (
  `SpeciesGroup` text NOT NULL,
  `Volume` float NOT NULL,
  `Number` int(11) NOT NULL,
  `Production0` int(11) NOT NULL,
  `Damage` float NOT NULL,
  `Growth30` float NOT NULL,
  `Production30` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ProdTable`
--

INSERT INTO `ProdTable` (`SpeciesGroup`, `Volume`, `Number`, `Production0`, `Damage`, `Growth30`, `Production30`) VALUES
('Mersawa', 6235.17, 3500, 400, 6885.02, 3936.34, 2239),
('Keruing', 12381.6, 5300, 800, 20303, 7393.17, 3442),
('Dip Commercial', 11922.6, 5300, 800, 17373.7, 7209.72, 3372),
('Dip NonCommercial', 10876, 7400, 0, 10303.7, 6106.77, 0),
('NonDip Commercial', 13200.6, 7400, 800, 19066.8, 8317.03, 4591),
('NonDip NonCommercial', 14385.3, 9800, 0, 13214.5, 8092.74, 0),
('Others', 15644.4, 11300, 0, 15858.8, 8892.42, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
