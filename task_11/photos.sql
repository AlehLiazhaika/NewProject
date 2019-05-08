-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: watchme
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `photo_posts`
--

DROP TABLE IF EXISTS `photo_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photo_posts` (
  `PHOTO_POST_ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_ID` int(11) NOT NULL,
  `IMAGE_URL` varchar(45) NOT NULL,
  `CREATION_TIME` varchar(45) NOT NULL,
  `DISCRIPTION` varchar(45) NOT NULL,
  `TAGS` varchar(45) NOT NULL,
  `NUM_OF_LIKES` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`PHOTO_POST_ID`),
  KEY `USER_ID_idx` (`USER_ID`),
  CONSTRAINT `USER_ID` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_posts`
--

LOCK TABLES `photo_posts` WRITE;
/*!40000 ALTER TABLE `photo_posts` DISABLE KEYS */;
INSERT INTO `photo_posts` VALUES (2,1,'helloIMG','2019-05-07 20:00:00','hello world','#tag1 #tag2',33),(3,3,'helloIMG','2019-05-07 20:00:00','ASDASMD','#tag4 #tag2',12),(4,2,'helloIMG','2019-05-07 20:00:00','qwerty','#tag4 #tag2',1),(5,6,'helloIMG','2019-05-07 20:00:00','{}','#tag4 #tag2',90),(6,7,'helloIMG','2019-05-07 20:00:00','tyfhvbg','#tag4 #tag2',0),(7,4,'helloIMG','2019-05-07 20:00:00','sdjfsdkjfs','#tag4 #tag2',34),(8,8,'helloIMG','2019-05-07 20:00:00','vnvnvnvvnvn','#tag4 #tag2',21),(9,9,'helloIMG','2019-05-07 20:00:00','smfsdmfskdns','#tag4 #tag2',20),(10,5,'helloIMG','2019-05-07 20:00:00','kkk','#tag4 #tag2',2),(11,1,'helloIMG','2019-05-07 20:00:00','goodbye world','#tag4 #tag2 #tag1 #tag3',2364229),(12,1,'helloIMG','2019-05-07 20:00:00','hello world 2','#tag1 #tag2',999);
/*!40000 ALTER TABLE `photo_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `EMAIL` varchar(45) NOT NULL,
  `NAME` varchar(45) NOT NULL,
  `USERNAME` varchar(45) NOT NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`),
  UNIQUE KEY `USERNAME_UNIQUE` (`USERNAME`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'aleh.liazhaika@gmail.com','Aleh','aleh_lezh'),(2,'1@gmail.com','Vika','vikusya'),(3,'2@gmail.com','Pasha','Pablooo'),(4,'3@gmail.com','Nika','nika_177'),(5,'4@gmail.com','Nastya','sly_fox'),(6,'5@gmail.com','Peter','monster_peter'),(7,'6@gmail.com','Valera','valol'),(8,'7@gmail.com','Vlad','111_vlad_111'),(9,'8@gmail.com','Misha','mimimisha'),(10,'9@gmail.com','Daria','shtobbikk');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-08 14:17:00
