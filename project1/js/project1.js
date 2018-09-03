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

	//给不同的处理结果添加不一样的颜色
	function addColor (theTab,get1,class1,get2,class2,get3,class3) {
		var theTd = theTab.getElementsByTagName('td');
		for (var i = 0; i < theTd.length; i++) {
			if (theTd[i].innerHTML == get1) {
				theTd[i].className = class1;
			}
			if (theTd[i].innerHTML == get2) {
				theTd[i].className = class2;
			}
			if (theTd[i].innerHTML == get3) {
				theTd[i].className = class3;
			}
		}
	}

	//给表格偶数行添加阴影背景颜色
	function addBackColor (theTab) {
		var theTr = theTab.getElementsByTagName('tr');
		for (var i = 0; i < theTr.length; i++) {
			if(i%2 == 1) {
			theTr[i].className = "appro_table_2";
			}
		}

	}
	//获取审核表格
	var applyHoliday  =  document.getElementById('applyholidaytab');
	// var applyHolidayTab = applyHoliday.getElementsByTagName("tr");
	var applyOut = document.getElementById('applyouttab');
	// var applyOutTab = applyOut.getElementsByTagName('tr');
	// //获取显示详细信息的input表单
	// var holidayIfInput = document.getElementById('applyholidayif').getElementsByTagName('input');
	// var outIfInput = document.getElementById('applyoutif').getElementsByTagName('input');
	// //获取显示详细信息的整个页面
	// var $applyHolidayIf = $("#applyholidayif");
	// var $applyOutIf = $("#applyoutif");
	// //获取返回结果的按钮
	// var holidayResult = document.getElementById('holiday_check_result').getElementsByTagName('button');
	// var outResult = document.getElementById('out_check_result').getElementsByTagName('button');
 //    //获取是否紧急的按钮
	// var jinjiIf = document.getElementById('jinji');

	// addBackColor(applyHoliday);
	// addBackColor(applyOut);

	//这里是为审核部分创建表格和span标签
	function addCheckTb(block,appendInto){
		for (var i = 0; i < block.length; i++) {
			var tr = document.createElement('tr');
			appendInto.appendChild(tr);
			var td = document.createElement('td');
			tr.appendChild(td);
			for (var i = 0; i < 4; i++) {
				var span = document.createElement('span');
				tr.appendChild(span);
			}

		}

	}
	

	//请假审核
	$.get("后台",function(){
		addCheckTb(holidayReview,applyHoliday);
		var tr = applyHoliday.getElementsByTagName('tr')
		for (var i = 0; i < tr.length; i++) {
			var td = tr[i].getElementsByTagName('td');
			var span = td[0].getElementsByTagName('span');
			tr[i].td[0].span[0].innerHTML = holidayReview.number;
			tr[i].td[0].span[1].innerHTML = holidayReview.applyPerson;
			tr[i].td[0].span[2].innerHTML = holidayReview.date;
			tr[i].td[0].span[3].innerHTML = holidayReview.applyType;
			//添加紧急标志
			if (outReview[i].jinji == true) {
				var urgent = "<span>"+"【紧急】"+"</span>";
				tr[i].td[0].appendChild(urgent);
			}

		}
	});

	//出差审核
	$.get("后台",function(){
		addCheckTb(outReview,applyOut);
		var tr = applyOut.getElementsByTagName('tr')
		for (var i = 0; i < tr.length; i++) {
			var td = tr[i].getElementsByTagName('td');
			var span = td[0].getElementsByTagName('span');
			tr[i].td[0].span[0].innerHTML = outReview.number;
			tr[i].td[0].span[1].innerHTML = outReview.applyPerson;
			tr[i].td[0].span[2].innerHTML = outReview.date;
			tr[i].td[0].span[3].innerHTML = outReview.applyReason;

			//添加紧急标志
			if (outReview[i].jinji == true) {
				var urgent = "<span>"+"【紧急】"+"</span>";
				tr[i].td[0].appendChild(urgent);
			}

		}
	});




	var applyHolidayTab = applyHoliday.getElementsByTagName("tr");
	var applyOutTab = applyOut.getElementsByTagName('tr');
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

	addBackColor(applyHoliday);
	addBackColor(applyOut);




//这是一个测试的语句
// holidayIfInput[0].value = "he";


	


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
// 					jinjiIf.checked = holidayReview[i].jijin;
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



	//这个函数是为相应的板块创建tr和td标签
	function creatTrandTd(block,appendInto,tdNumber){
		for (var i = 0; i < block.length; i++) {
		var tr = document.createElement('tr');
		appendInto.appendChild(tr);
			for (var i = 0; i < tdNumber; i++) {
				var td = document.createElement('td');
				tr.appendChild(td);
			}
		}

	}

     //申请进度

	var applyProTab = document.getElementById('appro_table');
	$.get(后台,function(){
		creatTrandTd(applyProgress,applyProTab,4);
		var tr = applyProTab.getElementsByTagName('tr');
		for (var i = 0; i < tr.length; i++) {
			var td = tr[i+1].getElementsByTagName('td');
			tr[i+1].td[0].innerHTML = applyProgress[i].date;
			tr[i+1].td[1].innerHTML = applyProgress[i].applyType;
			tr[i+1].td[2].innerHTML = applyProgress[i].applySituation;
			tr[i+1].td[3].innerHTML = applyProgress[i].audit;

		}
	});

	addColor(applyProTab,"驳回","appro_situation_oppose","同意","appro_situation_agree","未处理","appro_situation_wait");
	addBackColor(applyProTab);

	//打卡情况
	var cardStuaTab = document.getElementById('stua_cardtb');
	$.get(后台,function(){
		creatTrandTd(dakaSituation,cardStuaTab,6);
		var tr = cardStuaTab.getElementsByTagName('tr');
		for (var i = 0; i < tr.length; i++) {
			var td = tr[i+1].getElementsByTagName('td');
			tr[i+1].td[0].innerHTML = dakaSituation[i].number;
			tr[i+1].td[1].innerHTML = dakaSituation[i].date;
			tr[i+1].td[2].innerHTML = dakaSituation[i].userName;
			tr[i+1].td[3].innerHTML = dakaSituation[i].intime;
			tr[i+1].td[4].innerHTML = dakaSituation[i].outtime;
			tr[i+1].td[5].innerHTML = dakaSituation[i].situation;
		}

	});

	addBackColor(cardStuaTab);
	addColor(cardStuaTab,"迟到","be_late","旷工","stay_away","旷工 迟到","stay_away");

	//请假情况
	var hliStuaTab = document.getElementById('hli_stuatb');
	$.get(后台,function(){
		creatTrandTd(leaveSituation,hliStuaTab,7);
		var tr = hliStuaTab.getElementsByTagName('tr');
		for (var i = 0; i < tr.length; i++) {
			var td = tr[i+1].getElementsByTagName('td');
			tr[i+1].td[0].innerHTML = leaveSituation[i].number;
			tr[i+1].td[1].innerHTML = leaveSituation[i].date;
			tr[i+1].td[2].innerHTML = leaveSituation[i].userName;
			tr[i+1].td[3].innerHTML = leaveSituation[i].applyType;
			tr[i+1].td[4].innerHTML = leaveSituation[i].startTime0;
			tr[i+1].td[5].innerHTML = leaveSituation[i].endTime0;
			tr[i+1].td[6].innerHTML = leaveSituation[i].resultHand;
		}
	})
	addBackColor(hliStuaTab);
	addColor(hliStuaTab,"驳回","ap_situation_oppose","未处理","ap_situation_wait","通过","ap_situation_agree");


	//出差情况
	var outStuaTab = document.getElementById('out_stuatb');
	$.get(后台,function(){
		creatTrandTd(awaySituation,outStuaTab,7);
		for (var i = 0; i < tr.length; i++) {
			var td = tr[i+1].getElementsByTagName('td');
			tr[i+1].td[0].innerHTML = leaveSituation[i].number;
			tr[i+1].td[1].innerHTML = leaveSituation[i].date;
			tr[i+1].td[2].innerHTML = leaveSituation[i].userName;
			tr[i+1].td[3].innerHTML = leaveSituation[i].awayLocation;
			tr[i+1].td[4].innerHTML = leaveSituation[i].startTime1;
			tr[i+1].td[5].innerHTML = leaveSituation[i].endTime1;
			tr[i+1].td[6].innerHTML = leaveSituation[i].resultHand;
		}

	});

	addBackColor(outStuaTab);
	addColor(outStuaTab,"驳回","ap_situation_oppose","未处理","ap_situation_wait","通过","ap_situation_agree")







}

