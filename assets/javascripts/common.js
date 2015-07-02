
/**
 * 入口文件
 * gulp学习
 */

 F.module('crowd',function(modules,exports){
    var name="Randolph.Baidu";
    exports.getName=function(){
      return name;
    }
    exports.setName=function(n){
      name=n;
    }
 });
