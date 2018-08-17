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
//获取显示请假详细信息的input表单
	var holidayIfInput = document.getElementById('applyholidayif').getElementsByTagName('input');

//这是一个测试的语句
// holidayIfInput[0].value = "he";

//给每个单位表格添加点击事件，点击之后，还要把各种信息添加进去，
//还要实现同意、暂不处理、驳回的处理结果，并关闭信息页面
	for (var i = 0; i < applyHolidayTab.length; i++) {
		applyHolidayTab[i].onclick = function(){
			var $applyHolidayIf = $("#applyholidayif");
			$applyHolidayIf.css("display" , "block");
			$.get("后台",function(){
				holidayIfInput[0].value = holidayReview[i].applyPerson;
				holidayIfInput[1].value = holidayReview[i].number;
				holidayIfInput[2].value = holidayReview[i].department;
				holidayIfInput[3].value = holidayReview[i].startTime;
				holidayIfInput[4].value = holidayReview[i].endTime;
				holidayIfInput[5].value = holidayReview[i].applyType;
			//给表示处理结果的按钮添加点击事件，返回处理结果并关闭页面，这里可以尝试封装一个函数
				var result = document.getElementById('holiday_check_result').getElementsByTagName('button');
				result[0].onclick = function(){
					$.post("后台",
						holidayReview.result = "同意",function(){
							$applyHolidayIf.css("display" , "none");
						}
					)
				}
				result[1].onclick = function(){
					$.post("后台",
						holidayReview.result = "驳回",function(){
							$applyHolidayIf.css("display" , "none");
						}
					)
				}
				result[2].onclick = function(){
					$.post("后台",
						holidayReview.result = "未处理",function(){
							$applyHolidayIf.css("display" , "none");
						}
					)
				}
			}


		)
		}
	}
//获得出差审核单位表格
	var applyOutTab = document.getElementById('applyouttab')
	.getElementsByTagName('tr');

//获得显示出差详细信息的input表单
	var outIfInput = document.getElementById('applyoutif').getElementsByTagName('input');
//给每个表格添加点击事件
	for (var i = 0; i < applyOutTab.length; i++) {
		applyOutTab[i].onclick = function(){
			var $applyOutIf = $("#applyoutif");
			$applyOutIf.css("display","block");
			$.get("后台",function(){
				outIfInput[0].value = outReview[i].applyPerson;
				outIfInput[1].value = outReview[i].number;
				outIfInput[2].value = outReview[i].department;
				outIfInput[3].value = outReview[i].startTime;
				outIfInput[4].value = outReview[i].endTime;
				outIfInput[5].value = outReview[i].applyPlace;
			//给表示处理结果的按钮添加点击事件，返回处理结果并关闭页面，这里可以尝试封装一个函数
				var result = document.getElementById('out_check_result').getElementsByTagName('button');
				result[0].onclick = function(){
					$.post("后台",
						outReview.result = "同意",function(){
							$applyHolidayIf.css("display" , "none");
						}
					)
				}
				result[1].onclick = function(){
					$.post("后台",
						outReview.result = "驳回",function(){
							$applyHolidayIf.css("display" , "none");
						}
					)
				}
				result[2].onclick = function(){
					$.post("后台",
						outReview.result = "未处理",function(){
							$applyHolidayIf.css("display" , "none");
						}
					)

				}
			})
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

