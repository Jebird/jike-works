/**
 * Created by hs 1 on 2016/5/3.
 */
var SnakeGame=cc.Node.extend({
    _type:null,
   ctor:function(type){
       this._super();
       this._type=type;
       var sp=new cc.Sprite.create();
       //1:蛇头 2：身体 3：食物
       switch(this._type){
           case 1:
               sp=cc.Sprite.create(res.snakeHead);
               break;
           case 2:
               sp=cc.Sprite.create(res.snakeBody);
               break;
           case 3:
               sp=cc.Sprite.create(res.snakeFood);
               break;
           default:break;
       }
       sp.setPosition(cc.p(0,0));
       sp.setAnchorPoint(cc.p(0,0));
       this.addChild(sp);
   }
});
SnakeGame.create=function(arg){
    var snakeGame=new SnakeGame(arg);
    return snakeGame;
}
