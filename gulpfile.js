var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require("url");
var path = require("path");
var fs = require('fs');
gulp.task('webserver',function(){
    // 读取文件
    gulp.src('./')
        .pipe(webserver({
            port: 8090, // 端口号
            host: 'localhost',//
            //连接中间件函数或中间件功能列表
            middleware: function(req, res, next){
                const urlObj = url.parse(req.url, true);//地址栏参数
                const files = urlObj.search.split('?')[1] + '.json';// 地址栏参数
                console.log(urlObj);
                const pathname = path.join(__dirname,'Datas', files);//拼接文件路径
                fs.exists(pathname, function(exists){
                    if(!exists){
                        // 没有json文件
                        res.writeHead(404, {
                            'Content-Type': 'text/json;charset=utf8'
                        });
                        res.end(JSON.stringify({
                            code: 1,
                            msg: 'cant not find this file:'+files
                        }));
                    } else {
                        // 有
                        res.writeHead(200,{
                            'content-type': 'text/json;charset=utf8',
                            'Access-Control-Allow-Origin':"http://localhost:63342"
                        });
                        var data = fs.readFileSync(pathname);
                        res.end(data);
                    }
                });
            }
        }));
});