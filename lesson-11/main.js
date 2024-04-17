// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
// BEST 습관 :  먼저 모든 상수나 변수 정의(const)
const port = 3000,
    express =require("express"),
    layouts = require("express-ejs-layouts"),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    app = express();

// BEST습관 : 2단계 앱 설정 (설정)
app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.static("public"));


app.get("/", homeController.getHome);
app.get("/name", homeController.respondWithName);
app.get("/test", (req,res)=>{
    res.sendFile("./public/test.html");
})

//BEST습관 : 순서 때문에 errorController app.use()은 마지막(listen 전)
app.use(errorController.logErrors);
app.use(errorController.resNotFound); //404
app.use(errorController.resInternalError); //500

//BEST 습관 : 마지막 listen 함수
app.listen(app.get("port"),()=>{
    console.log(`Sever at : http://localHost:${app.get("port")}`)
})