<?php
/**
 * Created by PhpStorm.
 * User: Jux.Liu
 * Date: 2014/11/18
 * Time: 16:54
 */
function db($data, $action)
{
    $dbms = 'mysql';     //数据库类型 oracle 用ODI,对于开发者来说，使用不同的数据库，只要改这个，不用记住那么多的函数了
    $host = 'localhost'; //数据库主机名
    $dbName = 'test';    //使用的数据库
    $user = 'root';      //数据库连接用户名
    $pass = 'root4))';          //对应的密码
    $dsn = "$dbms:host=$host;dbname=$dbName";
    try {
        $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象，就是创建了数据库连接对象$dbh
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result = false;

        switch ($action) {
            case 'select':
                $result = select($dbh, $data);
                break;
            case 'insert':
                $loop = sizeof($data);
                for ($i = 0; $i < $loop; $i++) {
                    insert($dbh, $data[$i]);
                }
                $result = true;
                break;
            default:
                break;
        }

        $dbh = null;    // 释放连接资源
        return $result;
    } catch (PDOException $e) {
        die ("Error!: " . $e->getMessage() . "<br/>");
        echo false;
    }
}

/**
 * 插入数据操作
 * @param $dbh , 数据库连接实例
 * @param $data , 待插入的数据
 * @return bool, 操作状态
 */
function insert($dbh, $data)
{
    $sql = "INSERT INTO test.tst_clicklocation(ScreenX, ScreenY, LocationX, LocationY, RelativeX, Relativey, URL, Date, Time)
            VALUES (:ScreenX, :ScreenY, :LocationX, :LocationY, :RelativeX, :Relativey, :URL, :Date, :Time);";
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam(":ScreenX", $data['screenX']);
    $stmt->bindParam(":ScreenY", $data["screenY"]);
    $stmt->bindParam(":LocationX", $data["crdx"]);
    $stmt->bindParam(":LocationY", $data["crdy"]);
    $stmt->bindParam(":RelativeX", $data["pctx"]);
    $stmt->bindParam(":Relativey", $data["pcty"]);
    $stmt->bindParam(":URL", $data["url"]);
    $stmt->bindParam(":Date", $data["datetime"]);
    $stmt->bindParam(":Time", $data["datetime"]);
    $stmt->execute();
    return true;
}

/**
 * 数据库查找操作
 * @param $dbh , 数据库连接实例
 * @param $param , 查询条件参数
 * @return $rows, 查询到的集合
 */
function select($dbh, $param)
{
    // 组织SQL语句
    $sql = "SELECT RelativeX, RelativeY, val FROM test.tst_clickblob WHERE URL=:URL ";
    if (!empty($param["startDateTime"])) {
        if (!empty($param["endDateTime"])) {
            if ($param["startDateTime"] < $param["endDateTime"]) {
                $sql .= "AND Date BETWEEN :startDateTime AND :endDateTime;";    // 时间段
            } else if ($param["endDateTime"] < $param["startDateTime"]) {
                $sql .= "AND Date BETWEEN :endDateTime AND :startDateTime;";
            } else {
                $sql .= "AND Date > :startDateTime;";   // 时间点至现在
            }
        } else {
            $sql .= "AND Date = :startDateTime;";       // 具体时间点
        }
    } else {
        $sql .= ";";
    }

    // 查询操作
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam(":URL", $param["URL"]);
    if (!empty($param["startDateTime"])) {
        $stmt->bindParam(":startDateTime", $param["startDateTime"], PDO::PARAM_STR);
        if (!empty($param["endDateTime"])) {
            $stmt->bindParam(":endDateTime", $param["endDateTime"], PDO::PARAM_STR);
        }
    }
    $stmt->execute();

    // 获取返回值
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $rows;
}

?>