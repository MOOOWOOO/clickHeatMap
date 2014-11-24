<?php
/**
 * Created by PhpStorm.
 * User: WOOO
 * Date: 2014/11/18
 * Time: 10:57
 */
//$clickData = $_POST['docWidth'];

require_once('./db/Db.php');
$response = false;
if (!empty($_POST['param'])) {
    $response = db($_POST['param'], $_POST['type']);
}

$t= json_encode($response);
echo $t;
?>