require([
	"common",
], function() {
	var listInfo = {items: [], itemsPerPage: 12};

	<!-- 티켓 리스트 -->
	function addSListItems(page, items) {
		if (items) {
			listInfo.items = items;
		}

		items = listInfo.items;
		var itemsPerPage = listInfo.itemsPerPage;

		var startIndex = (page - 1) * itemsPerPage;
		var endIndex = itemsPerPage;

		var i;
		var item;
		var sectionHTML;


		for (i = startIndex; i < endIndex; i++) {
			/** 내가 json에 입력한 데이터는 4개밖에 없어서 화면에 12개
			 뿌려주기 위해 i가 3초과하면(0~3) index를 0으로 초기화 후 1씩 더해줌-**/
			if(i>3) {
				if (i == 4 || i == 8) {		<!-- i==4만 해주면 아이템 8개만 뿌려짐..-->
					index = 0;
				}
				else if(i>4 || i>8 ) {
					++index;
				}
			}
			else if(i<=3) {
				var index = i;
			}

			item = items[index];

			sectionHTML = "<li>";
			sectionHTML += "<div class='store-all-box'>";

			sectionHTML += "<div class='sec-img' " +
				"style=\"background-image: url('" + item.img + "')\">";

			if(i==9) {	<!-- 10번째 티켓을 매진으로 하려고.... -->
				sectionHTML += "<div class='shading sold-out'>매진";
				sectionHTML += "<div class='img-box-text sold-out'>";
			}
			else {	<!-- 매진 아닐 때 -->
				sectionHTML += "<div class='shading'>";
				sectionHTML += "<div class='img-box-text'>";
			}
			sectionHTML += "<div class='st-name'>" + item.storeName + "</div>";
			sectionHTML += "<div class='st-category'>"+item.storeCategory+"</div>";
			sectionHTML += "</div>";
			sectionHTML += "</div>";
			sectionHTML += "</div>";


			sectionHTML += "<div class='ticket-info-box'>";
			sectionHTML += "<div class='ticket-caption'>";
			sectionHTML += "<div class='tk-category'>" + item.category + "</div>";
			sectionHTML += "<div class='tk-item'>"+item.ticketItem+"</div>";
			sectionHTML += "</div>";

			sectionHTML += "<div class='ticket-sale'>";
			sectionHTML += "<div class='sale-info'>"+item.saleInfo+"</div>";
			sectionHTML += "<div class='ticket-price'>";
			var priceInfo = item.price;

			if(priceInfo.sellingPrice != "") {
				sectionHTML += "<p class='off-price'>"+priceInfo.offPrice+"</p>";
				sectionHTML += "<p class='selling-price'>"+priceInfo.sellingPrice+"</p>";
			}
			else {
				sectionHTML += "<p class='off-price'>"+priceInfo.offPrice+"</p>";
			}
			sectionHTML += "</div>";
			sectionHTML += "</div>";
			sectionHTML += "</div>";

			sectionHTML += "</div>";
			sectionHTML += "</li>";

			$(".section-contents>ul.ticket-list").append(sectionHTML);
		}
	}

	function initList() {
		var url = "/api/dining/ticket/items";

		$.ajax(
			{
				url: url,
				success: function(items) {
					addSListItems(1, items);
				}});
	}


	/** **/
	/** 실행 **/
	initList();
});
