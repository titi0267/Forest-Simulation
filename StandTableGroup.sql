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
-- Structure de la table `StandTableGroup`
--

CREATE TABLE `StandTableGroup` (
  `SpeciesGroup` text NOT NULL,
  `5-15` text NOT NULL,
  `15-30` text NOT NULL,
  `30-45` text NOT NULL,
  `45-60` text NOT NULL,
  `60+` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `StandTableGroup`
--

INSERT INTO `StandTableGroup` (`SpeciesGroup`, `5-15`, `15-30`, `30-45`, `45-60`, `60+`) VALUES
('Mersawa', '142.56 | 1499', '559.64 | 1201', '503.75 | 400', '472.33 | 200', '4556.89 | 200'),
('Keruing', '200.13 | 2098', '828.87 | 1800', '742.35 | 602', '1007.52 | 399', '9602.77 | 401'),
('Dip Commercial', '196.81 | 2100', '853.95 | 1799', '758.6 | 601', '1013.51 | 399', '9099.72 | 401'),
('Dip NonCommercial', '286.03 | 2996', '1243.43 | 2704', '1159.69 | 899', '1236.4 | 500', '6950.47 | 301'),
('NonDip Commercial', '290.63 | 2995', '1242.89 | 2703', '1117.88 | 902', '1002.63 | 400', '9546.55 | 400'),
('NonDip NonCommercial', '365.78 | 3895', '1658.98 | 3605', '1527.42 | 1200', '1715.05 | 699', '9118.08 | 401'),
('Others', '420.02 | 4391', '1969.15 | 4203', '1776.21 | 1406', '2218.72 | 898', '9260.3 | 402');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
