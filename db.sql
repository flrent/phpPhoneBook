-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Ven 28 Septembre 2012 à 22:55
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
  `number` varchar(18) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='Table pour l''application de phonebook' AUTO_INCREMENT=33 ;

--
-- Contenu de la table `contacts`
--

INSERT INTO `contacts` (`id`, `lastname`, `firstname`, `number`) VALUES
(29, 'Lamoureux', 'Florent', '5146555451'),
(30, 'Dupont', 'Jean', '+33 55664558'),
(31, 'Charles', 'Bob', '+1 (514) 504 5143'),
(32, 'Henri', 'Julien', '+1 (348) 201 0931');
