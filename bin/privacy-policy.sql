CREATE TABLE `privacy-policy` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `category` json DEFAULT NULL,
  `parent_id` int unsigned NOT NULL DEFAULT '0',
  `depth` int unsigned NOT NULL DEFAULT '0',
  `admin_id` int unsigned NOT NULL,
  `header` varchar(512) DEFAULT NULL,
  `content` longtext,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci