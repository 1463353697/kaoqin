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


window.onload = function(){
	//获取审核表格单位
	var applyHolidayTab = document.getElementById('applyholidaytab')
	.getElementsByTagName("tr");
	var applyOutTab = document.getElementById('applyouttab')
	.getElementsByTagName('tr');
//获取显示详细信息的input表单
	var holidayIfInput = document.getElementById('applyholidayif').getElementsByTagName('input');
	var outIfInput = document.getElementById('applyoutif').getElementsByTagName('input');
	//获取显示详细信息的整个页面
	var $applyHolidayIf = $("#applyholidayif");
	var $applyOutIf = $("#applyoutif");
	//获取返回结果的按钮
	var holidayResult = document.getElementById('holiday_check_result').getElementsByTagName('button');
	var outResult = document.getElementById('out_check_result').getElementsByTagName('button');
    //获取是否紧急的按钮
	var jinjiIf = document.getElementById('jinji');


//这是一个测试的语句
// holidayIfInput[0].value = "he";

//给每个单位表格添加点击事件，点击之后，还要把各种信息添加进去，
//还要实现同意、暂不处理、驳回的处理结果，并关闭信息页面
	// for (var i = 0; i < applyHolidayTab.length; i++) {
	// 	applyHolidayTab[i].onclick = function(){
	// 		var $applyHolidayIf = $("#applyholidayif");
	// 		$applyHolidayIf.css("display" , "block");
	// 		$.get("后台",function(){
	// 			holidayIfInput[0].value = holidayReview[i].applyPerson;
	// 			holidayIfInput[1].value = holidayReview[i].number;
	// 			holidayIfInput[2].value = holidayReview[i].department;
	// 			holidayIfInput[3].value = holidayReview[i].startTime;
	// 			holidayIfInput[4].value = holidayReview[i].endTime;
	// 			holidayIfInput[5].value = holidayReview[i].applyType;
	// 		//给表示处理结果的按钮添加点击事件，返回处理结果并关闭页面，这里可以尝试封装一个函数
	// 			var result = document.getElementById('holiday_check_result').getElementsByTagName('button');
	// 			result[0].onclick = function(){
	// 				$.post("后台",
	// 					holidayReview.result = "同意",function(){
	// 						$applyHolidayIf.css("display" , "none");
	// 					}
	// 				)
	// 			}
	// 			result[1].onclick = function(){
	// 				$.post("后台",
	// 					holidayReview.result = "驳回",function(){
	// 						$applyHolidayIf.css("display" , "none");
	// 					}
	// 				)
	// 			}
	// 			result[2].onclick = function(){
	// 				$.post("后台",
	// 					holidayReview.result = "未处理",function(){
	// 						$applyHolidayIf.css("display" , "none");
	// 					}
	// 				)
	// 			}
	// 		}


	// 	)
	// 	}
	// }

	


// 给每个表格添加点击事件
// 这是封装的函数，理论上是可用的
// 	function applyTabClick(tab,applIf,input,review,result){ 	
// 		for (var i = 0; i < tab.length; i++) {
// 			tab[i].onclick = function(){
			
// 				applyIf.css("display","block");
// 				$.get("后台",function(){
// 					input[0].value = review[i].applyPerson;
// 					input[1].value = review[i].number;
// 					input[2].value = review[i].department;
// 					input[3].value = review[i].startTime;
// 					input[4].value = review[i].endTime;
// 					input[5].value = review[i].applyType;
//					jinjiIf.checked = holidayReview[i].jijin;
// 				//给表示处理结果的按钮添加点击事件，返回处理结果并关闭页面
				
// 					result[0].onclick = function(){
// 						$.post("后台",
// 							review.result = "同意",function(){
// 								applIf.css("display" , "none");
// 							}
// 						)
// 					}
// 					result[1].onclick = function(){
// 						$.post("后台",
// 							review.result = "驳回",function(){
// 								applyIf.css("display" , "none");
// 							}
// 						)
// 					}
// 					result[2].onclick = function(){
// 						$.post("后台",
// 							review.result = "未处理",function(){
// 								applyIf.css("display" , "none");
// 							}
// 						)

// 					}
// 				})
// 			}
// 		}
// 	}
// 	//调用此函数
// 	applyTabClick(applyHolidayTab,$applyHolidayIf,holidayIfInput,holidayReview,holidayResult);
// 	applyTabClick(applyOutTab,$applyOutIf,outIfInput,outReview,outResult);



// //这是未封装为函数的表格点击事件，上面封装的函数是根据这个原理来写的，经测试是可用的	
	for (var i = 0; i < applyHolidayTab.length; i++) {
		applyHolidayTab[i].onclick = function(){
			
			$applyHolidayIf.css("display" , "block");
			var jinjiIf = document.getElementById('jinji');
			jinjiIf.checked = true;
			
			$.get("后台",function(){
				holidayIfInput[0].value = holidayReview[i].applyPerson;
				holidayIfInput[1].value = holidayReview[i].number;
				holidayIfInput[2].value = holidayReview[i].department;
				holidayIfInput[3].value = holidayReview[i].startTime;
				holidayIfInput[4].value = holidayReview[i].endTime;
				holidayIfInput[5].value = holidayReview[i].applyType;
				jinjiIf.checked = holidayReview[i].jijin;

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

