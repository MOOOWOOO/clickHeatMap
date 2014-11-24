/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2014-11-24 23:52:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tst_clickblob
-- ----------------------------
DROP TABLE IF EXISTS `tst_clickblob`;
CREATE TABLE `tst_clickblob` (
  `RelativeX` int(255) NOT NULL,
  `RelativeY` int(255) NOT NULL,
  `val` int(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `Date` date NOT NULL,
  `Time` time NOT NULL,
  KEY `date` (`Date`) USING BTREE,
  KEY `url` (`url`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2014-11-24 23:52:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tst_clicklocation
-- ----------------------------
DROP TABLE IF EXISTS `tst_clicklocation`;
CREATE TABLE `tst_clicklocation` (
  `ScreenX` int(255) NOT NULL,
  `ScreenY` int(255) NOT NULL,
  `LocationX` int(255) NOT NULL,
  `LocationY` int(255) NOT NULL,
  `RelativeX` int(255) NOT NULL,
  `RelativeY` int(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `Date` date NOT NULL,
  `Time` time NOT NULL,
  KEY `date` (`Date`) USING BTREE,
  KEY `url` (`url`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


