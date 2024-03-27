-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 27 mars 2024 à 09:03
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
-- Structure de la table `SpeciesGroup`
--

CREATE TABLE `SpeciesGroup` (
  `id` int(11) NOT NULL,
  `groupId` int(11) DEFAULT NULL,
  `groupName` varchar(255) DEFAULT NULL,
  `diameterMin` int(11) DEFAULT NULL,
  `diameterMax` int(11) DEFAULT NULL,
  `denstity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `SpeciesGroup`
--

INSERT INTO `SpeciesGroup` (`id`, `groupId`, `groupName`, `diameterMin`, `diameterMax`, `denstity`) VALUES
(1, 1, 'Mersawa', 5, 15, 15),
(2, 1, 'Mersawa', 15, 30, 12),
(3, 1, 'Mersawa', 30, 45, 4),
(4, 1, 'Mersawa', 45, 60, 2),
(5, 1, 'Mersawa', 60, 200, 2),
(6, 2, 'Keruing', 5, 15, 21),
(7, 2, 'Keruing', 15, 30, 18),
(8, 2, 'Keruing', 30, 45, 6),
(9, 2, 'Keruing', 45, 60, 4),
(10, 2, 'Keruing', 60, 200, 4),
(11, 3, 'Dip Commercial', 5, 15, 21),
(12, 3, 'Dip Commercial', 15, 30, 18),
(13, 3, 'Dip Commercial', 30, 45, 6),
(14, 3, 'Dip Commercial', 45, 60, 4),
(15, 3, 'Dip Commercial', 60, 200, 4),
(16, 4, 'Dip NonCommercial', 5, 15, 30),
(17, 4, 'Dip NonCommercial', 15, 30, 27),
(18, 4, 'Dip NonCommercial', 30, 45, 9),
(19, 4, 'Dip NonCommercial', 45, 60, 5),
(20, 4, 'Dip NonCommercial', 60, 200, 3),
(21, 5, 'NonDip Commercial', 5, 15, 30),
(22, 5, 'NonDip Commercial', 15, 30, 27),
(23, 5, 'NonDip Commercial', 30, 45, 9),
(24, 5, 'NonDip Commercial', 45, 60, 4),
(25, 5, 'NonDip Commercial', 60, 200, 4),
(26, 6, 'NonDip NonCommercial', 5, 15, 39),
(27, 6, 'NonDip NonCommercial', 15, 30, 36),
(28, 6, 'NonDip NonCommercial', 30, 45, 12),
(29, 6, 'NonDip NonCommercial', 45, 60, 7),
(30, 6, 'NonDip NonCommercial', 60, 200, 4),
(31, 7, 'Others', 5, 15, 44),
(32, 7, 'Others', 15, 30, 42),
(33, 7, 'Others', 30, 45, 14),
(34, 7, 'Others', 45, 60, 9),
(35, 7, 'Others', 60, 200, 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `SpeciesGroup`
--
ALTER TABLE `SpeciesGroup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `SpeciesGroup`
--
ALTER TABLE `SpeciesGroup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
