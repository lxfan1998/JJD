<?php
    // 接收前端提交的数据
    $password=$_POST["password"];
    
    // 连接数据库
    mysql_connect("localhost","root","root");

    // 选择数据库
    mysql_select_db("test");

    // 定义查询语句
    $sql="SELECT * FROM userinfo WHERE password='$password'";

    // 执行
    $result=mysql_query($sql);

    // 获取查询到的数据的数量
    $count=mysql_num_rows($result);
    
    // 判定$count
    if($count){
        $arr=array("error"=>0,"msg"=>"密码正确");
    }else{
        $arr=array("error"=>1,"msg"=>"密码错误，请重新输入！");
    }

    echo json_encode($arr);
?>