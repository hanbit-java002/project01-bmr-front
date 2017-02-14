require([
	"common",
], function() {
	var sectionInfo = {
		"02": {items: [], itemsPerPage: 3},
		"03": {items: [], itemsPerPage: 2},
		"04": {items: [], itemsPerPage: 3},
		"05": {items: [], itemsPerPage: 4}};

	function addSectionItems(sectionCode, page, items) {
		if (items) {
			sectionInfo[sectionCode].items = items;
		}

		items = sectionInfo[sectionCode].items;
		var itemsPerPage = sectionInfo[sectionCode].itemsPerPage;

		var startIndex = (page - 1) * itemsPerPage;
		var endIndex = Math.min(startIndex + itemsPerPage, items.length);

		var starNum;
		var i;
		var item;
		var sectionHTML;

		if (sectionCode === "02") {
			for (i = startIndex; i < endIndex; i++) {
				item = items[i];

				sectionHTML = "<li>";
				sectionHTML += "<div class='sec-img' " +
					"style=\"background-image: url('" + item.img + "')\">";
				sectionHTML += "<div class='shading'>";
				sectionHTML += "<div class='img-box-text'>";
				sectionHTML += "<div class='caption'>" + item.caption + "</div>";
				sectionHTML += "<div class='description'>"+item.description+"</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</li>";

				$(".section-contents.section" + sectionCode
														+ ">ul").append(sectionHTML);
			}

			$(".section-contents.section02>ul>li").on("click", function() {
				location.href = "dining_ticket.html";
			});
		}
		else if (sectionCode === "03") {
			for (i = startIndex; i < endIndex; i++) {
				item = items[i];


				sectionHTML = "<li>";
				sectionHTML = "<div class='editor-all-box'>";
				sectionHTML += "<div class='sec-img' " +
					"style=\"background-image: url('" + item.img + "')\">";
				sectionHTML += "<div class='shading'>";
				sectionHTML += "<div class='img-box-text'>";
				sectionHTML += "<div class='caption'>" + item.caption + "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "<div class='desc-box'>";
				sectionHTML += "<div class='description'>"+item.description+"</div>";
				sectionHTML += "<a class='more content-more'>더보기></a>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</li>";

				$(".section-contents.section"+ sectionCode
														+ ">ul").append(sectionHTML);
			}
		}
		else if (sectionCode === "04") {
			for (i = startIndex; i < endIndex; i++) {
				item = items[i];


				sectionHTML = "<li>";
				sectionHTML = "<div class='review-all-box'>";
				sectionHTML += "<div class='sec-img' " +
					"style=\"background-image: url('" + item.img + "')\">";
				sectionHTML += "<div class='shading'>";
				sectionHTML += "<div class='img-box-text'>";
				sectionHTML += "<div class='caption'>" + item.caption + "</div>";
				sectionHTML += "<div class='subtitle'>" + item.subtitle + "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "<div class='review-box'>";
				sectionHTML += "<div class='user-pic' " +
					"style=\"background-image: url('" + item.userPic + "')\"></div>";
				sectionHTML += "<div class='user-info'>";
				sectionHTML += "<div class='user-name'>"+item.userName+"</div>";
				sectionHTML += "<div class='count'>"+item.count+"</div>";
				sectionHTML += "<div class='rating'>";
				sectionHTML += "<div class='stars'>";

				<!-- grade점수에 따라 별찍기 -->
				var gr = parseFloat(item.grade) * 10;
				var a = gr/10;
				var b = gr%10;
				var c;


				<!-- 일단 정수인 값은 꽉찬 별을 주고 -->
				for(starNum=1; starNum<=a; starNum++) {
					sectionHTML += "<i class='fa fa-star'></i>";
				}

				<!-- 소수인 값은 범위에 따라 별을 달리 준다. -->
				if(b >= 3 && b <=7) { <!-- 반별 -->
					c = 4 - a;
					sectionHTML += "<i class='fa fa-star-half-o'></i>";
					while(c>0) {
						sectionHTML += "<i class='fa fa-star-o'></i>";
						c--;
					}
				}
				else if (b >= 0 && b <= 2) { <!-- 빈별 -->
					c = 5 - a;
					while(c>0) {
						sectionHTML += "<i class='fa fa-star-o'></i>";
						c--;
					}
				}
				else if (b >= 8 && b <= 9) { <!-- 꽉찬별 -->
					c = 4 - a;
					sectionHTML += "<i class='fa fa-star'></i>";
					while(c>0) {
						sectionHTML += "<i class='fa fa-star-o'></i>";
						c--;
					}
				}
				sectionHTML += "</div>";
				sectionHTML += "<div class='grade'>"+item.grade+"</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "<div class='preview'>"+item.preview+"</div>";
				sectionHTML += "<a class='more content-more'>더보기></a>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</li>";

				$(".section-contents.section"+ sectionCode
					+ ">ul").append(sectionHTML);
			}
		}
		else if (sectionCode === "05") {
			for (i = startIndex; i < endIndex; i++) {
				item = items[i];


				sectionHTML = "<li>";
				sectionHTML += "<div class='sec-img' " +
					"style=\"background-image: url('" + item.img + "')\">";
				sectionHTML += "<div class='shading'>";
				sectionHTML += "<div class='img-box-text'>";
				sectionHTML += "<div class='caption'>" + item.caption + "</div>";
				sectionHTML += "<div class='img-box-divider'></div>";
				sectionHTML += "<div class='description'>"+item.description+"</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</li>";

				$(".section-contents.section"+ sectionCode
					+ ">ul").append(sectionHTML);
			}
		}
	}

	function initSection(sectionCode) {
		var url = "/api/main/section/" + sectionCode + "/items";

		if (sectionCode === "02") {
			$.ajax(
				{url: url,
				success: function(items) {
					addSectionItems(sectionCode, 1, items);
				}});
		}
		else if (sectionCode === "03") {
			$.ajax(
				{url: url,
					success: function(items) {
						addSectionItems(sectionCode, 1, items);
					}});
		}
		else if (sectionCode === "04") {
			$.ajax(
				{url: url,
					success: function(items) {
						addSectionItems(sectionCode, 1, items);
					}});
		}
		else if (sectionCode === "05") {
			$.ajax(
				{url: url,
					success: function(items) {
						addSectionItems(sectionCode, 1, items);
					}});
		}
	}


	<!-- 배너 -->
	var bannerImgList = [];

	function rotateBannerImg() {
		var sectionHTML;
		var bannerImgCount = bannerImgList.length;

		for(var i=0; i<bannerImgCount; i++) {
			var bannerImgSrc = bannerImgList[i];

			sectionHTML += "<a class='piece' " +
				"style=\"background-image: url('" + bannerImgSrc + "')\">";
			sectionHTML += "</a>";
		}
		$("#banner>.b-slider>div.pieces").append(sectionHTML);
		$("#banner>.b-slider>div.pieces").append(sectionHTML);
		$("#banner>.b-slider>div.pieces").append(sectionHTML);
		$("#banner>.b-slider>div.pieces").append(sectionHTML);
	}

	function getBannerImgs() {
		$.ajax({
			url: "/api2/banner/imgs",	//스프링
			//url: "/api/banner/imgs",	//이클립스
			success: function(imgList) {
				bannerImgList = imgList;

				rotateBannerImg();
			}});
	}


	var list_standard = -600;
	var li_turn = 1;

	<!-- 왼쪽 화살표 클릭 시 -->
	$(".fa-chevron-circle-left").on("click", function() {
		<!-- left로 +100%씩 움직이지만 -300%일 때는 기준점인 -600%로 되돌아가서 무한 루프 돌도록-->
		if(list_standard >= -300) {
			$(".pieces").css("left", "-600%");
			list_standard = -600;
		}

		list_standard = list_standard + 100;
		$(".pieces").animate({
				left: "+=100%"}, 500, function() {
			}
		);

		<!-- 현재 그림 페이지를 나타내는 li -->
		switch(li_turn) {
			case 1:
				li_turn = 3;
				$(".b-slider>ul>li:nth-child("+li_turn+")").css("color", "#c91b3c");
				$(".b-slider>ul>li:nth-child("+ (li_turn-1) +")").css("color", "#fff");
				$(".b-slider>ul>li:nth-child("+ (li_turn-2) +")").css("color", "#fff");
				break;

			case 2:
				li_turn = li_turn - 1;
				$(".b-slider>ul>li:nth-child("+li_turn+")").css("color", "#c91b3c");
				$(".b-slider>ul>li:nth-child("+ (li_turn+1) +")").css("color", "#fff");
				$(".b-slider>ul>li:nth-child("+ (li_turn+2) +")").css("color", "#fff");
				break;

			case 3:
				li_turn = li_turn - 1;
				$(".b-slider>ul>li:nth-child("+li_turn+")").css("color", "#c91b3c");
				$(".b-slider>ul>li:nth-child("+ (li_turn-1) +")").css("color", "#fff");
				$(".b-slider>ul>li:nth-child("+ (li_turn+1) +")").css("color", "#fff");
				break;
		}
	});

	<!-- 오른쪽 화살표 클릭 시 -->
	$(".fa-chevron-circle-right").on("click", function() {
		<!-- left로 -100%씩 움직이지만 -900%일 때는 기준점인 -600%로 되돌아가서 무한 루프 돌도록-->
		if(list_standard <= -900) {
			$(".pieces").css("left", "-600%");
			list_standard = -600;
		}
		list_standard = list_standard - 100;
		$(".pieces").animate({
				left: "-=100%"}, 500, function() {
			}
		);

		<!-- 현재 그림 페이지를 나타내는 li -->
		switch(li_turn) {
			case 1:
				li_turn = li_turn + 1;
				$(".b-slider>ul>li:nth-child("+li_turn+")").css("color", "#c91b3c");
				$(".b-slider>ul>li:nth-child("+ (li_turn-1) +")").css("color", "#fff");
				$(".b-slider>ul>li:nth-child("+ (li_turn+1) +")").css("color", "#fff");
				break;

			case 2:
				li_turn = li_turn + 1;
				$(".b-slider>ul>li:nth-child("+li_turn+")").css("color", "#c91b3c");
				$(".b-slider>ul>li:nth-child("+ (li_turn-1) +")").css("color", "#fff");
				$(".b-slider>ul>li:nth-child("+ (li_turn-2) +")").css("color", "#fff");
				break;

			case 3:
				li_turn = 1;
				$(".b-slider>ul>li:nth-child("+li_turn+")").css("color", "#c91b3c");
				$(".b-slider>ul>li:nth-child("+ (li_turn+1) +")").css("color", "#fff");
				$(".b-slider>ul>li:nth-child("+ (li_turn+2) +")").css("color", "#fff");
				break;
		}
	});


	/** 실행 **/
	getBannerImgs();

	initSection("02");
	initSection("03");
	initSection("04");
	initSection("05");
});
