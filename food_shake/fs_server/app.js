//1.加载第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("session");

//2.配置数据库连接池
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"";
    port:3306,
    database:"fs",
    connectionLimit:15
})
//3.配置跨域
 var server = express();
 server.use(cors({
     
 }))
//4.配置session模块

//功能一：完成用户登录操作