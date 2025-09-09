document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector(".header_menu");
    let btn = document.querySelector(".header_btn");
    let mask = document.querySelector(".header_btnmsk");

	// メニューを開閉する
	btn.addEventListener("click", function () {
		if (!nav.classList.contains("open")) {
			nav.classList.add("open");
			btn.classList.add("open");
		} else {
			nav.classList.remove("open");
			btn.classList.remove("open");
		}
	});

	if (!mask) {
		return false;
	}

	// マスクをクリックしてメニューを閉じる
	mask.addEventListener("click", function () {
		nav.classList.remove("open");
		btn.classList.remove("open");
	});
});

