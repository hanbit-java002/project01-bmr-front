define([
	"bootstrap",
], function() {
	<!-- 로고 클릭 시 도메인(포잉)으로 이동 -->
	$("#main-home-logo, #main-logo").on("click", function() {
		location.href = "domain.html";
	});


	$(window).on("click", function() {
		$(".main-other-regions").hide();
	});
	$("#main-region").on("click", function(event) {
		event.stopPropagation();
		$(".main-other-regions").toggle();
	});


	<!-- 지역 목록에 마우스오버 시 하이라이트 주기 -->
	$(".ot-seoul").on("mouseover", function() {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-seoul").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-busan").on("mouseover", function() {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-busan").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-inceon").on("mouseover", function() {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-inceon").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-daegu").on("mouseover", function() {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-daegu").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-daejeon").on("mouseover", function() {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-daejeon").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-gwangju").on("mouseover", function() {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-gwangju").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-jeju").on("mouseover", function() {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-jeju").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});


	<!-- '서울','부산' 목록 클릭 시 domain.html로 이동하고, 나머지는 알림창 띄우기 -->
	$(".main-other-regions>li").on("click", function() {
		if( $(this).attr("data-enable") == "true" )
			location.href = "domain.html";
		else {
			alert("서비스 준비중입니다. 곧 다양한 혜택으로 찾아뵙겠습니다.");
		}
	});


	/** 필터 보이기/숨기기 함수 정의 **/
	<!-- '지역선택' 필터 보이기/숨기기-->
	function showRegionFilter(event) {
		event.stopPropagation();
		$("#regions-choice-form").show();

		<!-- 검색필터들 클릭되면 뒤에 있는 배경 화면에 넘치는 건 숨김 (=스크롤x), 즉 뒤에 화면은 고정됨 -->
		$("body").css("overflow", "hidden");
		$(".clicked-filter-layer").show();
		$("#regions-choice").css("z-index", "31");
		$(".region-confirm").show();
	}
	function hideRegionFilter() {
		$("#regions-choice-form").hide();

		<!-- 고정된 화면 다시 원래대로. 넘치는 것들도 기본값으로 (=스크롤o) -->
		$("body").css("overflow", "");
		$(".clicked-filter-layer").hide();
		$("#regions-choice").css("z-index", "");
		$(".region-confirm").hide();
	}

	<!-- '음식 종류 선택' 필터 보이기/숨기기 -->
	function showFoodFilter(event) {
		event.stopPropagation();
		$("#foods-choice-form").show();

		<!-- 검색필터들 클릭되면 뒤에 있는 배경 화면에 넘치는 건 숨김 (=스크롤x), 즉 뒤에 화면은 고정됨 -->
		$("body").css("overflow", "hidden");
		$(".clicked-filter-layer").show();
		$("#foods-choice").css("z-index", "31");
		$(".food-confirm").show();
	}
	function hideFoodFilter() {
		$("#foods-choice-form").hide();

		<!-- 고정된 화면 다시 원래대로. 넘치는 것들도 기본값으로 (=스크롤o) -->
		$("body").css("overflow", "");
		$(".clicked-filter-layer").hide();
		$("#foods-choice").css("z-index", "");
		$(".food-confirm").hide();
	}


	/**
	 * 보이기/숨기기 한 함수 호출
	 * **/
	<!-- '지역선택' 필터 -->
	$("#regions-choice").on("click", function(event) {
		showRegionFilter(event);
	});
	$(".region-confirm, .clicked-filter-layer").on("click", function() {
		hideRegionFilter();
	});

	<!-- '음식 종류 선택' 필터 -->
	$("#foods-choice").on("click", function(event) {
		showFoodFilter(event);
	});
	$(".food-confirm, .clicked-filter-layer").on("click", function() {
		hideFoodFilter();
	});


	<!-- 검색창 -->
	$("#search-main-bar").on("click", function(event) {
		event.stopPropagation();
		$("#search-bar-form").show();

		$(".clicked-filter-layer").show();
		$("body").css("overflow", "hidden");
		$("#search-main-bar").css("z-index", "31");
	});
	$(".clicked-filter-layer").on("click", function() {
		$("#search-bar-form").hide();

		$(".clicked-filter-layer").hide();
		$("body").css("overflow", "");
		$("#search-main-bar").css("z-index", "");
	});


	<!-- 검색창에서 엔터 혹은 검색 버튼 클릭 시-->
	function getKeyWord() {
		var keyWord = document.getElementById("input-search-text").value;
		return keyWord;
	}
	function goSearchHtml() {
		var k;
		$("#input-search-text").on("keydown", function(event) {
			if(event.keyCode == 13) { <!-- 엔터는 13 -->
				k = getKeyWord();
				location.href = "search.html";
				alert("입력값: " + k);
			}
		});
		$(".search-confirm").on("click", function() {
			k = getKeyWord();
			location.href = "search.html";
			alert("입력값: " + k);
		});
		return k;
	}


	$(".select-multiple>label").on("click", function(event) {
		event.stopPropagation();

		if($(this).children("li").children("input").is(":checked")) {
			$(this).css("background-color", " #f9dee3");
			$(this).children("li").children("p").css("color", "#c91b3c");
			$(this).children("li").children("i").css("background-position", "left bottom");
		}
		else {
			$(this).css("background-color", " #fff");
			$(this).children("li").children("p").css("color", "#969696");
			$(this).children("li").children("i").css("background-position", "left top");
		}
	});


	<!-- 지역선택필터의 인기지역/서울강남/서울강북/지역전체 중 하나 택하면 그것만 보여주기-->
	$("#regions-choice-form .select-regions>li").on("click", function(event) {
		event.stopPropagation();

		$("#regions-choice-form .select-regions>li").removeClass("selected");
		$(this).addClass("selected");

		regions = $(this).attr("regions");    <!-- region 내용을 받아옴 -->

		$(".region-details").hide();    <!-- 우선 다 숨기고 -->

		<!-- 선택된 region만 보여주기 -->
		$(".region-details[regions='" + regions + "']").show();
	});


	goSearchHtml();
	return {
		showRegionFilter: showRegionFilter,
		hideRegionFilter: hideRegionFilter,
		showFoodFilter: showFoodFilter,
		hideFoodFilter: hideFoodFilter,
		getKeyWord: getKeyWord,
		goSearchHtml: goSearchHtml};
});