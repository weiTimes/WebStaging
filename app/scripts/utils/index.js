/**
 * tab选项卡
 * @param {id 容器}
 * html: id > input + div
 *
 * 实例化 => init() => autoPlay();
 */
function TabSwitch(id){  
    this.oParent = document.getElementById(id);  
    this.aInput = this.oParent.getElementsByTagName('input');  
    this.aDiv = this.oParent.getElementsByTagName('div');  
    this.iNow = 0;  
}  
  
TabSwitch.prototype.init = function(){  
    var This = this;  
    for(var i=0; i<this.aInput.length;i++){  
        this.aInput[i].index = i;  
        this.aInput[i].onclick=function(){  
            This.change(this);  
        }  
    }     
}  
  
TabSwitch.prototype.change = function(obj){  
    for(var i=0; i<this.aInput.length;i++){  
        this.aInput[i].className='';  
        this.aDiv[i].style.display='none';  
    }  
    obj.className='active';  
    this.aDiv[obj.index].style.display='block';  
}  
  
TabSwitch.prototype.autoPlay = function(){  
    var This = this;  
      
    setInterval(function(){  
          
        if(This.iNow == This.aInput.length-1){  
            This.iNow = 0;  
        }  
        else{  
            This.iNow++;  
        }  
          
        for(var i=0;i<This.aInput.length;i++){  
            This.aInput[i].className = '';  
            This.aDiv[i].style.display = 'none';  
        }  
        This.aInput[This.iNow].className = 'active';  
        This.aDiv[This.iNow].style.display = 'block';  
          
          
    },2000);  
}  