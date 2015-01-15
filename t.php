<?php
/**
 * Created by PhpStorm.
 * User: WOOO
 * Date: 2015/1/5
 * Time: 11:35
 */
function hire($you)
{
    $phpProgramer = array(
        "Skill" => array(
            "HTML" => "精通",
            "JavaScript" => "熟练",
            "CSS" => "熟练",
            "XML" => "熟练",
            "PHP" => "熟练",
            "DataBase" => "MySQL",
            "SQL" => "熟练"
        ),
        "Framework" => array(
            "Yii" => "熟悉",
            "Smarty" => "熟悉",
            "ThinkPHP" => "熟悉",
            "ZendFramework" => "熟悉"
        )
    );

    if (in_array($phpProgramer["Skill"], $you["Skill"]) &&
        in_array($phpProgramer["Framework"], $you["Framework"])
    ) {
        echo "we want you!";
        $you["work"] = "FullTime";
        $you["workplace"] = "四川成都";

        if ($you["Edu"] >= "大专" && $you["WorkExp"] >= 1) {
            $you["title"] = "PHP工程师";
            $you["salary"] = 4000;
            if ($you["WorkExp"] >= 3 &&
                in_array("CacheServer", $you["Skill"]) &&
                in_array("Linux", $you["Skill"])) {
                $you["title"] = "PHP高级工程师";
                $you["salary"] = 8000;
            }
        }

    }
}

$you = array(
    "Skill" => array(
        "HTML" => "精通",
        "JavaScript" => "熟练",
        "CSS" => "熟练",
        "XML" => "熟练",
        "PHP" => "熟练",
        "SQL" => "熟练",
        "DataBase" => "MySQL",
        "a" => true
    ),
    "Framework" => array(
        "Yii" => "熟悉",
        "Smarty" => "熟悉",
        "ThinkPHP" => "熟悉",
        "ZendFramework" => "熟悉",
        "a" => true
    ),
    "Edu" => "大专",
    "WorkExp" => 5
);

hire($you);

?>