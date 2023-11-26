-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema szfm
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `szfm_2` ;

-- -----------------------------------------------------
-- Schema szfm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `szfm_2` ;
USE `szfm_2` ;

-- -----------------------------------------------------
-- Table `szfm`.`Product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `szfm_2`.`Product` ;

CREATE TABLE IF NOT EXISTS `szfm_2`.`Product` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(30) CHARACTER SET 'utf8mb3' NOT NULL,
  `model` VARCHAR(50) NOT NULL,
  `color` VARCHAR(30) NULL DEFAULT NULL,
  `release_date` DATE NULL DEFAULT NULL,
  `price` INT NOT NULL,
  `description` TEXT CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `product_image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `szfm`.`address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `szfm_2`.`address` ;

CREATE TABLE IF NOT EXISTS `szfm_2`.`address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(255) CHARACTER SET 'utf8mb3' NOT NULL,
  `street` VARCHAR(255) CHARACTER SET 'utf8mb3' NOT NULL,
  `zipcode` VARCHAR(255) CHARACTER SET 'utf8mb3' NOT NULL,
  `region` VARCHAR(255) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `szfm`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `szfm_2`.`user` ;

CREATE TABLE IF NOT EXISTS `szfm_2`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `szfm`.`orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `szfm_2`.`orders` ;

CREATE TABLE IF NOT EXISTS `szfm_2`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tracking_number` VARCHAR(255) CHARACTER SET 'utf8mb3' NOT NULL,
  `total_quantity` INT NOT NULL,
  `grand_total` INT NOT NULL,
  `date_created` DATETIME NOT NULL,
  `customer_id` INT NOT NULL,
  `address_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `address_id_idx` (`address_id` ASC) VISIBLE,
  INDEX `customer_id_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `address_id`
    FOREIGN KEY (`address_id`)
    REFERENCES `szfm_2`.`address` (`id`),
  CONSTRAINT `customer_id`
    FOREIGN KEY (`customer_id`)
    REFERENCES `szfm_2`.`user` (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `szfm`.`orderItem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `szfm_2`.`orderItem` ;

CREATE TABLE IF NOT EXISTS `szfm_2`.`orderItem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `part_price` INT NOT NULL,
  `order_id` INT NOT NULL,
  `size` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `order_id_idx` (`order_id` ASC) VISIBLE,
  CONSTRAINT `order_id`
    FOREIGN KEY (`order_id`)
    REFERENCES `szfm_2`.`orders` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `szfm`.`product_available`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `szfm_2`.`product_available` ;

CREATE TABLE IF NOT EXISTS `szfm_2`.`product_available` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` BIGINT UNSIGNED NOT NULL,
  `size` SMALLINT NOT NULL,
  `is_in_stock` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `product_available_product_id_foreign` (`product_id` ASC) VISIBLE,
  CONSTRAINT `product_available_product_id_foreign`
    FOREIGN KEY (`product_id`)
    REFERENCES `szfm_2`.`Product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
