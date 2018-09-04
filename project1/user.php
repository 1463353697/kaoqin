<?
	$arr = array(
    		"number"=>"1",
    		"userName"=>"admin",
    		"department"=>"人力资源部",
    		"img"=>"x",
    		"sex"=>"男",
    		"marrige"=>"未婚 ",
    		"phone"=>"12345678",
    		"mail"=>"12345678@qq.com");
    // if ($_POST["user"]=="admin") {
    //     echo json_encode($arr);
    // }
    // else{
    //     echo $_POST['user'];
    // }
    //$xa = json_encode($_POST['user']);

	#echo $_POST['user'].json_encode($_POST['user']);
    echo json_encode($arr);
    #echo json_encode($_POST['user']);
    #echo $arr;
?>