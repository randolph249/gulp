F.module("crowd",function(n,e){var o="Randolph.Baidu";e.getName=function(){return o},e.setName=function(n){o=n}});
F.use("crowd",function(o){console.log(o.getname()),o.setname("Randolph.Guo")});
F.modules("router",function(t,o){var r=function(){};return r.prototype.switchReg=function(){},o.router=r});
F.modules("sidebar",function(r,e){var o=r("router");e.router=o});