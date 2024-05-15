-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 15 mai 2024 à 10:50
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
-- Structure de la table `DamageTrees`
--

CREATE TABLE `DamageTrees` (
  `Cut_ID` int(11) NOT NULL,
  `Victim_ID` int(11) NOT NULL,
  `CategoryDamage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `DamageTrees`
--
ALTER TABLE `DamageTrees`
  ADD PRIMARY KEY (`Cut_ID`,`Victim_ID`),
  ADD KEY `Victim_ID` (`Victim_ID`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `DamageTrees`
--
ALTER TABLE `DamageTrees`
  ADD CONSTRAINT `DamageTrees_ibfk_1` FOREIGN KEY (`Cut_ID`) REFERENCES `trees` (`id`),
  ADD CONSTRAINT `DamageTrees_ibfk_2` FOREIGN KEY (`Victim_ID`) REFERENCES `trees` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
