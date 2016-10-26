 //加载不到 图片 时显示 默认图片
function ImageLoadEx() { 
            //加载图片 出现404状态时触发
            $('img').error(function () {  
		//将加载不到的图片 的src属性 修改成默认 图片 ，注意：默认图片必须保证存在，否则 会一直 调用 此函数
                $(this).attr("src", "Image/default.jpg");  
            });
        }
