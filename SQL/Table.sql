/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2014-11-25 20:18:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tst_clickblob
-- ----------------------------
DROP TABLE IF EXISTS `tst_clickblob`;
CREATE TABLE `tst_clickblob` (
  `Height` int(5) NOT NULL,
  `RelativeX` float(5,1) NOT NULL,
  `RelativeY` float(5,1) NOT NULL,
  `val` int(10) NOT NULL,
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

Date: 2014-11-25 20:18:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tst_clicklocation
-- ----------------------------
DROP TABLE IF EXISTS `tst_clicklocation`;
CREATE TABLE `tst_clicklocation` (
  `ScreenX` int(5) NOT NULL,
  `ScreenY` int(5) NOT NULL,
  `LocationX` int(5) NOT NULL,
  `LocationY` int(5) NOT NULL,
  `RelativeX` float(5,1) NOT NULL,
  `RelativeY` float(5,1) NOT NULL,
  `url` varchar(255) NOT NULL,
  `Date` date NOT NULL,
  `Time` time NOT NULL,
  KEY `date` (`Date`) USING BTREE,
  KEY `url` (`url`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
