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


	var ch_count;
	$(".select-multiple>label").on("click", function (event) {
		event.stopPropagation();
		var fd_count = $(this).closest("ul").find("input:checked").length;

		if(fd_count === 0) {
			$("#foods-choice>#choice-text").text("음식 종류 선택");
		}
		else {
			if(fd_count >=1) {
				if($("#foods-choice>#choice-text").text().length >4) {
					if(fd_count == 2) {
						ch_count = fd_count -1;
						if(ch_count == 1) {
							$(".food-etc").text("");
						}
						else {
							$(".food-etc").text("외 "+ ch_count +"개");
						}
					}
					else if(fd_count >= 3) {
						ch_count = fd_count-2;
						$(".food-etc").text("외 "+ ch_count +"개");
					}
					else if(fd_count == 1) {
						$("#foods-choice>#choice-text").text($(this).closest("ul").find("input:checked").next().text());
					}
				}
				else {
					$("#foods-choice>#choice-text").append("," + $(this).children("li").children("p").text());
					$("#foods-choice>#choice-text").append("<span class='food-etc'></span>");
				}
			}
		}

		<!-- 체크박스 체크 되면 -->
		if ($(this).children("li").children("input").is(":checked")) {
			$(this).css("background-color", " #f9dee3");
			$(this).children("li").children("p").css("color", "#c91b3c");
			$(this).children("li").children("i").css("background-position", "left bottom");

			if(fd_count === 1) {
				$("#foods-choice>#choice-text").text($(this).children("li").children("p").text());
			}
		}
		<!-- 체크박스 체크 해제 되면 -->
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


	<!-- 로그인/회원가입 팝업창 닫기 함수 -->
	function closeSignInUpBox() {
		$(".sign-in-up-box").hide();

		$(".clicked-filter-layer").hide();
		$("body").css("overflow", "");
		$(".sign-in-up-box").css("z-index", "");
	}

	$(".clicked-filter-layer, .sign-in-up-box>.fa-times").on("click", function () {
		closeSignInUpBox();
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


	function signUp() {
		var userEmail = $("#user-email").val();
		var userPw = $("#user-pw").val();
		var userPwCfm = $("#user-pw-cfm").val();
		var userName = $("#user-name").val();
		var userGender;
		var userBirthY = $("#user-birth-y").val();
		var userBirthM = $("#user-birth-m").val();
		var userBirthD = $("#user-birth-d").val();

		if(userEmail === undefined || userEmail === "") {
			alert("이메일을 입력하세요.");
			$("#user-email").focus();
			return;
		}
		else if(userPw === undefined || userPw === "") {
			alert("비밀번호를 입력하세요.");
			$("#user-pw").focus();
			return;
		}
		else if(userPw !== userPwCfm) {
			alert("비밀번호 확인을 동일하게 입력하세요.");
			$("#user-pw-cfm").focus();
			return;
		}
		else if(userName === undefined || userName === "") {
			alert("이름을 입력하세요.");
			$("#user-name").focus();
			return;
		}
		else if(!$(".choice-gender.male").hasClass("clicked") && !$(".choice-gender.female").hasClass("clicked")) {
			alert("성별을 선택하세요.");
			return;
		}
		else if(userBirthY === undefined || userBirthY === "") {
			alert("생년월일을 입력하세요.");
			$("#user-birth-y").focus();
			return;
		}
		else if(userBirthM === undefined || userBirthM === "") {
			alert("생년월일을 입력하세요.");
			$("#user-birth-m").focus();
			return;
		}
		else if(userBirthD === undefined || userBirthD === "") {
			alert("생년월일을 입력하세요.");
			$("#user-birth-d").focus();
			return;
		}

		if($(".choice-gender.male").hasClass("clicked")) {
			userGender = "남자";
		}
		else if($(".choice-gender.female").hasClass("clicked")) {
			userGender = "여자";
		}

		$.ajax({
			url: "/api2/member/signup",		//스프링(sts)에서 리퀘스트매핑으로 지정한 url
			method: "POST",
			data: {
				userEmail: $("#user-email").val(),
				userPw: $("#user-pw").val(),
				userName: $("#user-name").val(),
				userGender: userGender,
				userBirth: $("#user-birth-y").val() + "" +$("#user-birth-m").val() + "" + $("#user-birth-d").val(),
			},
			success: function(data) {
				if(data.result === "ok") {
					alert(userName + "님 환영합니다.");
					closeSignInUpBox();

					$(".menu-sign-in").hide();
					$(".menu-sign-up").hide();
					$(".menu-sign-out").show();

					//회원가입 되면 즉시 방금 가입한 정보로 로그인 상태가 되도록..
					$.ajax({
						url: "/api2/member/signin",
						method: "POST",
						data: {
							userEmail: userEmail,
							userPw: userPw
						},
						success: function(data) {
							if(data.result === "ok") {
								return;
							}
						}
					});
				}
				else {
					alert("정상적으로 가입되지 않았습니다.");
				}
			},
			error: function(jqXHR) {
				alert(jqXHR.responseJson.message);
			}
		});
	}


	function signIn() {
		var memberEmail = $("#member-email").val();
		var memberPw = $("#member-pw").val();

		if(memberEmail === undefined || memberEmail === "") {
			alert("이메일을 입력하세요");
			$("#member-email").focus();
			return;
		}
		else if(memberPw === undefined || memberPw === "") {
			alert("비밀번호를 입력하세요");
			$("#member-pw").focus();
			return;
		}

		$.ajax({
			url: "/api2/member/signin",
			method: "POST",
			data: {
				userEmail: memberEmail,
				userPw: memberPw
			},
			success: function(data) {
				if(data.result === "ok") {
					alert( memberEmail + "계정으로 로그인되었습니다.");

					$(".menu-sign-in").hide();
					$(".menu-sign-up").hide();
					$(".menu-sign-out").show();

					closeSignInUpBox();
				}
				else {
					alert("정상적으로 로그인되지 않았습니다.");
				}
			},
			error: function(jqXHR) {
				alert(jqXHR.responseJSON.message);
			}
		});
	}

	<!-- 로그인이 상태인지 아닌지 확인하여 로그아웃버튼 보이기/숨기기 하는 함수-->
	function checkSignedIn() {
		$.ajax({
			url: "/api2/member/signedin",
			success: function(data) {
				if(data.result === "yes") {
					$(".menu-sign-in").hide();
					$(".menu-sign-up").hide();
					$(".menu-sign-out").show();
				}
				else {
					$(".menu-sign-in").show();
					$(".menu-sign-up").show();
					$(".menu-sign-out").hide();
				}
			}
		});
	}


	<!-- 가입창의 회원가입 버튼 클릭 시 -->
	$(".sign-up-btn").on("click", function() {
		signUp();
	});
	<!-- 로그인창의 로그인 버튼 클릭 시 -->
	$(".login-btn").on("click", function() {
		signIn();
	});
	<!-- 로그아웃 버튼 클릭 시 -->
	$(".menu-sign-out").on("click", function() {
		$.ajax({
			url: "/api2/member/signedin",
			success: function() {
				$(".menu-sign-in").show();
				$(".menu-sign-up").show();
				$(".menu-sign-out").hide();
			}
		});

		//signout 실행함으로써 세션에 들어간 정보 삭제되도록(=로그인유지 끊김)
		$.ajax({
			url: "/api2/member/signout",
			success: function() {
			}
		});
	});


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


	/**
	 * 실행
	 * 		**/
	goSearchHtml();
	checkSignedIn();

	return {
		showRegionFilter: showRegionFilter,
		hideRegionFilter: hideRegionFilter,
		showFoodFilter: showFoodFilter,
		hideFoodFilter: hideFoodFilter,
		goSearchHtml: goSearchHtml};
});
