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
  `title` VARCHAR(45) NOT NULL,
  `author` VARCHAR(50) NOT NULL,
  `cover_image_url` VARCHAR(500) NULL,
  `number_of_chapters` INT NULL,
  `year_published` INT NULL,
  `description` VARCHAR(2000) NULL,
  `sub_genre` VARCHAR(45) NULL,
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
INSERT INTO `novel` (`id`, `title`, `author`, `cover_image_url`, `number_of_chapters`, `year_published`, `description`, `sub_genre`) VALUES (1, 'Dune', 'Frank Herbert', 'https://en.wikipedia.org/wiki/Dune_(novel)#/media/File:Dune-Frank_Herbert_(1965)_First_edition.jpg', 22, 1965, 'Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or \"the spice,\" a drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides.', 'military science fiction');
INSERT INTO `novel` (`id`, `title`, `author`, `cover_image_url`, `number_of_chapters`, `year_published`, `description`, `sub_genre`) VALUES (2, 'The sirens of titan', 'Kurt Vonnegut', 'https://prodimage.images-bn.com/pimages/9780385333498_p0_v1_s1200x630.jpg', 13, 1959, 'Malachi Constant is the richest man in a future America. He possesses extraordinary luck that he attributes to divine favor which he has used to build upon his father\'s fortune. He becomes the centerpoint of a journey that takes him from Earth to Mars in preparation for an interplanetary war, to Mercury with another Martian survivor of that war, back to Earth to be pilloried as a sign of Man\'s displeasure with his arrogance, and finally to Titan where he again meets the man ostensibly responsible for the turn of events that have befallen him, Winston Niles Rumfoord.', 'alternate history');
INSERT INTO `novel` (`id`, `title`, `author`, `cover_image_url`, `number_of_chapters`, `year_published`, `description`, `sub_genre`) VALUES (3, 'Brave new world', 'Aldous Huxley', 'https://cdn.shopify.com/s/files/1/1184/9194/products/brave-new-world-poster-633-p_600x.jpeg?v=1491915748', 18, 1932, 'Brave New World is a dystopian social science fiction novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story\'s protagonist.', 'dystopia');
INSERT INTO `novel` (`id`, `title`, `author`, `cover_image_url`, `number_of_chapters`, `year_published`, `description`, `sub_genre`) VALUES (4, 'Solaris', 'Stanisław Lem', 'https://images-na.ssl-images-amazon.com/images/I/51PX4F21H0L._SX310_BO1,204,203,200_.jpg', 14,  1961, 'Solaris is a 1961 philosophical science fiction novel by Polish writer Stanisław Lem. It follows a crew of scientists on a research station as they attempt to understand an extraterrestrial intelligence, which takes the form of a vast ocean on the titular alien planet. ', 'first contact');
INSERT INTO `novel` (`id`, `title`, `author`, `cover_image_url`, `number_of_chapters`, `year_published`, `description`, `sub_genre`) VALUES (5, 'Hyperion', 'Dan Simmons', 'https://images-na.ssl-images-amazon.com/images/I/712Hy13NrRL.jpg', 6, 1989, 'In the 29th century, the Hegemony of Man comprises thousands of planets connected by farcaster portals. The Hegemony maintains an uneasy alliance with the TechnoCore, a civilisation of AIs. Modified humans known as Ousters live in space stations between stars and are engaged in conflict with the Hegemony.', 'near future');
INSERT INTO `novel` (`id`, `title`, `author`, `cover_image_url`, `number_of_chapters`, `year_published`, `description`, `sub_genre`) VALUES (6, 'Ringworld', 'Larry Niven', 'https://upload.wikimedia.org/wikipedia/en/7/71/Ringworld%281stEd%29.jpg', 24, 1970, 'On planet Earth in 2850 AD, Louis Gridley Wu is celebrating his 200th birthday. Despite his age, Louis is in perfect physical condition due to the longevity drug boosterspice. He meets Nessus, a Pierson\'s puppeteer, who offers him a mysterious job. Intrigued, Louis eventually accepts. Speaker-to-Animals (Speaker), who is a Kzin, and Teela Brown, a young human woman who becomes Louis\'s lover, also join the crew.', 'dying earth');
INSERT INTO `novel` (`id`, `title`, `author`, `cover_image_url`, `number_of_chapters`, `year_published`, `description`, `sub_genre`) VALUES (7, 'The Mote in God\'s Eye', 'Jerry Pournelle', 'https://upload.wikimedia.org/wikipedia/en/c/c0/The_Mote_In_God%27s_Eye_-_original_hardcover_edition.jpg', 58, 1974, 'The Mote in God\'s Eye (originally titled Motelight)[2] is set in Pournelle\'s CoDominium universe, where a union of the United States and the Soviet Union produced a world government and a number of colonies in other star systems, followed by nuclear war on Earth and the rise of the First Empire based on the planet Sparta several centuries before the events of the novel.', 'alternate history');
INSERT INTO `novel` (`id`, `title`, `author`, `cover_image_url`, `number_of_chapters`, `year_published`, `description`, `sub_genre`) VALUES (8, 'Snow Crash', 'Neal Stephenson', 'https://entertainment.time.com/wp-content/uploads/sites/3/2011/07/t100_novels_snow_crash.jpg?w=260', 18, 1992, 'The story opens in Los Angeles in the 21st century, an unspecified number of years after a worldwide economic collapse. Los Angeles is no longer part of the United States, since the federal government has ceded most of its power and territory to private organizations and entrepreneurs.[4] Franchising, individual sovereignty, and private vehicles reign supreme. Mercenary armies compete for national defense contracts while private security guards preserve the peace in sovereign, gated housing developments. Highway companies compete to attract drivers to their roads and all mail delivery is by hired courier. The remnants of government maintain authority only in isolated compounds where they do tedious make-work that is, by and large, irrelevant to the society around them.', 'cyberpunk');

COMMIT;

