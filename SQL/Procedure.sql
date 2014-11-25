CREATE DEFINER = `root`@`localhost` PROCEDURE `P_RecountOneDay`(IN `pURL` varchar(500),IN `pDAY` date)
BEGIN
    START TRANSACTION;

    DELETE FROM tst_clickblob WHERE URL=pURL AND DATE=pDAY;

    INSERT INTO test.tst_clickblob(Height, RelativeX, RelativeY, Val, URL, Date, Time)
    SELECT ScreenY, RelativeX, RelativeY, COUNT(1) Val, URL, Date, Time FROM test.tst_clicklocation
    WHERE URL=pURL AND Date=pDAY
    GROUP BY RelativeX, RelativeY;

    COMMIT;
END;

