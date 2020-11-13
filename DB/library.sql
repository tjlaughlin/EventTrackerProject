-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sciencefictionlibrarydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sciencefictionlibrarydb` ;

-- -----------------------------------------------------
-- Schema sciencefictionlibrarydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sciencefictionlibrarydb` DEFAULT CHARACTER SET utf8 ;
USE `sciencefictionlibrarydb` ;

-- -----------------------------------------------------
-- Table `novel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `novel` ;

CREATE TABLE IF NOT EXISTS `novel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS library@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'library'@'localhost' IDENTIFIED BY 'library';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'library'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `novel`
-- -----------------------------------------------------
START TRANSACTION;
USE `sciencefictionlibrarydb`;
INSERT INTO `novel` (`id`, `title`) VALUES (1, 'Dune');

COMMIT;

