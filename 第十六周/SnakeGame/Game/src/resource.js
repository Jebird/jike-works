var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    about:"res/about.png",
    bg:"res/bg.jpg",
    start:"res/start.png",
    zhuye:"res/zhuye.png",
    helpGame:"res/helpGame.jpg",
    snakeHead:"res/snakeHead.png",
    snakeBody:"res/snakeBody.png",
    snakeFood:"res/snakeFood.png",
    bg_mp3:"res/bg.mp3",
    bg_effect:"res/moveClear.wav"

};
var director=cc.Director._getInstance();
var winsize=cc.size(640,1134);
var dir=null;

SNAKE_BODY=[];

SNAKE_DIR={
    UP:0,
    DOWN:1,
    LEFT:2,
    RIGHT:3
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}