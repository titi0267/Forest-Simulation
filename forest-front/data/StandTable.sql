-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 15 avr. 2024 à 18:42
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
-- Structure de la table `StandTable`
--

CREATE TABLE `StandTable` (
  `GroupName` text NOT NULL,
  `Diameter` float NOT NULL,
  `Volume` float NOT NULL,
  `Num` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `StandTable`
--

INSERT INTO `StandTable` (`GroupName`, `Diameter`, `Volume`, `Num`) VALUES
('Mersawa', 1, 142.227, 1500),
('Mersawa', 2, 567.535, 1199),
('Mersawa', 3, 504.684, 401),
('Mersawa', 4, 497.459, 200),
('Mersawa', 5, 4841.69, 200),
('Keruing', 1, 204.283, 2097),
('Keruing', 2, 844.209, 1800),
('Keruing', 3, 761.486, 603),
('Keruing', 4, 978.306, 399),
('Keruing', 5, 9422.33, 401),
('Dip Commercial', 1, 200.696, 2099),
('Dip Commercial', 2, 826.005, 1799),
('Dip Commercial', 3, 765.434, 600),
('Dip Commercial', 4, 973.393, 401),
('Dip Commercial', 5, 10296.1, 401),
('Dip NonCommercial', 1, 291.047, 2996),
('Dip NonCommercial', 2, 1239.02, 2703),
('Dip NonCommercial', 3, 1116.08, 901),
('Dip NonCommercial', 4, 1210.3, 500),
('Dip NonCommercial', 5, 8021.95, 300),
('NonDip Commercial', 1, 287.639, 2997),
('NonDip Commercial', 2, 1245.22, 2701),
('NonDip Commercial', 3, 1118.85, 901),
('NonDip Commercial', 4, 962.509, 400),
('NonDip Commercial', 5, 9559.91, 401),
('NonDip NonCommercial', 1, 373.975, 3899),
('NonDip NonCommercial', 2, 1679.33, 3596),
('NonDip NonCommercial', 3, 1505.13, 1204),
('NonDip NonCommercial', 4, 1749.67, 701),
('NonDip NonCommercial', 5, 10244.2, 400),
('Others', 1, 422.869, 4396),
('Others', 2, 1932.79, 4201),
('Others', 3, 1787.85, 1403),
('Others', 4, 2187.53, 899),
('Others', 5, 9646.34, 401);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
