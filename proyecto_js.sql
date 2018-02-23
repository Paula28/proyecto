-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-02-2018 a las 17:24:25
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_js`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `username` varchar(25) NOT NULL,
  `passwd` varchar(25) NOT NULL,
  `biography` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int(9) NOT NULL,
  `sex` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`username`, `passwd`, `biography`, `email`, `phone`, `sex`) VALUES
('Jose', 'atun', 'Los coches', 'a@gmail.com', 456685586, 'boy'),
('adk', 'asbd', 'sbd', 'as,db', 123, 'boy'),
('asd', 'asd', 'asd', 'ASD', 123, 'boy'),
('asd', 'asd', 'asd', 'asd123', 123, 'boy'),
('asjkdb', 'klvabsd', 'kabsd.', 'gvjbm,n', 123, 'boy'),
('Juanka', '28diciembre', 'Feoo', 'juancarlossantanadominguez@gmail.com', 789, 'boy'),
('sjhvd', 'hjasd', 'blasd', 'labsda', 1234123123, 'boy'),
('akjsdb', 'lkqbjd', 'lkjbsda', 'lskjbda', 123121231, 'boy'),
('Martin', 'atun', 'dfjkshajsf', 'martin@gmail.com', 123456789, 'boy'),
('ajkfkdnj', 'kjfdajknf sd', 'kjdijfnksdm', 'nfuhnkjbiu', 2147483647, 'boy'),
('mnbjhdbsk', 'khfdjshbjfsd', 'kldnfjb vsdn', 'njkdfab kjksn', 2147483647, 'boy'),
('Paula', '28diciembre', 'Amar a mi novio.', 'paulalopezramirez28@gmail.com', 662223510, 'girl'),
('asd', 'asd', 'qsad', 'qasda', 123, 'boy'),
('asd', 'asd', 'asd', 'sqdad', 123, 'boy');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
