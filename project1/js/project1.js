


//请假审核
// var $applyHolidayIf = $("#applyholidayif");
// $applyHolidayIf.css("display" , "block");



//下面这两个操作可以封装为一个函数


window.onload = function(){
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
	function ajax() {
	
    
	}
	function manChange() {
		var [a,b,c,d,e,f,g] = [$(".man-cha"),$(".man-cha input"),$(".man-td1"),$(".man-td1 input"),$(".bm"),$(".bm option"),$(".person")];
		var bool = true;
		function click(x) {
			if (x) {
				b[0].value = "保存";
				c[2].innerHTML = '<input type="radio" name="sex" value="男">男'+'<input type="radio" name="sex" value="女">女';
				c[3].innerHTML = '<input type="radio" name="hy" value="已婚">已婚'+'<input type="radio" name="hy" value="未婚">未婚';
				[c[4].innerHTML,c[5].innerHTML] = ["<input type='text' name='ifo' value='"+c[4].innerHTML+"'>","<input type='text' name='ifo'  value='"+c[5].innerHTML+"'>"];
				e[0].style.display = "inline-block";
				e[1].style.display = "none";
			}
			else{
				b[0].value = "修改数据";
				var [la,lb,lc] = [$("input[name=sex]"),$("input[name=hy]"),$("input[name=ifo]")];
				person(g[0],g[1],choose(la,f,1),choose(la,f,0),choose(lb,f,0),lc[0].value,lc[1].value);
				[c[2].innerHTML,c[3].innerHTML] = [choose(la,f,0),choose(lb,f,0)];
				[c[4].innerHTML,c[5].innerHTML] = [lc[0].value,lc[1].value];
				e[1].style.display = "inline-block";
				e[0].style.display = "none";
				e[1].innerHTML = choose(la,f,1);			
			}
			bool=!bool;
		}
	

		a[0].onclick=()=>{
			click(bool);
		}
	
	}
	function choose(x,y,z) {
		if (x[0].checked==true&&z==0) {
			return x[0].value;
		}
		else if (z) {
			for (var i = 0;i<y.length;i++) {
				if (y[i].selected) {
					return y[i].value;
				}
			}
		}
		else{
			return x[1].value;
		}
	}
	function card() {
		var a = $(".card-da span");
		var b = $(".card-da input");
		for(let i=0;i<2;i++){
			$(b[i]).one('click',()=>{
				$(a[i]).html(gettime(0));
				$.post("date.php",{
					"daka":{
						"date":gettime(1),
				   	 	"intime":a[0].innerText,
				   		"outtime":a[1].innerText,
				    	"situation":"出勤"
					}
				},function(e){
					console.log(JSON.parse(e).p1);
				});
			});
		}
	}
	function gettime(n) {
		var t = new Date();
		var [h,mi,s] = [t.getHours(),t.getMinutes(),t.getSeconds()];
		var [y,mo,d] = [t.getFullYear(),t.getMonth()+1,t.getDate()];
		var x = h+":"+mi+":"+s;
		var z = y+"."+mo+"."+d;
		if(n){
			return z;
		}
		else{
			return x;
		}
	
	}
	function person(username,number,department,sex,marrige,phone,mail) {
		var a = $(".person");
		$.post("person.php",{"user":{
			"number":number.innerText,
    		"userName":username.innerText,
			"department":department,
			"img":"weizhi",
			"sex":sex,
			"marrige":marrige,
			"phone":phone,
			"mail":mail}},function (e) {
					var json = JSON.parse(e);
					//console.log(json);
                	//p1(a[0],a[1],a[2],a[3],a[4],a[5],a[6],json);
            });	
	}
	function p1(username,number,department,sex,marrige,phone,mail,json) {
		username.innerHTML = json.userName;
		number.innerHTML = json.number;
		department.innerHTML = json.department;
		sex.innerHTML = json.sex;
		marrige.innerHTML = json.marrige;
		phone.innerHTML = json.phone;
		mail.innerHTML = json.mail;
	}
	function p(m1,n1,j1,m2,n2,j2,json) {
		m1.innerHTML = json.userName;
		n1.innerHTML = json.number;
		j1.innerHTML = json.department;
		m2.innerHTML = json.userName;
		n2.innerHTML = json.number;
		j2.innerHTML = json.department;
	}
	function cardtime() {
		var b =$("card-timer");

	}
	function qingjia() {
		var [n,a,x] = [$(".apf-sub input"),$(".apf-dcr textarea"),$(".apf-u2 input")];
		var [n2,a2,x2] = [$(".otf-sub input"),$(".otf-dcr textarea"),$(".otf-u2 input")];
		var t = $("input[name=thing]");
		var p = $(".person");
		n[1].onclick=()=>{
			$.post("date.php",{
				"leaveApplication":{
					"userName":p[7].innerText,
	            	"number":p[8].innerText,
	            	"department":p[9].innerText,
	            	"startTime0":x[0].value,
	            	"endTime0":x[1].value,
	            	"leaveType":choose(t,null,0),
	            	"leaveReason":a[0].value,
	            	"jinji":n[0].selected,
	            	"leaveApplicationBtn":"on"
				}
			},function(){});
			console.log(x[0].value,x[1].value,choose(t,null,0),a[0].value,n[0].checked);
		}
		n2[1].onclick=()=>{

		}
	}
// window.onload=function(){
	var a = $(".person");
	var b =$(".card-timer");
	$.ajax({
                type:"post",
                url:"user.php",
                data:{},
                success:function (e) {
                    var json = JSON.parse(e);
                    //a[0].innerHTML = json.userName;
                	p1(a[0],a[1],a[2],a[3],a[4],a[5],a[6],json);
                	p(a[7],a[8],a[9],a[10],a[11],a[12],json);
                	$(b[0]).html("今天是"+gettime(1));
                	console.log(b);
                }
            });
// }

	navLetf();
	ajax();
	manChange();
	card();
	qingjia();
	console.log("assd");














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

