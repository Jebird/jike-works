/**
 * Created by hs 1 on 2016/4/30.
 */
/**
 * Created by hs 1 on 2016/4/30.
 */

var AboutLayer = cc.Layer.extend({
    sprite:null,
    size:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        size = cc.winSize;
        var labeljike = new cc.LabelTTF("极客学院", "Arial", 38);
        // position the label on the center of the screen
        var jike=new cc.MenuItemLabel(labeljike,function(){
            window.location.href="http://www.jikexueyuan.com";
        });
        jike.setPosition(cc.p(size.width/2,size.height-200));
        var htmldemo = new cc.LabelTTF("Cocos2D-HTML5 游戏开发", "Arial", 38);
        // position the label on the center of the screen
        var gamedemo=new cc.MenuItemLabel(htmldemo,function(){
            window.location.href="http://www.jikexueyuan.com";
        });
        gamedemo.setPosition(cc.p(size.width/2,size.height/2));




        var menu = new cc.Menu(jike,gamedemo);
        menu.x =0;
        menu.y = 0;
        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var goBack = new cc.LabelTTF("GO BACK", "Arial", 38);
        // position the label on the center of the screen
        var backMenu=new cc.MenuItemLabel(goBack,function(){
            cc.director.runScene(new MenuGame());
        });
        backMenu.x = size.width / 2;
        backMenu.y = size.height/2-100;
        // add the label as a child to this layer
        var menuBack=new cc.Menu(backMenu);
        menuBack.x=0;
        menuBack.y=0;
        this.addChild(menuBack, 2);


        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.helpGame);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2

        });
        this.addChild(this.sprite, 0);

    }
});
var AboutGame = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new AboutLayer();
        this.addChild(layer);
    }
});
