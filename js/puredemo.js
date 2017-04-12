var EventUtil = {

    addHandler: function(element, type, handler) { //添加事件
        if (element.addEventListener) {
            element.addEventListener(type, handler, false); //使用DOM2级方法添加事件
        } else if (element.attachEvent) { //使用IE方法添加事件
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler; //使用DOM0级方法添加事件
        }
    },

    removeHandler: function(element, type, handler) { //取消事件
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    getEvent: function(event) { //使用这个方法跨浏览器取得event对象
        return event ? event : window.event;
    },

    getTarget: function(event) { //返回事件的实际目标
        return event.target || event.srcElement;
    },

    preventDefault: function(event) { //阻止事件的默认行为
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function(event) { //立即停止事件在DOM中的传播
        //避免触发注册在document.body上面的事件处理程序
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    getRelatedTarget: function(event) { //获取mouseover和mouseout相关元素
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) { //兼容IE8-
            return event.toElement;
        } else if (event.formElement) {
            return event.formElement;
        } else {
            return null;
        }
    },

    getButton: function(event) { //获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) { //将IE模型下的button属性映射为DOM模型下的button属性
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0; //按下的是鼠标主按钮（一般是左键）
                case 2:
                case 6:
                    return 2; //按下的是中间的鼠标按钮
                case 4:
                    return 1; //鼠标次按钮（一般是右键）
            }
        }
    },

    getWheelDelta: function(event) { //获取表示鼠标滚轮滚动方向的数值
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    },

    getCharCode: function(event) { //以跨浏览器取得相同的字符编码，需在keypress事件中使用
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }

};
var datareceive;
$(document).ready(function() {

    // init();
    submitYanzheng();
});

function init() {
    geshi();

}

function getJson() {
    $.ajax({
        url: "../json/login.json",
        type: "GET",
        dataType: "json",
        success: function(data) {

            var item = data.item;
            datareceive = item;
            // console.log(data.item[0].username);
            // return item;
            // for(var i=0;i<item.length;i++){
            // 	yanZheng(item[i].username,item[i].password);
            // 	console.log("ajax");
            // }
            console.log(datareceive);
            return item;
            // $.each(item,function(){
            // 	// alert(i+""+value);
            // 	yanZheng(this.username,this.password);
            // 	// console.log("ajax");
            // });
        },
        error: function(error) {
            alert("false");
            console.log(error);
        }

    });
}
var geshi = function(username, password) {
    // alert("yan");
    console.log(username);
    var form = document.getElementById("myForm");
    var $name = document.getElementById("name");
    var $password = document.getElementById("password");
    var $nameerror = document.getElementById("nameerror");
    var flag = 0;
    var $name_rule = //;
        $name.onblur = function() {
            console.log($name.value);
            var name = $name.value.toLowerCase();

            if (flag == 0) {
                console.log("false");
                var classVal = $nameerror.getAttribute("class");
                classVal = classVal.replace("hidden", "active");
                $nameerror.setAttribute("class", classVal);
                $nameerror.innerHTML = "";
                $nameerror.append("用户名不匹配");
            } else {
                console.log("name is ture" + name.value);
            }
        };
    EventUtil.addHandler($name, "onblur", function(event) {
        alert("fa");
        for (var i = 0; i < data.length; i++) {
            username = data[i].username;
            console.log(username);
            console.log(name.value);
            if (name.value == username) {
                flag = 1;
            }
        }
        if (flag == 0) {
            console.log("false");
        } else {
            console.log("name is ture" + name.value);
        }
    })


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
var yanZheng = function() {
    // alert("yan");

    var form = document.getElementById("myForm");
    var $name = document.getElementById("name");
    var $password = document.getElementById("password");
    var $error = document.getElementById("error");
    var flag = 0;
    $password.onblur = function() {
        // getJson();
        // alert(item);
        $.ajax({
            url: "../json/login.json",
            type: "GET",
            dataType: "json",
            success: function(data) {

                var item = data.item;
                datareceive = item;
                // console.log(data.item[0].username);
                // return item;
                // for(var i=0;i<item.length;i++){
                // 	yanZheng(item[i].username,item[i].password);
                // 	console.log("ajax");
                // }
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
                if (flag == 0) {
                        var classVal = $error.getAttribute("class");
                        classVal = classVal.replace("hidden", "active");
                        $error.setAttribute("class", classVal);
                        $error.innerHTML = "";
                        $error.append("用户名或者密码不匹配");
                        return false;
                    } else {
                        alert("success");
                        console.log("name is ture" + nameval);
                        console.log("password is "+passwordval);
                        return true;
                    }
                // $.each(datareceive, function(i,value) {
                // 	console.log(value);
                //     var username = this.username.toLowerCase();
                //     var password = this.password.toLowerCase();
                //     var nameval = $name.value.toLowerCase();
                //     var passwordval = $password.value.toLowerCase();
                //     console.log(username);
                //     console.log($name.value);
                //     // \
                //     if (in_array(nameval, username)) {
                //     	// if(in_array(passwordval,password))
                //         flag = 1;

                //     }
                   
                //     // };

                // });
                //  if (flag == 0) {
                //         var classVal = $error.getAttribute("class");
                //         classVal = classVal.replace("hidden", "active");
                //         $error.setAttribute("class", classVal);
                //         $error.innerHTML = "";
                //         $error.append("用户名或者密码不匹配");
                //         return false;
                //     } else {
                //         alert("success");
                //         // console.log("name is ture" + nameval);
                //         // console.log("password is "+passwordval);
                //         return true;
                //     }
               
            },
            error: function(error) {
                alert("false");
                console.log(error);
            }

        });
        // console.log(datareceive);




    };

};
var validateForm = function() {
    var name = document.getElementById("name");
    var password = document.getElementById("password");
    if (name.value == null || name.value == "") {
        alert("用户名不能为空");
        return false;
    }
    if (password.value == null || password.value == "") {
        alert("密码不能为空");
        return false;
    }
    return true;
};
var submitYanzheng = function() {
    var form = document.getElementById("myForm");
    yanZheng();
    EventUtil.addHandler(form, "submit", function(event) {
        event = EventUtil.getEvent(event);
        if (!validateForm() || !yanZheng()) {
            EventUtil.preventDefault(event);
        }
        // if (!yanZheng()) {
        // 	EventUtil.preventDefault(event);
        // }




    })
};
