/* global createjs */

var flowjs = flowjs || {};

flowjs.flowItem = function flowItem(x, y, text, radius, listener){
    this.x = x;
    this.y = y;
    
    this.color = "#079fe6";
    this.background = "white";
    this.alpha = 1;
    this.radius = radius || 40;
    this.text = text || "Hello";
    this.link = "#";
    this.font = "Arial";
    this.fontSize = "16px";
    this.strokeWidth = 4;

    if ( this.text.includes("Extractor") || this.text.includes("Transformer") || this.text.includes("Loader")){
        this.background = "#1f2330";
    }

    
    this.circle = new createjs.Shape();
    this.textShape = new createjs.Text();

    this.circle.color = "red";
    
    this.listener = listener || function(){
        /*override this function*/
    };
    
    
    var that = this;
    var onclick = function(){
        console.log("click");   
        window.open(that.link);
    };
    
    var onmouseover = function(){
        that.originalColor = that.color;
        that.color = "green";
        that.updateShape();

        console.log(that);

        let details = document.querySelectorAll(".node-config");
        details.forEach(function(item) {
          item.style.display = "none";
        });

        details = document.querySelectorAll(".node-details");
        details.forEach(function(item) {
          item.style.display = "none";
        });

        let me = document.querySelector(`.node-config[data-node="${that.text}"]`)
        if (me){
             if (me.classList.contains("hide")) {
                me.classList.remove("hide");
             }
            me.style.display = "block";
        }

        that.updateShape();
    };
    
    var onmouseout = function(){
        that.color = that.originalColor || "black";

         let details = document.querySelectorAll(".node-config");
        details.forEach(function(item) {
          item.style.display = "none";
        });

        details = document.querySelectorAll(".node-details");
        details.forEach(function(item) {
          item.style.display = "none";
        });

        let defaultDesc = document.querySelector(`.node-details-default`)
        if (defaultDesc){
            defaultDesc.style.display = "block";
        }
        that.updateShape();
    };

    // var showConfig = function(){
    //      that.originalColor = that.color;
    //     var el = document.querySelector("#node-config .message-body .content");
    //     el.innerHTML = "huehuehuehuehue";
    //     that.updateShape();
    // }
    //
    //  if ( this.text.includes("Extractor") || this.text.includes("Transformer") || this.text.includes("Loader") ){
    //      this.circle.addEventListener("mouseover", showConfig);
    // }else{
    //       this.circle.addEventListener("mouseover", onmouseover);
    //  }
    
    this.circle.addEventListener("click",           onclick);
    this.textShape.addEventListener("click",        onclick);
    this.circle.addEventListener("mouseout",        onmouseout);
    this.textShape.addEventListener("mouseout",     onmouseout);
    this.circle.addEventListener("mouseover",       onmouseover);
    this.textShape.addEventListener("mouseover",    onmouseover);
    
};

flowjs.flowItem.prototype.refresh = function(){
    this.circle.graphics.clear();
    this.circle.graphics.setStrokeStyle(this.strokeWidth).beginStroke(this.color).beginFill(this.background).drawCircle(0, 0, this.radius);
    this.circle.x = this.getLocation().x;
    this.circle.y = this.getLocation().y;
    this.circle.alpha = this.alpha;
    
    this.textShape.text = this.text;
    this.textShape.color = this.color;
    this.textShape.font = this.fontSize + " " + this.font;
    
    var textWidth = this.textShape.getBounds().width;
    this.textShape.x = this.x + this.radius - (textWidth/2);
    this.textShape.y = this.y + (this.radius * 2.2);
    this.textShape.alpha = this.alpha;
    
    this.loadingAnimation = this.loadingAnimation || this._getLoadingAnimation();
};

flowjs.flowItem.prototype.getLocation = function(){
    return {x: this.getX(), y: this.getY()};
};

flowjs.flowItem.prototype.getX = function(){
    return this.x + this.radius;
};

flowjs.flowItem.prototype.getY = function(){
    return this.y + this.radius;
};

flowjs.flowItem.prototype.setX = function(x){
    this.x = x - this.radius;
};

flowjs.flowItem.prototype.setY = function(y){
    this.y = y - this.radius;  
};

flowjs.flowItem.prototype.updateShape = function(){
    this.refresh();
    this.listener();
};

flowjs.flowItem.prototype.getDrawableItems = function(){
    return [this.circle, this.textShape];
};

flowjs.flowItem.prototype.toggleFlashing = function(){
    var isPaused = this.loadingAnimation._paused;
    this.loadingAnimation.setPaused(!isPaused);
};

flowjs.flowItem.prototype._getLoadingAnimation = function(){
    var y = this.getLocation().y;
    var distance = this.radius/2;

    var anim = createjs.Tween.get(this.circle, {loop: true, paused: true})
        // .to({ y: y}, 100,           createjs.Ease.getPowIn(2.2))
        .to({ y: y-distance}, 300,  createjs.Ease.getPowIn(2))
        .to({ y: y+distance}, 300,  createjs.Ease.getPowIn(2))
        .to({ y: y}, 100);
        // .wait(100);
    anim.setPaused(true);
    return anim;
};