-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Ven 28 Septembre 2012 à 08:29
-- Version du serveur: 5.5.9
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de données: `wajam`
--

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(30) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `number` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='Table pour l''application de phonebook' AUTO_INCREMENT=10 ;

--
-- Contenu de la table `contacts`
--

INSERT INTO `contacts` (`id`, `lastname`, `firstname`, `number`) VALUES
(1, 'paul', 'jean', '0'),
(2, 'Pate', 'Jean', '5146555451'),
(3, 'Pate', 'Jean', '5146555451'),
(5, 'Pate', 'Jean', '5146555451');
