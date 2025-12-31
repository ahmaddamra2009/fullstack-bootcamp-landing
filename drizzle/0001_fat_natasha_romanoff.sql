CREATE TABLE `registrations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50) NOT NULL,
	`experience` enum('beginner','intermediate','advanced') DEFAULT 'beginner',
	`country` varchar(100),
	`city` varchar(100),
	`source` varchar(255),
	`message` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `registrations_id` PRIMARY KEY(`id`)
);
