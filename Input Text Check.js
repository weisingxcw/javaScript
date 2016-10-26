
//******************************键值判断限制输入框******************************
//允许输入键值数组
var keycode = { 8: 1, 13: 1, 48: 1, 49: 1, 50: 1, 51: 1, 52: 1, 53: 1, 54: 1, 55: 1, 56: 1, 57: 1 };
        function OnlyInt(e) {
            e = e || event;
            var key = e.keyCode || e.which;
            return !!keycode[key];
            //输入字符不存在键值数组中，就Retrun False
        }

<input type='text' onkeypress='return OnlyInt(event)' onkeydown='return OnlyInt(event)'></input>

//******************************js中用正则表达式 过滤特殊字符 ,校验所有输入域是否含有特殊符号******************************

function stripscript(s)
{
	var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
	var rs = "";
	for (var i = 0; i < s.length; i++) {
		rs = rs+s.substr(i, 1).replace(pattern, '');
	}
	return rs;
} 