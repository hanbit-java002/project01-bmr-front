require([
	"common",
], function() {
	var common = require("common");


	<!-- 맵 -->
	var mapInfo = {
		map: null,
		center: {
			lat: 0,
			lng: 0}};


	function configureMap(list) {
		var minLat = 5000;
		var maxLat = -5000;
		var minLng = 5000;
		var maxLng = -5000;

		// Create a map object and specify the DOM element for display.
		mapInfo.map = new google.maps.Map(document.getElementById("map"), {
			center: mapInfo.center,
			scrollwheel: false,
			zoom: 15}
			);

		for(var i=0; i<list.stores.length; i++) {
			var store = list.stores[i];

			// Create a marker and set its position.
			var marker = new google.maps.Marker({
				map: mapInfo.map,
				position: store.latLng,
				title: store.name}
				);

			minLat = Math.min(minLat, store.latLng.lat);
			maxLat = Math.max(maxLat, store.latLng.lat);
			minLng = Math.min(minLng, store.latLng.lng);
			maxLng = Math.max(maxLng, store.latLng.lng);

			if(false) {
				console.log(marker);
			}
		}

		mapInfo.center = {
			lat: (maxLat + minLat) / 2,
			lng: (maxLng + minLng) / 2};

		var zoom = getBestZoom(minLat, maxLat, minLng, maxLng,
			$("#map").width(), $("#map").height(), 18);

		mapInfo.map.panTo(mapInfo.center);
		mapInfo.map.setZoom(zoom);
	}

	function initMap(list) {
		require(["async!https://maps.googleapis.com/maps/api/js?key=AIzaSyBJwUj-GnxH3F0-lyoHGAFohCwdeP5zUK0"], function() {
			configureMap(list);
		});
	}

	var tempList = {
		"stores": [
			{"name": "파스타마을",
			"latLng": {"lat": 37.5106902, "lng": 127.0561478}},
			{"name": "갑이다 짬뽕",
			"latLng": {"lat": 37.5573377, "lng": 126.935609}}]};


	<!-- 최적의 줌값 얻는 함수 -->
	function getBestZoom(minLat, maxLat, minLng, maxLng,
                         mapWidth, mapHeight, maxZoom) {
		var radius = 6371; // radius of the earth in km
		var oneRadian = 57.2958; // one radian
		var interval = 0;

		if ((maxLat - minLat) > (maxLng - minLng)) {
			interval = (maxLat - minLat) / 2;
		}
		else {
			interval = (maxLng - minLng) / 2;
		}

		minLat -= interval;
		maxLat += interval;
		minLng -= interval;
		maxLng += interval;

		var dist = (radius * Math.acos(Math.sin(minLat / oneRadian) *
			Math.sin(maxLat / oneRadian) + (Math.cos(minLat / oneRadian) *
			Math.cos(maxLat / oneRadian) *
			Math.cos((maxLng / oneRadian) - (minLng / oneRadian)))));

		var zoom = Math.floor(8 -
			Math.log(1.6446 * dist / Math.sqrt(2 * (mapWidth * mapHeight))) /
			Math.log(2));

		if (maxZoom) {
			return Math.min(zoom, maxZoom);
		}

		return zoom;
	}


	<!-- 스토어 리스트 제목 -->
	var listInfo = {items: [], itemsPerPage: 12};
	var resultHTML;

	/** var searchWord = common.getKeyWord(); **/
	var searchWord = "강남역";

		resultHTML = "<span class='highlight sc-value'>" + searchWord
		+ "</span>" + " 으(로) 총 <span class='highlight count'>"
		+ listInfo.itemsPerPage + "</span>개가 검색되었습니다.";

	$("#po-contents>.sec01>div.result").append(resultHTML);


	/** 달력  ------------------------------------------------------------ **/
	<!-- Calendar date객체 생성 -->
	var Calendar = new Date();

	<!-- 0번째 인덱스부터 일요일 넣기 -->
	var day_of_week = ["일", "월", "화", "수", "목", "금", "토"];

	<!-- 0번째 인덱스부터 1월 넣기 -->
	var month_of_year = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

	var year = Calendar.getFullYear();	<!-- yyyy년 -->
	var month = Calendar.getMonth();	<!-- 0~11 (1~12월 인덱스) -->
	var today = Calendar.getDate();		<!-- 1~31 (1~31일) -->
	var weekday = Calendar.getDay();	<!-- 0~6 (일요일~토요일 인덱스) -->


	Calendar.setDate(1);	<!-- 달력은 1일부터 표시해야하므로 .setDate()로 1일로 맞춤-->

	var DAYS_OF_WEEK = 7;	<!-- 일주일은 7일 -->
	var DAYS_OF_MONTH = 31;	<!-- 한달은 최대 31일 -->

	var calHTML;

	/**
	 *
	 * 함수 정의
	 *
	 * **/
	<!-- 달력정의 하는 함수-->
	function calendar() {
		calHTML = "<b class='month-and-year'>" + month_of_year[month] + " " + year + "</b>";
		calHTML += "<table class='calendar' border='0' cellspacing='0' cellpadding='2'>";


		<!-- 맨 첫줄은 요일을 나타냄-->
		calHTML += "<tr>";

		/** 요일 td(열) **/
		for(var i=0; i<DAYS_OF_WEEK; ++i) {
			<!-- 7번 돌면서 day_of_week의 값을 빼옴-->
			calHTML += "<td class='week'>" + day_of_week[i] + "</td>";
		}
		calHTML += "</tr>";


		/** 1일이 시작하기 전까지의 이전 요일들을 blank함.**/
		for(var i=0; i<weekday; ++i) {
			calHTML += "<td class='blank'> </td>";	<!-- blank (1일 이전의 날짜) -->
		}

		/** 1일부터 시작 **/
		for(var i=0; i<DAYS_OF_MONTH; ++i) {
			<!-- 날짜가 i보다 클 때만 표현 (날짜가 i보다 작으면, 다음달로 넘어가서 1일이 된것)-->
			if(Calendar.getDate() > i) {
				var day = Calendar.getDate();		<!-- 날짜(1~31) -->
				var week_day = Calendar.getDay();	<!-- 요일(0~6) -->


				if(week_day ==0) { <!-- 만약 일요일이면, tr로 한 칸 내려감-->
					calHTML += "<tr>";
				}

				if(day < today) {
					calHTML += "<td class='days-of-previous-today'>" + day + "</td>";
				}
				else if(day == today) { <!-- 만약 오늘 날짜라면 -->
					calHTML += "<td class='today'>" + day + "</td>";	<!-- 오늘 날짜 -->
				}
				else {
					switch(week_day) {
						case 0:				/** 일요일 **/
						calHTML += "<td class='sunday'>" + day + "</td>";
							break;

						case 6:				/** 토요일 **/
						calHTML += "<td class='saturday'>" + day + "</td>";
							calHTML += "</tr>";	<!-- 토요일이면 /tr -->
							break;

						default:			/** 평일 **/
						calHTML += "<td class='days'>" + day + "</td>";
							break;
					}
				}
			}

			/** 다음 날짜로 넘어가기 **/
			Calendar.setDate(Calendar.getDate() + 1);
		}
		calHTML += "</table>";
	}


	<!-- 날짜를 클릭하면 그 날짜에 border씌워지고, 그 날짜에 따라 bk-date와 pre-date가 달라지는 함수 -->
	function clickDay() {
		$(".today, .days").on("click", function() {
			$(".today, .days").css("border", "0");
			$(this).css("border", "solid 1px #c91b3c");
			$(".calendar-box").hide(event.stopPropagation());

			var clickDay = $(this).text();
			$(".bk-date").text(month_of_year[month] + " " + clickDay + "일");
			$(".bk-date").css("color", "#c91b3c");
			$(".pre-date").text(month_of_year[month] + " " + clickDay + "일");
		});
	}


	/**  ------------------
	 * 화살표를 통해 이번달과 다음달만 보여주도록...
	 * 오른쪽화살표는 한 번만 가능하고(다음달만)
	 * 왼쪽화살표는 오른쪽화살표가 눌러진 이후에만 한 번 가능(이번달로 회귀를 위해)**/

	var r_count=0;
	var l_count=1;

	$(".cal-right-arrow").on("click", function() {
		if(r_count != 1) {
			Calendar.setMonth(month+1);		<!-- 다음달로 넘어가기 위해 현재달+1 -->
			month = Calendar.getMonth();

			Calendar.setDate(1);

			calendar();	<!-- 함수호출... 다음 달. -->
			$(".calendar-box>table>tbody>tr>td").html(calHTML);
			$(".today").css("border", "0");
			clickDay();

			r_count = 1;
			l_count = 0;

			$(".cal-right-arrow").css("background-image", "url('../img/icon.none.right.arrow.JPG')");
			$(".cal-left-arrow").css("background-image", "url('../img/icon.left.arrow.JPG')");

			$(".cal-right-arrow").on("mouseover", function() {
				$(this).css("background-image", "url('../img/icon.none.right.hover.arrow.JPG')");
				$(this).css("cursor", "default");
			});
			$(".cal-right-arrow").on("mouseout", function() {
				$(this).css("background-image", "url('../img/icon.none.right.arrow.JPG')");
			});

			$(".cal-left-arrow").on("mouseover", function() {
				$(this).css("background-image", "url('../img/icon.left.hover.arrow.JPG')");
				$(this).css("cursor", "pointer");
			});
			$(".cal-left-arrow").on("mouseout", function() {
				$(this).css("background-image", "url('../img/icon.left.arrow.JPG')");
			});
		}
	});

	$(".cal-left-arrow").on("click", function() {
		if(l_count != 1) {
			Calendar.setMonth(month-1);		<!-- 현재 다음달인 상태이므로 이번달로 회귀하기위해 현재달-1 -->
			month = Calendar.getMonth();

			Calendar.setDate(1);

			calendar();	<!-- 함수호출... 다음 달에서 회귀하여 이번 달. -->
			$(".calendar-box>table>tbody>tr>td").html(calHTML);
			clickDay();

			l_count = 1;
			r_count = 0;

			$(".cal-left-arrow").css("background-image", "url('../img/icon.none.left.arrow.JPG')");
			$(".cal-right-arrow").css("background-image", "url('../img/icon.right.arrow.JPG')");

			$(".cal-left-arrow").on("mouseover", function() {
				$(this).css("background-image", "url('../img/icon.none.left.hover.arrow.JPG')");
				$(this).css("cursor", "default");
			});
			$(".cal-left-arrow").on("mouseout", function() {
				$(this).css("background-image", "url('../img/icon.none.left.arrow.JPG')");
			});
			$(".cal-right-arrow").on("mouseover", function() {
				$(this).css("background-image", "url('../img/icon.right.hover.arrow.JPG')");
				$(this).css("cursor", "pointer");
			});
			$(".cal-right-arrow").on("mouseout", function() {
				$(this).css("background-image", "url('../img/icon.right.arrow.JPG')");
			});
		}
	});
	/** ------------ **/


	calendar(); <!-- 함수호출... 최초로 보여지는 달. 이번달. -->

	$(".calendar-box>table>tbody>tr>td").append(calHTML);


	var popupHTML = month_of_year[month] + " " + today + "일" + "</div>";
	$(".bk-date").append(popupHTML);

	popupHTML = month_of_year[month] + " " + today + "일" + "</span>";
	$(".pre-date").append(popupHTML);


	clickDay();	<!-- 함수호출.. 이번달의 클릭한 날짜에 따라 bk-date와 pre-date가 달라짐. -->


	/** ---------------------------------------------------------------**/

	<!--  예약 팝업창 시간별 예약하기 창 -->
	var now = new Date();
	var h = now.getHours();

	var timeHTML;

	for(var i=h; i<21; i++) {
		var ii = i+1;
		if( i <12 ) { <!-- 오전 -->
			timeHTML = "<li> 오전 " + ii + ":00";
			timeHTML += "<li> 오전 " + ii + ":30";
		}
		else if( i >=12 ) { <!-- 오후 -->
			if( (ii-12) == 0) {
				timeHTML = "<li> 오후 " + 12 + ":00";
			}
			else {
				timeHTML = "<li> 오후 " + (ii-12) + ":00";
			}

			if( (ii-12) == 0) {
				timeHTML += "<li> 오후 " + 12 + ":30";
			}
			else {
				timeHTML += "<li> 오후 " + (ii-12) + ":30";
			}
		}
		timeHTML += "</li>";
		$(".time-box>ul").append(timeHTML);
	}

	$(".bk-time").text($(".time-box>ul>li:first-child").text());


	$(".time-box>ul>li").on("click", function() {
		$(".bk-time").text($(this).text());
		$(".bk-time").css("color", "#c91b3c");
		$(".pre-time").text($(this).text());
	});

	/** ---------------------------------------------------------------**/


	<!-- 스토어 리스트 -->
	function addSListItems(page, items) {
		if (items) {
			listInfo.items = items;
		}

		items = listInfo.items;
		var itemsPerPage = listInfo.itemsPerPage;

		var startIndex = (page - 1) * itemsPerPage;
		var endIndex = itemsPerPage;

		var starNum;
		var i;
		var item;
		var sectionHTML;


		for (i = startIndex; i < endIndex; i++) {
			/** 내가 json에 입력한 데이터는 6개밖에 없어서 화면에 12개
			뿌려주기 위해 i가 5초과하면 index를 0으로 초기화 후 1씩 더해줌-**/
			if(i>5) {
				if (i == 6) {
					index = 0;
				}
				else if(i>6) {
					++index;
				}
			}
			else if(i<=5) {
				var index = i;
			}

			item = items[index];

			sectionHTML = "<li>";
			sectionHTML = "<div class='store-all-box'>";
			sectionHTML += "<div class='sec-img' " +
				"style=\"background-image: url('" + item.img + "')\">";
			sectionHTML += "<div class='shading'>";


			sectionHTML += "<div class='st-users'>" + item.storeUsers + "</div>";
			sectionHTML += "<div class='icon-heart'><i class='fa fa-heart-o'></i></div>";

			if(item.ticket == "티켓") {
				sectionHTML += "<div class='st-ticket'>" + item.ticket + "</div>";
			}
			sectionHTML += "<div class='img-box-text'>";
			sectionHTML += "<div class='st-name'>" + item.storeName + "</div>";

			sectionHTML += "<div class='st-category'>"+item.storeCategory+"</div>";
			sectionHTML += "</div>";
			sectionHTML += "</div>";
			sectionHTML += "</div>";

			sectionHTML += "<div class='review-box'>";
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

			sectionHTML += "<div class='store-info'>";
			sectionHTML += "<div class='budget'>"+item.budget+"</div>";
			sectionHTML += "<div class='st-info'>"+item.info+"</div>";
			sectionHTML += "</div>";
			sectionHTML += "<div class='st-etc'>";
			var etc = item.etc;
			if(etc.menu == "메뉴있음") {
				sectionHTML += "<a class='menu'>"+item.etc.menu +"</a>";
				sectionHTML += "<a class='pic'>"+item.etc.pic +"</a>";
			}
			else {
				sectionHTML += "<a class='pic'>"+item.etc.pic +"</a>";
			}
			sectionHTML += "</div>";
			sectionHTML += "</div>";


			sectionHTML += "<div class='button-box'>";
			var butt = item.userUsing;
			if(butt.booking == "예약하기") {
				sectionHTML += "<button class='booking'>"+butt.booking+"</button>";
				sectionHTML += "<button class='reviewing'>"+butt.reviewing+"</button>";
			}
			else {
				sectionHTML += "<button class='reviewing'>"+butt.reviewing+"</button>";
			}
			sectionHTML += "</div>";
			sectionHTML += "</div>";
			sectionHTML += "</li>";

			$(".section-contents.section01>ul.sc-list").append(sectionHTML);
		} <!-- for문 종료 -->

		/** 하트 아이콘 클릭 시 하트색 바꾸고 & 함수 호출**/
		$(".icon-heart").on("click", function() {
			if($(this).children("i").hasClass("fa-heart-o")) {
				$(this).children("i").removeClass("fa-heart-o");
				$(this).children("i").toggleClass("fa-heart");

				clickIconHeart();
				$(".heart-click").text("매장을 찜하셨습니다.");
			}
			else {
				$(this).children("i").addClass("fa-heart-o");
				$(this).children("i").toggleClass("fa-heart");

				clickIconHeart();
				$(".heart-click").text("찜을 취소하셨습니다.");
			}
		});


		/**
		 * 예약 팝업창 보이기/숨기기 함수 호출
		 * **/
		<!-- '예약하기'버튼 클릭 시  -->
		$(".booking").on("click", function(event) {
			showBookingLayer(event);
			$(".bt-store-name").text($(this).closest(".store-all-box").find(".st-name").text());
			$(".bt-store-category").text($(this).closest(".store-all-box").find(".st-category").text());
		});
		$(".fa-times, .booking-confirm-btn, .clicked-filter-layer").on("click", function() {	<!-- x표나 화면클릭시 사라짐-->
			hideBookingLayer();
		});
	}


	/**
	 *
	 * 리스트 구현한거 이클립스의 json에서 데이터 가져와 실행하는 함수
	 *
	 * **/
	function initList() {
		var url = "/api/search/list/items";

		$.ajax(
			{
				url: url,
				success: function(items) {
					addSListItems(1, items);
				}});
	}


	<!-- 하트 아이콘 클릭 시 팝업창 보였다가 사라지는 함수 -->
	function clickIconHeart() {
		$(".heart-click").show();
		$("body").css("overflow", "hidden");
		$(".clicked-filter-layer").show();

		<!-- 화면을 클릭하거나, 3초 후에 사라짐 -->
		$(".clicked-filter-layer").on("click", function() {
			$(".heart-click").hide();
		});
		var timer = setTimeout(function() {
			$(".heart-click").fadeOut();

			$("body").css("overflow", "");
			$(".clicked-filter-layer").fadeOut();
		}, 3000);

		timer;
	}


	<!-- 예약 팝업창 보이기/숨기기 함수 -->
	function showBookingLayer(event) {
		event.stopPropagation();
		$("#popup-booking").show();

		<!-- 검색필터들 클릭되면 뒤에 있는 배경 화면에 넘치는 건 숨김 (=스크롤x), 즉 뒤에 화면은 고정됨 -->
		$("body").css("overflow", "hidden");
		$(".clicked-filter-layer").show();
	}
	function hideBookingLayer() {
		<!-- 지정했던 값들 초기화 -->
		count = 1;	<!-- search.hbs에 script에서 선언한 변수지만, 같은 자바스크립트이므로 .js에서도 사용가능-->
		$(".count-people").text("1");
		$(".bk-date").text(month_of_year[month] + " " + today + "일");
		$(".bk-date").css("color", "#323232");
		$(".today, .days").css("border", "0");
		$(".today").css("border", "solid 1px #c91b3c");
		$(".bk-time").text($(".time-box>ul>li:first-child").text());
		$(".bk-time").css("color", "#323232");
		$(".pre-date").text(month_of_year[month] + " " + today + "일");
		$(".pre-time").text($(".time-box>ul>li:first-child").text());
		$(".pre-count").text("1명");

		$("#popup-booking").hide();

		<!-- 고정된 화면 다시 원래대로. 넘치는 것들도 기본값으로 (=스크롤o) -->
		$("body").css("overflow", "");
		$(".clicked-filter-layer").hide();
	}


	/** 사이드 필터 **/
	<!-- '지역선택' 필터 -->
	$(".ft-region").on("click", function(event) {
		common.showRegionFilter(event);
		$(".filters").css("z-index", "");
	});
	$(".region-confirm, .clicked-filter-layer").on("click", function() {
		common.hideRegionFilter();
	});

	<!-- '음식 종류 선택' 필터 -->
	$(".ft-food").on("click", function(event) {
		common.showFoodFilter(event);
		$(".filters").css("z-index", "");
	});
	$(".food-confirm, .clicked-filter-layer").on("click", function() {
		common.hideFoodFilter();
	});


	<!-- '주차 가능'필터 -->
	$(".ft-parking, .parking").on("click", function(event) {
		<!-- selected클래스 선택되면 remove해주고, 그렇지않으면 add해줌 -->
		event.stopPropagation();

		if( $(this).hasClass("selected") ) {
			$(this).removeClass("selected");
			$(".ft-parking").children("i").css("background-position", "left top");
		}
		else {
			$(this).addClass("selected");
			$(".ft-parking").children("i").css("background-position", "left bottom");
		}
	});


	<!-- '예산(2인 기준)'필터 -->
	$(".ft-budget").on("click", function() {
		showBudgetBox();

		$(".ft-choice").on("click", function() {
			$(".budget-choice-box").hide();
			showSituationBox();
		});
	});
	$(".clicked-filter-layer, .fa-times, .budget-confirm-btn").on("click", function(event) {
		hideBudgetBox(event);
	});


	<!-- '상황별 선택' 필터 -->
	$(".ft-choice").on("click", function() {
		showSituationBox();

		$(".ft-budget").on("click", function() {
			$(".situation-choice-box").hide();
			showBudgetBox();
		});
	});
	$(".clicked-filter-layer, .fa-times, .situation-confirm-btn").on("click", function(event) {
		hideSituationBox(event);
	});


	<!-- 예산팝업창 체크박스(싱글체크) -->
	$(".select-budget>li").on("click", function() {
		<!-- selected클래스 선택되면 remove해주고, 그렇지않으면 add해줌 -->

		if($(".select-budget>li").hasClass("selected")) {
			$(".select-budget>li").removeClass("selected");
			$(".select-budget>li").css("color", "#666");
			$(".select-budget>li").children("i").css("background-position", "left top");

			$(this).addClass("selected");
			$(this).css("color", "#c91b3c");
			$(this).children("i").css("background-position", "left bottom");

			$(".ft-budget>p").text($(this).children("label").text() + "(2인기준)");
		}
		else {
			$(this).addClass("selected");
			$(this).children("i").css("background-position", "left bottom");
			$(".ft-budget>p").text($(this).children("label").text() + "(2인기준)");
		}
	});


	<!-- 상황별 선택 팝업창 체크박스(멀티체크) -->
	$(".select-situation>label").on("click", function(event) {
		event.stopPropagation();

		if($(this).children("li").children("input").is(":checked")) {
			$(this).children("li").children("i").css("background-position", "left bottom");
			$(this).children("li").children("p").css("color", "#c91b3c");
		}
		else {
			$(this).children("li").children("i").css("background-position", "left top");
			$(this).children("li").children("p").css("color", "#666");
		}
	});
	<!-- 상황별 선택 팝업창에서 상황들 선택하면 리스트에 추가되거나 삭제되는 것 -->
	$(".select-situation>label>li>input").change(function() {
		var state = $(this).is(":checked");
		var str = $(this).next("i").next("p").text();
		var si_count = $(this).closest("ul").find("input:checked").length;	<!-- 체크된 거 몇 개인지 구함-->

		if(si_count ===0) {
			$(".ft-choice>p").text("상황별 선택");
		}
		else {
			$(".ft-choice>p").text(si_count + "개 선택");
		}

		if(state) {	<!-- 체크되면 -->
			$("ul.si-choice-list").append("<li data-id='" + str + "'><span>" + str +"</span>" +
				"<i class='fa fa-window-close-o'></i></li>");	<!-- 리스트에 해당값을 id로 한 li로 넣고-->

			$(".ft-choice").css("height", "100%");				<!-- 사이드 필터의 길이 늘림 -->
			$(".ft-choice").css("max-height", "160px");
		}
		else {		<!-- 체크해제 되면 -->
			$("li[data-id=" +str+"]").remove();					<!-- 해당id를 가진 li 삭제 -->

			$(this).next("i").css("background-position", "left top");	<!-- 팝업창의 체크도 해제시킴 -->
			$(this).next("i").next("p").css("color", "#666");
		}
	});
	<!-- 상황별 선택 리스트에서 li클릭하면 팝업창의 input값 중 해당data-id를 가진 것이 checked가(true) 해제(false) 됨 -->
	$("ul.si-choice-list").delegate("li", "click", function(event) {
		event.stopPropagation();

		$(".select-situation>label>li>input#" + $(this).data("id")).prop("checked", false).change();
	});


	/**
	 *
	 * 사이드 필터의 팝업박스
	 * 보이기,숨기기 함수
	 *
	 * **/
	function showBudgetBox() {					<!-- '예산(2인 기준)'필터 -->
		$(".budget-choice-box").show();
		$(".filters").css("z-index", "10");

		$("body").css("overflow", "hidden");
		$(".clicked-filter-layer").show();
	}
	function hideBudgetBox(event) {
		event.stopPropagation();
		$(".budget-choice-box").hide();
		$(".filters").css("z-index", "");

		$("body").css("overflow", "");
		$(".clicked-filter-layer").hide();
	}
	function showSituationBox() {				<!-- '상황별 선택' 필터 -->
		$(".situation-choice-box").show();
		$(".filters").css("z-index", "10");

		$("body").css("overflow", "hidden");
		$(".clicked-filter-layer").show();
	}
	function hideSituationBox(event) {
		event.stopPropagation();
		$(".situation-choice-box").hide();
		$(".filters").css("z-index", "");

		$("body").css("overflow", "");
		$(".clicked-filter-layer").hide();
	}

	/** **/
	/** 실행 **/
	initMap(tempList);
	initList();
});
