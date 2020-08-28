<?php
    // 接收前端提交的数据
    $username=$_POST["username"];
    
    // 连接数据库
    mysql_connect("localhost","root","root");

    // 选择数据库
    mysql_select_db("test");

    // 定义查询语句
    $sql="SELECT * FROM userinfo WHERE username='$username'";

    // 执行
    $result=mysql_query($sql);

    // 获取查询到的数据的数量
    $count=mysql_num_rows($result);
    
    // 判定$count
    if($count){
        $arr=array("error"=>0,"msg"=>"账号正确");
    }else{
        $arr=array("error"=>1,"msg"=>"账号错误，请重新输入或注册账号！");
    }

    echo json_encode($arr);
?>