
<?php //Don't touch me! Still being written. Defualt to index.html until this comment is gone!
error_reporting( E_ALL );
ini_set("dispaly_errors", 1);
include_once "classes/Page_Data.class.php";
$pageData = new Page_Data();
$pageData ->title = "Tutorial Scheduling Made Easy";
//$pageData ->content
$page = include_once "templates/page.php";
echo $page;
