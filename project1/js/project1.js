function navLetf() {
	var [a,b] = [$("[id=left-apl]"),$(".in-ul")];
	var c = $(".left-cho");
	var arr = [$(".tag-man"),$(".tag-card"),$(".tag-apl"),$(".tag-out"),$(".tag_appro"),$(".tag_cardstua"),$(".tag_holistua"),$(".tag_outstua"),$(".tag_holicheck"),$(".tag_outcheck")];
	for(let i = 0;i<2;i++){
		$(a[i]).click(()=>{
			$(b[i]).toggle();
		});
	}
	for(let i = 0;i<10;i++){
		$(c[i]).click(()=>{			
			for(let j = 0;j<10;j++){
				if (j==i) {
					$(c[j]).css("font-weight","bold");
					$(c[j]).css("background-color","#999");
					arr[j].css("display","block");
				}
				else{
					$(c[j]).css("font-weight","normal");
					$(c[j]).css("background-color","#EEEEEE");
					arr[j].css("display","none");

				}
				
			};
		});
	}
}
navLetf();



//请假审核
// var $applyHolidayIf = $("#applyholidayif");
// $applyHolidayIf.css("display" , "block");



//下面这两个操作可以封装为一个函数

//获取请假审核表格单位
window.onload = function(){
var applyHolidayTab = document.getElementById('applyholidaytab')
.getElementsByTagName("tr");
//给每个单位表格添加点击事件，点击之后，还要把各种信息添加进去，
//还要实现同意、暂不处理、驳回的处理结果，并关闭信息页面
for (var i = 0; i < applyHolidayTab.length; i++) {
	applyHolidayTab[i].onclick = function(){
		var $applyHolidayIf = $("#applyholidayif");
		$applyHolidayIf.css("display" , "block");

	}
}
//获得出差审核单位表格
var applyOutTab = document.getElementById('applyouttab')
.getElementsByTagName('tr');
//给每个表格添加点击事件
for (var i = 0; i < applyOutTab.length; i++) {
	applyOutTab[i].onclick = function(){
		var $applyOutIf = $("#applyoutif");
		$applyOutIf.css("display","block");
	}
}

//这里是一个封装失败的函数
// function applyTabClick (applyTabId,applyIfId){
// 	var applyTab = document.getElementById('applyTabId').getElementsByTagName('tr');

// 	for (var i = 0; i < applyTab.length; i++) {
// 		applyTab[i].onclick = function(){
// 			var $applyIf = $("#applyIfId");
// 			$applyIf.css("display" , "block");
// 		}
// 	}
// }
// applyTabClick(applyholidaytab,applyholidayif);
// applyTabClick(applyouttab,applyoutif);







}

