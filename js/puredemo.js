// var EventUtil = {

//     addHandler: function(element, type, handler) { //添加事件
//         if (element.addEventListener) {
//             element.addEventListener(type, handler, false); //使用DOM2级方法添加事件
//         } else if (element.attachEvent) { //使用IE方法添加事件
//             element.attachEvent("on" + type, handler);
//         } else {
//             element["on" + type] = handler; //使用DOM0级方法添加事件
//         }
//     },

//     removeHandler: function(element, type, handler) { //取消事件
//         if (element.removeEventListener) {
//             element.removeEventListener(type, handler, false);
//         } else if (element.detachEvent) {
//             element.detachEvent("on" + type, handler);
//         } else {
//             element["on" + type] = null;
//         }
//     },

//     getEvent: function(event) { //使用这个方法跨浏览器取得event对象
//         return event ? event : window.event;
//     },

//     getTarget: function(event) { //返回事件的实际目标
//         return event.target || event.srcElement;
//     },

//     preventDefault: function(event) { //阻止事件的默认行为
//         if (event.preventDefault) {
//             event.preventDefault();
//         } else {
//             event.returnValue = false;
//         }
//     },

//     stopPropagation: function(event) { //立即停止事件在DOM中的传播
//         //避免触发注册在document.body上面的事件处理程序
//         if (event.stopPropagation) {
//             event.stopPropagation();
//         } else {
//             event.cancelBubble = true;
//         }
//     },

//     getRelatedTarget: function(event) { //获取mouseover和mouseout相关元素
//         if (event.relatedTarget) {
//             return event.relatedTarget;
//         } else if (event.toElement) { //兼容IE8-
//             return event.toElement;
//         } else if (event.formElement) {
//             return event.formElement;
//         } else {
//             return null;
//         }
//     },

//     getButton: function(event) { //获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个
//         if (document.implementation.hasFeature("MouseEvents", "2.0")) {
//             return event.button;
//         } else {
//             switch (event.button) { //将IE模型下的button属性映射为DOM模型下的button属性
//                 case 0:
//                 case 1:
//                 case 3:
//                 case 5:
//                 case 7:
//                     return 0; //按下的是鼠标主按钮（一般是左键）
//                 case 2:
//                 case 6:
//                     return 2; //按下的是中间的鼠标按钮
//                 case 4:
//                     return 1; //鼠标次按钮（一般是右键）
//             }
//         }
//     },

//     getWheelDelta: function(event) { //获取表示鼠标滚轮滚动方向的数值
//         if (event.wheelDelta) {
//             return event.wheelDelta;
//         } else {
//             return -event.detail * 40;
//         }
//     },

//     getCharCode: function(event) { //以跨浏览器取得相同的字符编码，需在keypress事件中使用
//         if (typeof event.charCode == "number") {
//             return event.charCode;
//         } else {
//             return event.keyCode;
//         }
//     }

// };

$(document).ready(function() {

    init();
    submitYanzheng();
});

function init() {    
    var $submit=document.getElementById("submit");
    var i=1;
    $submit.disabled=true;
    var timer=setInterval(function(){
    	var html=$('html')[0];
    	var img=["../resource/img/backgrounds/1.jpg","../resource/img/backgrounds/2.jpg","../resource/img/backgrounds/3.jpg"];
    	
    	html.style.background="url("+img[i++%3]+") no-repeat";
    	html.style.backgroundSize="cover";
    	
    },2500)
    geshi();
}


