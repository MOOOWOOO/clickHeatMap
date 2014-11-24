CREATE DEFINER = `root`@`localhost` PROCEDURE `P_RecountOneDay`(IN `pDay` date, IN `pURL` varchar(500))
BEGIN
    START TRANSACTION;

    DELETE FROM tst_clickblob WHERE DATE=pDAY;

    INSERT INTO test.tst_clickblob(RelativeX, RelativeY, Val, URL, Date, Time)
    SELECT RelativeX, RelativeY, COUNT(1) Val, URL, Date, Time FROM test.tst_clicklocation
    WHERE URL=pURL AND Date=pDAY
    GROUP BY RelativeX, RelativeY;

    COMMIT;
END;

CREATE DEFINER = `root`@`localhost` PROCEDURE `P_RecountDays`(IN `pURL` varchar(500),IN `sDAY` date,IN `eDAY` date)
BEGIN
    #如何循环调用P_RecountOneDay并以此传入每一天？
    CALL P_RecountOneDay(pURL,'');
END;

