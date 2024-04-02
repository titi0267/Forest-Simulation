-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 02 avr. 2024 à 17:09
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
(36, 1, 'Mersawa', 5, 15, 15),
(37, 1, 'Mersawa', 15, 30, 12),
(38, 1, 'Mersawa', 30, 45, 4),
(39, 1, 'Mersawa', 45, 60, 2),
(40, 1, 'Mersawa', 60, 250, 2),
(41, 2, 'Keruing', 5, 15, 21),
(42, 2, 'Keruing', 15, 30, 18),
(43, 2, 'Keruing', 30, 45, 6),
(44, 2, 'Keruing', 45, 60, 4),
(45, 2, 'Keruing', 60, 250, 4),
(46, 3, 'Dip Commercial', 5, 15, 21),
(47, 3, 'Dip Commercial', 15, 30, 18),
(48, 3, 'Dip Commercial', 30, 45, 6),
(49, 3, 'Dip Commercial', 45, 60, 4),
(50, 3, 'Dip Commercial', 60, 250, 4),
(51, 4, 'Dip NonCommercial', 5, 15, 30),
(52, 4, 'Dip NonCommercial', 15, 30, 27),
(53, 4, 'Dip NonCommercial', 30, 45, 9),
(54, 4, 'Dip NonCommercial', 45, 60, 5),
(55, 4, 'Dip NonCommercial', 60, 250, 3),
(56, 5, 'NonDip Commercial', 5, 15, 30),
(57, 5, 'NonDip Commercial', 15, 30, 27),
(58, 5, 'NonDip Commercial', 30, 45, 9),
(59, 5, 'NonDip Commercial', 45, 60, 4),
(60, 5, 'NonDip Commercial', 60, 250, 4),
(61, 6, 'NonDip NonCommercial', 5, 15, 39),
(62, 6, 'NonDip NonCommercial', 15, 30, 36),
(63, 6, 'NonDip NonCommercial', 30, 45, 12),
(64, 6, 'NonDip NonCommercial', 45, 60, 7),
(65, 6, 'NonDip NonCommercial', 60, 250, 4),
(66, 7, 'Others', 5, 15, 44),
(67, 7, 'Others', 15, 30, 42),
(68, 7, 'Others', 30, 45, 14),
(69, 7, 'Others', 45, 60, 9),
(70, 7, 'Others', 60, 250, 4);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
