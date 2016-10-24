//���������Ƿ�֧��placeholder����
$.support.placeholder = false;
//Դ����
if ("placeholder" in document.createElement("input")) $.support.placeholder = true;

 $(function () {
	  $.support.placeholder = false;
	  if ("placeholder" in document.createElement("input")) $.support.placeholder = true;
  
	  if (!$.support.placeholder) {
		  var active = document.activeElement;
		  $(":text, textarea").live("focus", function () {
			  if ($(this).attr("placeholder") != "" && $(this).val() == $(this).attr("placeholder")) {
				  $(this).val("").removeClass("placeholder");
			  }
		  }).live("blur", function () {
			  if ($(this).attr("placeholder") != "" && ($(this).val() == "" || $(this).val() == $(this).attr("placeholder"))) {
				  $(this).val($(this).attr("placeholder")).addClass("placeholder");
			  }
		  });
		  $(":text, textarea").blur();
		  $(active).focus();
		  $("form").submit(function () {
			  $(this).find(".placeholder").each(function () { $(this).val(""); });
		  });
	  }
  
  });