require([
	"common",
], function() {
	var img = ["cate_korean", "cate_western", "cate_japanese", "cate_chinese", "cate_asian",
		"cate_contemporary", "cate_pub_bar", "cate_cafe", "cate_bbq", "cate_buffet"];
	var cap_eng = ["KOREAN", "WESTERN", "JAPANESE", "CHINESE", "ASIAN", "CONTEMPORARY",
		"PUB & BAR", "CAFE & BAKERY", "BBQ", "BUFFET"];
	var cap_kor = ["한식", "양식", "일식", "중식", "아시아식", "컨템퍼러리",
		"술집", "카페 / 베이커리", "구이", "뷔페"];

	var i;
	var sectionHTML;


	for (i = 0; i < 10; i++) {
		sectionHTML = "<li>";
		sectionHTML += "<div class='sec-img' " +
			"style=\"background-image: url('../img/" + img[i] + ".JPG')\">";
		sectionHTML += "<div class='shading'>";
		sectionHTML += "<div class='img-box-text'>";
		sectionHTML += "<div class='cap_eng'>" + cap_eng[i] + "</div>";
		sectionHTML += "<div class='cap_kor'>" + cap_kor[i] + "</div>";
		sectionHTML += "</div>";
		sectionHTML += "</div>";
		sectionHTML += "</div>";
		sectionHTML += "</li>";

		$(".section-contents>ul").append(sectionHTML);
	}
});
