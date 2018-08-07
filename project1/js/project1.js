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