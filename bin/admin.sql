CREATE TABLE `admin` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `adminr_roles` json DEFAULT NULL,
  `email` varchar(512) NOT NULL,
  `password` varchar(512) NOT NULL,
  `password_updated` timestamp NULL DEFAULT NULL,
  `first_name` varchar(512) NOT NULL,
  `last_name` varchar(512) NOT NULL,
  `signin_count` int unsigned NOT NULL DEFAULT '0',
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci