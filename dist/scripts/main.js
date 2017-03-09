"use strict";function TabSwitch(t){this.oParent=document.getElementById(t),this.aInput=this.oParent.getElementsByTagName("input"),this.aDiv=this.oParent.getElementsByTagName("div"),this.iNow=0}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){var e={init:function(e){var o={direction:"left",loop:-1,scrolldelay:0,scrollamount:50,circular:!0,drag:!0,runshort:!0,hoverstop:!0,inverthover:!1,xml:!1};return e&&t.extend(o,e),this.each(function(){var e="mouseenter",i="mouseleave";o.inverthover&&(e="mouseleave",i="mouseenter");var s=o.loop,n=t(this).addClass("str_wrap").data({scrollamount:o.scrollamount}),r=!1,a=n.attr("style");if(a)for(var l=a.split(";"),c=!1,f=0;f<l.length;f++){var h=t.trim(l[f]),u=h.search(/^height/g);u!=-1&&(c=parseFloat(n.css("height")))}var p=function(){n.off("mouseleave"),n.off("mouseenter"),n.off("mousemove"),n.off("mousedown"),n.off("mouseup"),t(".str_move",n).length||n.wrapInner(t("<div>").addClass("str_move"));var a=t(".str_move",n).addClass("str_origin"),l=a.clone().removeClass("str_origin").addClass("str_move_clone"),c=0;o.hoverstop||n.addClass("noStop");var f=function(){l.clone().css({left:"100%",right:"auto",width:a.width()}).appendTo(a),l.css({right:"100%",left:"auto",width:a.width()}).appendTo(a)},h=function(){l.clone().css({top:"100%",bottom:"auto",height:a.height()}).appendTo(a),l.css({bottom:"100%",top:"auto",height:a.height()}).appendTo(a)};if("left"==o.direction)if(n.height(a.outerHeight()),a.width()>n.width()){var u=-a.width();o.circular&&(o.xml||(f(),u=-(a.width()+(a.width()-n.width())))),o.xml&&a.css({left:n.width()});var p=n.width(),d=0,v=function(){var t=Math.abs(u),e=t/n.data("scrollamount")*1e3;return 0!=parseFloat(a.css("left"))&&(t+=n.width(),e=(t-(n.width()-parseFloat(a.css("left"))))/n.data("scrollamount")*1e3),e},m=!1,g=function e(){0!=s&&a.stop(!0).animate({left:u},v(),"linear",function(){t(this).css({left:n.width()}),s==-1?m=setTimeout(e,o.scrolldelay):(s--,m=setTimeout(e,o.scrolldelay))})};n.data({moveId:m,moveF:g}),o.inverthover||g(),o.hoverstop&&(n.on(e,function(){t(this).addClass("str_active"),clearTimeout(m),a.stop(!0)}).on(i,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),g()}),o.drag?n.on("mousedown",function(e){o.inverthover&&a.stop(!0);var i,s,l=1,c=e.clientX;return p=a.position().left,d=p-(e.clientX-n.offset().left),t(this).on("mousemove",function(t){r=!0,s=t.clientX,l=s>c?1:-1,c=s,i=d+(t.clientX-n.offset().left),o.circular?(i<-a.width()&&l<0&&(i=0,p=a.position().left,d=p-(t.clientX-n.offset().left)),i>0&&l>0&&(i=-a.width(),p=a.position().left,d=p-(t.clientX-n.offset().left))):(i<-a.width()&&l<0&&(i=n.width(),p=a.position().left,d=p-(t.clientX-n.offset().left)),i>n.width()&&l>0&&(i=-a.width(),p=a.position().left,d=p-(t.clientX-n.offset().left))),a.stop(!0).css({left:i})}).on("mouseup",function(){t(this).off("mousemove"),o.inverthover&&a.trigger("mouseenter"),setTimeout(function(){r=!1},50)}),!1}).on("click",function(){if(r)return!1}):n.addClass("no_drag"))}else if(o.runshort){a.css({left:n.width()});var p=n.width(),d=0,w=function(){return c=(a.width()+a.position().left)/n.data("scrollamount")*1e3},T=function e(){var i=-a.width();a.animate({left:i},w(),"linear",function(){t(this).css({left:n.width()}),s==-1?setTimeout(e,o.scrolldelay):(s--,setTimeout(e,o.scrolldelay))})};n.data({moveF:T}),o.inverthover||T(),o.hoverstop&&(n.on(e,function(){t(this).addClass("str_active"),a.stop(!0)}).on(i,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),T()}),o.drag?n.on("mousedown",function(e){o.inverthover&&a.stop(!0);var i,s,l=1,c=e.clientX;return p=a.position().left,d=p-(e.clientX-n.offset().left),t(this).on("mousemove",function(t){r=!0,s=t.clientX,l=s>c?1:-1,c=s,i=d+(t.clientX-n.offset().left),i<-a.width()&&l<0&&(i=n.width(),p=a.position().left,d=p-(t.clientX-n.offset().left)),i>n.width()&&l>0&&(i=-a.width(),p=a.position().left,d=p-(t.clientX-n.offset().left)),a.stop(!0).css({left:i})}).on("mouseup",function(){o.inverthover&&a.trigger("mouseenter"),t(this).off("mousemove"),setTimeout(function(){r=!1},50)}),!1}).on("click",function(){if(r)return!1}):n.addClass("no_drag"))}else n.addClass("str_static");if("right"==o.direction)if(n.height(a.outerHeight()),n.addClass("str_right"),a.css({left:-a.width(),right:"auto"}),a.width()>n.width()){var u=n.width();a.css({left:0}),o.circular&&(o.xml||(f(),u=a.width()));var y=0;w=function(){var t=n.width(),e=t/n.data("scrollamount")*1e3;return 0!=parseFloat(a.css("left"))&&(t=a.width()+n.width(),e=(t-(a.width()+parseFloat(a.css("left"))))/n.data("scrollamount")*1e3),e};var T=function e(){0!=s&&a.animate({left:u},w(),"linear",function(){t(this).css({left:-a.width()}),s==-1?setTimeout(e,o.scrolldelay):(s--,setTimeout(e,o.scrolldelay))})};n.data({moveF:T}),o.inverthover||T(),o.hoverstop&&(n.on(e,function(){t(this).addClass("str_active"),a.stop(!0)}).on(i,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),T()}),o.drag?n.on("mousedown",function(e){o.inverthover&&a.stop(!0);var i,s,l=1,c=e.clientX;return p=a.position().left,y=p-(e.clientX-n.offset().left),t(this).on("mousemove",function(t){r=!0,s=t.clientX,l=s>c?1:-1,c=s,i=y+(t.clientX-n.offset().left),o.circular?(i<-a.width()&&l<0&&(i=0,p=a.position().left,y=p-(t.clientX-n.offset().left)),i>0&&l>0&&(i=-a.width(),p=a.position().left,y=p-(t.clientX-n.offset().left))):(i<-a.width()&&l<0&&(i=n.width(),p=a.position().left,y=p-(t.clientX-n.offset().left)),i>n.width()&&l>0&&(i=-a.width(),p=a.position().left,y=p-(t.clientX-n.offset().left))),a.stop(!0).css({left:i})}).on("mouseup",function(){o.inverthover&&a.trigger("mouseenter"),t(this).off("mousemove"),setTimeout(function(){r=!1},50)}),!1}).on("click",function(){if(r)return!1}):n.addClass("no_drag"))}else if(o.runshort){var y=0,w=function(){return c=(n.width()-a.position().left)/n.data("scrollamount")*1e3},T=function e(){var i=n.width();a.animate({left:i},w(),"linear",function(){t(this).css({left:-a.width()}),s==-1?setTimeout(e,o.scrolldelay):(s--,setTimeout(e,o.scrolldelay))})};n.data({moveF:T}),o.inverthover||T(),o.hoverstop&&(n.on(e,function(){t(this).addClass("str_active"),a.stop(!0)}).on(i,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),T()}),o.drag?n.on("mousedown",function(e){o.inverthover&&a.stop(!0);var i,s,l=1,c=e.clientX;return p=a.position().left,y=p-(e.clientX-n.offset().left),t(this).on("mousemove",function(t){r=!0,s=t.clientX,l=s>c?1:-1,c=s,i=y+(t.clientX-n.offset().left),i<-a.width()&&l<0&&(i=n.width(),p=a.position().left,y=p-(t.clientX-n.offset().left)),i>n.width()&&l>0&&(i=-a.width(),p=a.position().left,y=p-(t.clientX-n.offset().left)),a.stop(!0).css({left:i})}).on("mouseup",function(){o.inverthover&&a.trigger("mouseenter"),t(this).off("mousemove"),setTimeout(function(){r=!1},50)}),!1}).on("click",function(){if(r)return!1}):n.addClass("no_drag"))}else n.addClass("str_static");if("up"==o.direction)if(n.addClass("str_vertical"),a.height()>n.height()){var C=-a.height();o.circular&&(o.xml||(h(),C=-(a.height()+(a.height()-n.height())))),o.xml&&a.css({top:n.height()});var y=0;w=function(){var t=Math.abs(C),e=t/n.data("scrollamount")*1e3;return 0!=parseFloat(a.css("top"))&&(t+=n.height(),e=(t-(n.height()-parseFloat(a.css("top"))))/n.data("scrollamount")*1e3),e};var T=function e(){0!=s&&a.animate({top:C},w(),"linear",function(){t(this).css({top:n.height()}),s==-1?setTimeout(e,o.scrolldelay):(s--,setTimeout(e,o.scrolldelay))})};n.data({moveF:T}),o.inverthover||T(),o.hoverstop&&(n.on(e,function(){t(this).addClass("str_active"),a.stop(!0)}).on(i,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),T()}),o.drag?n.on("mousedown",function(e){o.inverthover&&a.stop(!0);var i,s,l=1,c=e.clientY;return strMoveTop=a.position().top,y=strMoveTop-(e.clientY-n.offset().top),t(this).on("mousemove",function(t){r=!0,s=t.clientY,s>c?l=1:s<c&&(l=-1),c=s,i=y+t.clientY-n.offset().top,o.circular?(i<-a.height()&&l<0&&(i=0,strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top)),i>0&&l>0&&(i=-a.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top))):(i<-a.height()&&l<0&&(i=n.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top)),i>n.height()&&l>0&&(i=-a.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top))),a.stop(!0).css({top:i})}).on("mouseup",function(){o.inverthover&&a.trigger("mouseenter"),t(this).off("mousemove"),setTimeout(function(){r=!1},50)}),!1}).on("click",function(){if(r)return!1}):n.addClass("no_drag"))}else if(o.runshort){a.css({top:n.height()});var y=0,w=function(){return c=(a.height()+a.position().top)/n.data("scrollamount")*1e3},T=function e(){var i=-a.height();a.animate({top:i},w(),"linear",function(){t(this).css({top:n.height()}),s==-1?setTimeout(e,o.scrolldelay):(s--,setTimeout(e,o.scrolldelay))})};n.data({moveF:T}),o.inverthover||T(),o.hoverstop&&(n.on(e,function(){t(this).addClass("str_active"),a.stop(!0)}).on(i,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),T()}),o.drag?n.on("mousedown",function(e){o.inverthover&&a.stop(!0);var i,s,l=1,c=e.clientY;return strMoveTop=a.position().top,y=strMoveTop-(e.clientY-n.offset().top),t(this).on("mousemove",function(t){r=!0,s=t.clientY,s>c?l=1:s<c&&(l=-1),c=s,i=y+t.clientY-n.offset().top,i<-a.height()&&l<0&&(i=n.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top)),i>n.height()&&l>0&&(i=-a.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top)),a.stop(!0).css({top:i})}).on("mouseup",function(){o.inverthover&&a.trigger("mouseenter"),t(this).off("mousemove"),setTimeout(function(){r=!1},50)}),!1}).on("click",function(){if(r)return!1}):n.addClass("no_drag"))}else n.addClass("str_static");if("down"==o.direction)if(n.addClass("str_vertical").addClass("str_down"),a.css({top:-a.height(),bottom:"auto"}),a.height()>n.height()){var C=n.height();o.circular&&(o.xml||(h(),C=a.height())),o.xml&&a.css({top:-a.height()});var y=0;w=function(){var t=n.height(),e=t/n.data("scrollamount")*1e3;return 0!=parseFloat(a.css("top"))&&(t=a.height()+n.height(),e=(t-(a.height()+parseFloat(a.css("top"))))/n.data("scrollamount")*1e3),e};var T=function e(){0!=s&&a.animate({top:C},w(),"linear",function(){t(this).css({top:-a.height()}),s==-1?setTimeout(e,o.scrolldelay):(s--,setTimeout(e,o.scrolldelay))})};n.data({moveF:T}),o.inverthover||T(),o.hoverstop&&(n.on(e,function(){t(this).addClass("str_active"),a.stop(!0)}).on(i,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),T()}),o.drag?n.on("mousedown",function(e){o.inverthover&&a.stop(!0);var i,s,l=1,c=e.clientY;return strMoveTop=a.position().top,y=strMoveTop-(e.clientY-n.offset().top),t(this).on("mousemove",function(t){r=!0,s=t.clientY,s>c?l=1:s<c&&(l=-1),c=s,i=y+t.clientY-n.offset().top,o.circular?(i<-a.height()&&l<0&&(i=0,strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top)),i>0&&l>0&&(i=-a.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top))):(i<-a.height()&&l<0&&(i=n.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top)),i>n.height()&&l>0&&(i=-a.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top))),a.stop(!0).css({top:i})}).on("mouseup",function(){o.inverthover&&a.trigger("mouseenter"),t(this).off("mousemove"),setTimeout(function(){r=!1},50)}),!1}).on("click",function(){if(r)return!1}):n.addClass("no_drag"))}else if(o.runshort){var y=0,w=function(){return c=(n.height()-a.position().top)/n.data("scrollamount")*1e3},T=function e(){var i=n.height();a.animate({top:i},w(),"linear",function(){t(this).css({top:-a.height()}),s==-1?setTimeout(e,o.scrolldelay):(s--,setTimeout(e,o.scrolldelay))})};n.data({moveF:T}),o.inverthover||T(),o.hoverstop&&(n.on(e,function(){t(this).addClass("str_active"),a.stop(!0)}).on(i,function(){t(this).removeClass("str_active"),t(this).off("mousemove"),T()}),o.drag?n.on("mousedown",function(e){o.inverthover&&a.stop(!0);var i,s,l=1,c=e.clientY;return strMoveTop=a.position().top,y=strMoveTop-(e.clientY-n.offset().top),t(this).on("mousemove",function(t){r=!0,s=t.clientY,s>c?l=1:s<c&&(l=-1),c=s,i=y+t.clientY-n.offset().top,i<-a.height()&&l<0&&(i=n.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top)),i>n.height()&&l>0&&(i=-a.height(),strMoveTop=a.position().top,y=strMoveTop-(t.clientY-n.offset().top)),a.stop(!0).css({top:i})}).on("mouseup",function(){o.inverthover&&a.trigger("mouseenter"),t(this).off("mousemove"),setTimeout(function(){r=!1},50)}),!1}).on("click",function(){if(r)return!1}):n.addClass("no_drag"))}else n.addClass("str_static")};o.xml?t.ajax({url:o.xml,dataType:"xml",success:function(e){for(var i=t(e).find("text"),s=i.length,r=0;r<s;r++){var a=i.eq(r),l=a.text(),c=t("<span>").text(l).appendTo(n);"left"!=o.direction&&"right"!=o.direction||(c.css({display:"inline-block",textAlign:"right"}),r>0&&c.css({width:n.width()+c.width()})),"down"!=o.direction&&"up"!=o.direction||(c.css({display:"block",textAlign:"left"}),r>0&&c.css({paddingTop:n.height()}))}p()}}):p(),n.data({ini:p,startheight:c})})},update:function(){var e=t(this),o=t(".str_origin",e),i=t(".str_move_clone",e);o.stop(!0),i.remove(),e.data("ini")()},destroy:function(){var e=t(this),o=t(".str_move",e),i=e.data("startheight");t(".str_move_clone",e).remove(),e.off("mouseenter"),e.off("mousedown"),e.off("mouseup"),e.off("mouseleave"),e.off("mousemove"),e.removeClass("noStop").removeClass("str_vertical").removeClass("str_active").removeClass("no_drag").removeClass("str_static").removeClass("str_right").removeClass("str_down");var s=e.attr("style");if(s){for(var n=s.split(";"),r=0;r<n.length;r++){var a=t.trim(n[r]),l=a.search(/^height/g);l!=-1&&(n[r]="")}var c=n.join(";"),f=c.replace(/;+/g,";");";"==f?e.removeAttr("style"):e.attr("style",f),i&&e.css({height:i})}if(o.stop(!0),o.length){var h=o.html();o.remove(),e.html(h)}},pause:function(){var e=t(this),o=t(".str_move",e);o.stop(!0)},play:function(){var e=t(this);t(this).off("mousemove"),e.data("moveF")()}};t.fn.liMarquee=function(o){return e[o]?e[o].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==("undefined"==typeof o?"undefined":_typeof(o))&&o?void t.error("Метод "+o+" в jQuery.liMarquee не существует"):e.init.apply(this,arguments)}}(jQuery),TabSwitch.prototype.init=function(){for(var t=this,e=0;e<this.aInput.length;e++)this.aInput[e].index=e,this.aInput[e].onclick=function(){t.change(this)}},TabSwitch.prototype.change=function(t){for(var e=0;e<this.aInput.length;e++)this.aInput[e].className="",this.aDiv[e].style.display="none";t.className="active",this.aDiv[t.index].style.display="block"},TabSwitch.prototype.autoPlay=function(){var t=this;setInterval(function(){t.iNow==t.aInput.length-1?t.iNow=0:t.iNow++;for(var e=0;e<t.aInput.length;e++)t.aInput[e].className="",t.aDiv[e].style.display="none";t.aInput[t.iNow].className="active",t.aDiv[t.iNow].style.display="block"},2e3)},$(".marketing").show();var mySwiper=new Swiper(".swiper-container-banner",{autoplay:3e3,autoplayDisableOnInteraction:!1,grabCursor:!0,pagination:".swiper-pagination",prevButton:".swiper-button-prev",nextButton:".swiper-button-next",effect:"cube",cube:{slideShadows:!0,shadow:!0,shadowOffset:100,shadowScale:.6}}),mySwiperLoop=new Swiper(".swiper-container-loop",{slidesPerView:3,paginationClickable:!1,spaceBetween:30,autoplay:600,autoplayDisableOnInteraction:!1,loop:!0});$(".swiper-slide").hover(function(){mySwiper.stopAutoplay()},function(){mySwiper.startAutoplay()});var t1=new TabSwitch("tabswitch");t1.init(),t1.autoPlay();var slideArr=[],slideArrHeight=[];$(".card-slide").each(function(t,e){var o=$(this).offset(),i=$(this).height();slideArr.push(o),slideArrHeight.push(i)});var timer=null;$(document).scroll(function(){clearTimeout(timer);var t=parseInt($(document).scrollTop());t>=50&&t<=55?$(".header").fadeOut():t>55?($(".header").fadeIn().addClass("header-fixed"),$(".to-top").fadeIn()):t<50&&($(".header").fadeIn(),$(".header").removeClass("header-fixed"),$(".to-top").fadeOut())}),$(".to-top").click(function(){return $("body,html").animate({scrollTop:0},"fast"),!1}),$(".dowebok").liMarquee({scrollamount:100}),$(".dowebok-photo").liMarquee({scrollamount:200});var controller=new ScrollMagic.Controller,scene=new ScrollMagic.Scene({triggerElement:"#pinned-trigger1",duration:$(window).height()-100,triggerHook:0,reverse:!0}).setPin("#pinned-element1"),scene2=new ScrollMagic.Scene({triggerElement:"#pinned-trigger2",duration:400}).setPin("#pinned-element2"),scene3=new ScrollMagic.Scene({triggerElement:"#trigger1",triggerHook:0}).setClassToggle("#animate1","zap").addIndicators({name:"1 - add a class"}),scene4=new ScrollMagic.Scene({triggerElement:"#trigger2",triggerHook:0}).setClassToggle("#flexWrapp","zap").addIndicators({name:"1 - add a class"}),scene5=new ScrollMagic.Scene({triggerElement:"#trigger3",triggerHook:0}).setClassToggle("#dowebok","zap").addIndicators({name:"1 - add a class"}),scene6=new ScrollMagic.Scene({triggerElement:"#trigger4",triggerHook:0}).setClassToggle("#jumbotron","zap").addIndicators({name:"1 - add a class"}),scene7=new ScrollMagic.Scene({triggerElement:"#trigger5",triggerHook:0}).setClassToggle("#tabswitch","zap").addIndicators({name:"1 - add a class"});controller.addScene([scene,scene2,scene3,scene4,scene5,scene6,scene7]);