var geshi = function() {
    var form = document.getElementById("myForm");
    var $name = document.getElementById("name");
    var $password = document.getElementById("password");
    var $error = document.getElementById("error");
    var $submit=document.getElementById("submit");
   	var flagname=0; 
    var flagpassword=0;
    var reflag=false;
    $name.onchange = function() {
    	
        console.log($name.value);
        $submit.disabled=false;
        if(/[^\w]/.test($name.value)){
        	var classVal = $error.getAttribute("class");
            classVal = classVal.replace("hidden", "active");
            $error.setAttribute("class", classVal);
        	$error.innerHTML = "";
            $error.append("用户名格式不对，应由字母数字组成");

        }
        else{ 

         	if((/^[a-zA-Z0-9_-]{3,6}$/).test($name.value)){
         		var classVal = $error.getAttribute("class");
        		classVal = classVal.replace("active", "hidden");
                $error.setAttribute("class", classVal);
                $error.innerHTML = "";
                flagname=1;
        	}
        	else{
        		var classVal = $error.getAttribute("class");
                 classVal = classVal.replace("hidden", "active");
              	 $error.setAttribute("class", classVal);
        		$error.innerHTML = "";
            	$error.append("用户名数量不对，应由3-6位组成");
        	}
        }
        if(flagname==0){
        	
        	$name.style.borderColor="#e9322d";
        	// $name.style.outlineColor="#e9322d";
        }
        else{
        	$name.style.borderColor="#ccc";
        	flagname=0;
   			// $name.style.outlineColor="#ccc";
        }
        
     
    }; 
    
     $password.onchange = function() {
        console.log($password.value);
        $submit.disabled=false;
        if(/[^\w]/.test($password.value)){
        	var classVal = $error.getAttribute("class");
            classVal = classVal.replace("hidden", "active");
            $error.setAttribute("class", classVal);
        	$error.innerHTML = "";
            $error.append("密码格式不对，应由字母数字组成");
        }
        else{ 

         	if((/^[a-zA-Z0-9_-]{3,6}$/).test($password.value)){
         		var classVal = $error.getAttribute("class");
        		classVal = classVal.replace("active", "hidden");
                $error.setAttribute("class", classVal);
                $error.innerHTML = "";
                flagpassword=1;
        	}
        	else{
        		var classVal = $error.getAttribute("class");
                 classVal = classVal.replace("hidden", "active");
              	 $error.setAttribute("class", classVal);
        		$error.innerHTML = "";
            	$error.append("密码数量不对，应由3-6位组成");
        	}
        }
         if(flagpassword==0){
        	
        	$password.style.borderColor="#e9322d";
        	// $name.style.outlineColor="#e9322d";
        }
        else{
        	$password.style.borderColor="#ccc";
        	flagpassword=0;
   			// $name.style.outlineColor="#ccc";
        }
        var flag=0;
         $.ajax({
            url: "../json/login.json",
            type: "GET",
            dataType: "json",
            success: function(data) {
            	// alert("yanpas");
                var datareceive = data.item;              
                console.log(datareceive);
                console.log(datareceive.length);
                for(var i=0;i<datareceive.length;i++){
                	var username = datareceive[i].username.toLowerCase();
                    var password = datareceive[i].password.toLowerCase();
                    var nameval = $name.value.toLowerCase();
                    var passwordval = $password.value.toLowerCase();
                    console.log(username);
                    console.log($name.value);
                     if (in_array(nameval, username)) {
                    	if(in_array(passwordval,password))
                        flag = 1;
                    }
                    
                }
                if($error.innerHTML == ""){

                if (flag == 0) {
                        var classVal = $error.getAttribute("class");
                        classVal = classVal.replace("hidden", "active");
                        $error.setAttribute("class", classVal);
                        $error.innerHTML = "";
                        $error.append("用户名与密码不匹配");
                       // return false;
                    } else {
                        alert("登陆成功"+nameval);
                        reflag=true;
                         flag=0;                        
                        console.log("name is ture" + nameval);
                        console.log("password is "+passwordval);
                        // return true;
                    }
                
               }
            },
            error: function(error) {
                alert("false");
                console.log(error);
                // return false;
            }

        });
    }; 
    
    return reflag;
            

};

function in_array(needle, haystack) {
    if (haystack) {
        var data = haystack.split(",")
        var flag = false;       
        if (data.length == 1) {
           
            if (data == needle) {
                return true;
            } else {
                return false;
            }
        }
    }
   
}

var validateForm = function() {
    var name = document.getElementById("name");
    var password = document.getElementById("password");
    if (name.value == null || name.value == "") {
        // alert("用户名不能为空");
        return false;
    }
    if (password.value == null || password.value == "") {
        var classVal = $error.getAttribute("class");
                 classVal = classVal.replace("hidden", "active");
              	 $error.setAttribute("class", classVal);
        		$error.innerHTML = "";
            	$error.append("密码不能为空");
        return false;
    }
    return true;
};
var submitYanzheng = function() {
    var form = document.getElementById("myForm");
    // console.log(form.elements["name"]);
    // geshi();
    
 	form.addEventListener("submit",function(event){
    // EventUtil.addHandler(form, "submit", function(event) {
    	// geshi();
    	// yanZheng();
    	// alert("d");
        // event = EventUtil.getEvent(event);
        // var target=EventUtil.getTarget(event);
        var btn=target.elements["submit-btn"];
        if (!validateForm() || !geshi()) {
            event.preventDefault();
        }
        // btn.disabled=true;
        // if(geshi()){
        // 	geshi();
        // }       
        return true;
        // if (!yanZheng()) {
        // 	EventUtil.preventDefault(event);
        // }




    },false);
};
