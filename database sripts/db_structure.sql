CREATE DATABASE szfm;
USE szfm;
CREATE TABLE `Product`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `brand` VARCHAR(30) NOT NULL,
    `model` VARCHAR(50) NOT NULL,
    `color` VARCHAR(30) NULL,
    `release_date` DATE NULL,
    `price` INT NOT NULL,
    `description` TEXT NULL,
    `product_image` VARCHAR(255) NOT NULL);
CREATE TABLE `order`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `order_item_id` BIGINT UNSIGNED NOT NULL,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `order_date` DATE NOT NULL,
    `order_status` VARCHAR(255) NOT NULL,
    `grand_total` INT NOT NULL);
CREATE TABLE `user`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `tel_number` VARCHAR(255) NOT NULL);
CREATE TABLE `order_item`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `product_id` BIGINT UNSIGNED NOT NULL,
    `quantity` INT NOT NULL,
    `part_price` INT NOT NULL
);
CREATE TABLE `product_available`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `product_id` BIGINT UNSIGNED NOT NULL,
    `size` SMALLINT NOT NULL,
    `is_in_stock` TINYINT(1) NOT NULL);
CREATE TABLE `user_details`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `country` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `postcode` SMALLINT NULL,
    `adress` VARCHAR(255) NOT NULL,
    `payment_method` VARCHAR(255) NULL);
ALTER TABLE
    `order` ADD CONSTRAINT `order_order_item_id_foreign` FOREIGN KEY(`order_item_id`) REFERENCES `order_item`(`id`);
ALTER TABLE
    `product_available` ADD CONSTRAINT `product_available_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `Product`(`id`);
ALTER TABLE
    `user_details` ADD CONSTRAINT `user_details_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);
ALTER TABLE
    `order_item` ADD CONSTRAINT `order_item_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `Product`(`id`);
ALTER TABLE
    `order` ADD CONSTRAINT `order_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);