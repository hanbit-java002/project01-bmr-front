define([
	"bootstrap",
], function() {
	<!-- 로고 클릭 시 도메인(포잉)으로 이동 -->
	$("#main-home-logo, #main-logo").on("click", function () {
		location.href = "domain.html";
	});


	$(window).on("click", function () {
		$(".main-other-regions").hide();
	});
	$("#main-region").on("click", function (event) {
		event.stopPropagation();
		$(".main-other-regions").toggle();
	});


	<!-- 지역 목록에 마우스오버 시 하이라이트 주기 -->
	$(".ot-seoul").on("mouseover", function () {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-seoul").on("mouseout", function () {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-busan").on("mouseover", function () {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-busan").on("mouseout", function () {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-inceon").on("mouseover", function () {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-inceon").on("mouseout", function () {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-daegu").on("mouseover", function () {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-daegu").on("mouseout", function () {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-daejeon").on("mouseover", function () {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-daejeon").on("mouseout", function () {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-gwangju").on("mouseover", function () {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-gwangju").on("mouseout", function () {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});
	$(".ot-jeju").on("mouseover", function () {
		$(this).css("background-color", "#f9dee3");
		$(this).css("color", "#c91b3c");
		$(this).css("font-weight", "bold");
	});
	$(".ot-jeju").on("mouseout", function () {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
		$(this).css("font-weight", "100");
	});


	<!-- '서울','부산' 목록 클릭 시 domain.html로 이동하고, 나머지는 알림창 띄우기 -->
	$(".main-other-regions>li").on("click", function () {
		if ($(this).attr("data-enable") == "true")
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
	$("#regions-choice").on("click", function (event) {
		showRegionFilter(event);
	});
	$(".region-confirm, .clicked-filter-layer").on("click", function () {
		hideRegionFilter();
	});

	<!-- '음식 종류 선택' 필터 -->
	$("#foods-choice").on("click", function (event) {
		showFoodFilter(event);
	});
	$(".food-confirm, .clicked-filter-layer").on("click", function () {
		hideFoodFilter();
	});


	<!-- 검색창 -->
	$("#search-main-bar").on("click", function (event) {
		event.stopPropagation();
		$("#search-bar-form").show();

		$(".clicked-filter-layer").show();
		$("body").css("overflow", "hidden");
		$("#search-main-bar").css("z-index", "31");
	});
	$(".clicked-filter-layer").on("click", function () {
		$("#search-bar-form").hide();

		$(".clicked-filter-layer").hide();
		$("body").css("overflow", "");
		$("#search-main-bar").css("z-index", "");
	});


	<!-- 검색창에서 엔터 혹은 검색 버튼 클릭 시-->
	function goSearchHtml() {
		$("#input-search-text").on("keydown", function (event) {
			if (event.keyCode == 13) { <!-- 엔터는 13 -->
				location.href = "search.html";
			}
		});
		$(".search-confirm").on("click", function () {
			location.href = "search.html";
		});
	}


	$(".select-multiple>label").on("click", function (event) {
		event.stopPropagation();

		if ($(this).children("li").children("input").is(":checked")) {
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
	$("#regions-choice-form .select-regions>li").on("click", function (event) {
		event.stopPropagation();

		$("#regions-choice-form .select-regions>li").removeClass("selected");
		$(this).addClass("selected");

		regions = $(this).attr("regions");
		<!-- region 내용을 받아옴 -->

		$(".region-details").hide();
		<!-- 우선 다 숨기고 -->

		<!-- 선택된 region만 보여주기 -->
		$(".region-details[regions='" + regions + "']").show();
	});


	<!-- 로그인 팝업창 -->
	function clickSignIn() {
		$(".sign-in-up-box").show();
		$(".section-sign-in").show();
		$(".section-sign-up").hide();
		$(".sec01-choice").show();
		$(".sec02-email").hide();
		$(".sec03-setup-password").hide();

		$(".s-email-in").on("click", function() {
			$(".sec01-choice").hide();
			$(".sec02-email").show();
		});

		$(".go-sign-up").on("click", function() {
			clickSignUp();
		});
	}
	<!-- 회원가입 팝업창 -->
	function clickSignUp() {
		$(".sign-in-up-box").show();
		$(".section-sign-in").hide();
		$(".section-sign-up").show();
		$(".sec01-choice.signup").show();
		$(".sec02-email").hide();
		$(".sec03-setup-password").hide();

		$(".s-email-in").on("click", function() {
			$(".sec01-choice.signup").hide();
			$(".sec02-email").show();
		});

		$(".go-sign-in").on("click", function() {
			clickSignIn();
		});
	}

	<!-- 메뉴바에 로그인 클릭 시 -->
	$(".menu-sign-in").on("click", function() {
		clickSignIn();

		$(".clicked-filter-layer").show();
		$("body").css("overflow", "hidden");
		$(".sign-in-up-box").css("z-index", "31");
	});
	<!-- 메뉴바에 회원가입 클릭 시 -->
	$(".menu-sign-up").on("click", function() {
		clickSignUp();

		$(".clicked-filter-layer").show();
		$("body").css("overflow", "hidden");
		$(".sign-in-up-box").css("z-index", "31");
	});
	<!-- 로그인/회원가입 팝업창 닫기 -->
	$(".clicked-filter-layer, .sign-in-up-box>.fa-times").on("click", function () {
		$(".sign-in-up-box").hide();

		$(".clicked-filter-layer").hide();
		$("body").css("overflow", "");
		$(".sign-in-up-box").css("z-index", "");
	});

	<!-- 회원가입 입력창에서 성별 클릭 시(둘 중 하나만 클릭되도록)-->
	$(".choice-gender.male").on("click", function() {
		$(this).addClass("clicked");
		$(".choice-gender.female").removeClass("clicked");
	});
	$(".choice-gender.female").on("click", function() {
		$(this).addClass("clicked");
		$(".choice-gender.male").removeClass("clicked");
	});

	goSearchHtml();


	<!-- 동그라미물음표 버튼 클릭 시 -->
	$(".q-button, i.fa-times.q").on("click", function() {
		$(".q-send-box").toggle();
		$(".q-input").focus();	<!-- 처음 실행 시에 포커스 된 상태로(콘텐츠박스의 아웃라인 빨간색) -->

		<!-- 클릭되면 투명도1인 상태로 유지하다가 한 번 더 클릭되면 다시 투명도0.5상태로-->
		$(".q-img").toggleClass("clicked");

		<!-- 창 닫고 나면 section 위치 초기화. -->
		if($(".q-send-box").hide) {
			$("section.sec01-email").css("left", "0%");
			$("section.sec02-add-func").css("left", "100%");
			$("section.sec03-function").css("left", "200%");
			$("section.sec04-idea").css("left", "-100%");
		}
	});

	return {
		showRegionFilter: showRegionFilter,
		hideRegionFilter: hideRegionFilter,
		showFoodFilter: showFoodFilter,
		hideFoodFilter: hideFoodFilter,
		goSearchHtml: goSearchHtml};
});
