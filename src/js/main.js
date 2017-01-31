require([
	"common",
], function() {
	$(window).on("click", function() {
		$(".search-regions").hide();
	});
	$("#main-search-form").on("click", function(event) {
		event.stopPropagation();
		$(".search-regions").toggle();
	});


	<!-- 지역 목록에 마우스오버 시 하이라이트 주기 -->
	$(".sc-seoul").on("mouseover", function() {
		$(this).css("background-color", "#ccc");
		$(this).css("color", "#323232");
	});
	$(".sc-seoul").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
	});
	$(".sc-busan").on("mouseover", function() {
		$(this).css("background-color", "#ccc");
		$(this).css("color", "#323232");
	});
	$(".sc-busan").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
	});
	$(".sc-inceon").on("mouseover", function() {
		$(this).css("background-color", "#ccc");
		$(this).css("color", "#323232");
	});
	$(".sc-inceon").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
	});
	$(".sc-daegu").on("mouseover", function() {
		$(this).css("background-color", "#ccc");
		$(this).css("color", "#323232");
	});
	$(".sc-daegu").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
	});
	$(".sc-daejeon").on("mouseover", function() {
		$(this).css("background-color", "#ccc");
		$(this).css("color", "#323232");
	});
	$(".sc-daejeon").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
	});
	$(".sc-gwangju").on("mouseover", function() {
		$(this).css("background-color", "#ccc");
		$(this).css("color", "#323232");
	});
	$(".sc-gwangju").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
	});
	$(".sc-jeju").on("mouseover", function() {
		$(this).css("background-color", "#ccc");
		$(this).css("color", "#323232");
	});
	$(".sc-jeju").on("mouseout", function() {
		$(this).css("background-color", "#fff");
		$(this).css("color", "#888");
	});

	<!-- '서울','부산' 목록 클릭 시 domain.html로 이동하고, 나머지는 알림창 띄우기 -->
	$(".search-regions>li").on("click", function() {
		if( $(this).attr("data-enable") == "true" )
			location.href = "domain.html";
		else {
			alert("서비스 준비중입니다. 곧 다양한 혜택으로 찾아뵙겠습니다.");
		}
	});


	<!-- 이미지에 마우스 오버 시 이미지 더 어둡게 하기 -->
	$(".img-seoul").on("mouseover", function() {
		$(".img-seoul>.shading").css("background", "rgba(0,0,0,0.8)");
	});
	$(".img-seoul").on("mouseout", function() {
		$(".img-seoul>.shading").css("background", "rgba(0,0,0,0.3)");
	});

	$(".img-busan").on("mouseover", function() {
		$(".img-busan>.shading").css("background", "rgba(0,0,0,0.8)");
	});
	$(".img-busan").on("mouseout", function() {
		$(".img-busan>.shading").css("background", "rgba(0,0,0,0.3)");
	});

	<!-- 이미지에 마우스 오버 시 '서비스 준비중입니다'띄우기 -->
	$(".img-incheon").on("mouseover", function() {
		$(".img-incheon>.center").css("opacity", "0.2");
		$(".img-incheon>.disable-service").show();
	});
	$(".img-incheon").on("mouseout", function() {
		$(".img-incheon>.center").css("opacity", "1");
		$(".img-incheon>.disable-service").hide();
	});
	$(".img-daegu").on("mouseover", function() {
		$(".img-daegu>.center").css("opacity", "0.2");
		$(".img-daegu>.disable-service").show();
	});
	$(".img-daegu").on("mouseout", function() {
		$(".img-daegu>.center").css("opacity", "1");
		$(".img-daegu>.disable-service").hide();
	});
	$(".img-daejeon").on("mouseover", function() {
		$(".img-daejeon>.center").css("opacity", "0.2");
		$(".img-daejeon>.disable-service").show();
	});
	$(".img-daejeon").on("mouseout", function() {
		$(".img-daejeon>.center").css("opacity", "1");
		$(".img-daejeon>.disable-service").hide();
	});
	$(".img-gwangju").on("mouseover", function() {
		$(".img-gwangju>.center").css("opacity", "0.2");
		$(".img-gwangju>.disable-service").show();
	});
	$(".img-gwangju").on("mouseout", function() {
		$(".img-gwangju>.center").css("opacity", "1");
		$(".img-gwangju>.disable-service").hide();
	});
	$(".img-jeju").on("mouseover", function() {
		$(".img-jeju>.center").css("opacity", "0.2");
		$(".img-jeju>.disable-service").show();
	});
	$(".img-jeju").on("mouseout", function() {
		$(".img-jeju>.center").css("opacity", "1");
		$(".img-jeju>.disable-service").hide();
	});

	$(".element.disable").on("click", function() {
		alert("서비스 준비중입니다. 곧 다양한 혜택으로 찾아뵙겠습니다.");
	});
});
