//上传File控件
<input type="file" id="imgUpload" onchange="setImagePreview(event)" />
//预览图片元素
<img id="imgPreview" src="/images/limg150_5.jpg" />

	function setImagePreview(avalue) {

            var docObj = document.getElementById("imgUpload");//file控件
            var imgObjPreview = document.getElementById("imgPreview");//img标签

            var src = avalue.target || window.event.srcElement; //获取事件源，兼容chrome/IE
            var filename = src.value;
            filename.substring(filename.lastIndexOf('\\') + 1);//文件名
            var _ext=filename.substring(filename.lastIndexOf('.') + 1);//文件后缀名
            if (_ext != "jpg" && _ext != "gif" && _ext != "png" && _ext != "bmp")
            {
                alert("您上传的图片格式不正确，请重新选择!");
                var file = $("#imgUpload");
                file.after(file.clone().val(""));//清空File控件
                file.remove();
                return;
            }

            if (docObj.files && docObj.files[0]) {
                //火狐下，直接设img属性
                imgObjPreview.style.width = '150px';
                imgObjPreview.style.height = '180px';
                imgObjPreview.style.textAlign = 'center';
                //imgObjPreview.src = docObj.files[0].getAsDataURL();

                //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
                imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
            }
            else {
                //IE下，使用滤镜
                docObj.select();
                var imgSrc = document.selection.createRange().text;
                var localImagId = document.getElementById("localImag");
                //必须设置初始大小
                localImagId.style.width = "150px";
                localImagId.style.height = "180px";
                //图片异常的捕捉，防止用户修改后缀来伪造图片
                try {
                    localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                    localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
                }
                catch (e) {
                    alert("您上传的图片格式不正确，请重新选择!");
                    return false;
                }
                imgObjPreview.style.display = 'none';
                document.selection.empty();
            }
            return true;
        }