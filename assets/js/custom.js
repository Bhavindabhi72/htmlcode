// Counting number js start
$(".count-number").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
// quantity css start
var QtyInput = (function () {
	var $qtyInputs = $(".qty-input");

	if (!$qtyInputs.length) {
		return;
	}

	var $inputs = $qtyInputs.find(".product-qty");
	var $countBtn = $qtyInputs.find(".qty-count");
	var qtyMin = parseInt($inputs.attr("min"));
	var qtyMax = parseInt($inputs.attr("max"));

	$inputs.change(function () {
		var $this = $(this);
		var $minusBtn = $this.siblings(".qty-count--minus");
		var $addBtn = $this.siblings(".qty-count--add");
		var qty = parseInt($this.val());

		if (isNaN(qty) || qty <= qtyMin) {
			$this.val(qtyMin);
			$minusBtn.attr("disabled", true);
		} else {
			$minusBtn.attr("disabled", false);
			
			if(qty >= qtyMax){
				$this.val(qtyMax);
				$addBtn.attr('disabled', true);
			} else {
				$this.val(qty);
				$addBtn.attr('disabled', false);
			}
		}
	});

	$countBtn.click(function () {
		var operator = this.dataset.action;
		var $this = $(this);
		var $input = $this.siblings(".product-qty");
		var qty = parseInt($input.val());

		if (operator == "add") {
			qty += 1;
			if (qty >= qtyMin + 1) {
				$this.siblings(".qty-count--minus").attr("disabled", false);
			}

			if (qty >= qtyMax) {
				$this.attr("disabled", true);
			}
		} else {
			qty = qty <= qtyMin ? qtyMin : (qty -= 1);
			
			if (qty == qtyMin) {
				$this.attr("disabled", true);
			}

			if (qty < qtyMax) {
				$this.siblings(".qty-count--add").attr("disabled", false);
			}
		}

		$input.val(qty);
	});
})();
// quantity css end
// SIDEBAR JS START
const contentBody = document.querySelector(".wd-body");
const sidebar = document.querySelector(".wd-sidebar");
const toggleButton = document.querySelector(".wd-sidebar-toggler-button");
const toggleButtonMobile = document.querySelector(
  ".wd-mobile-sidebar-toggler-button"
);
const closeButtonMobile = document.querySelector(".wd-mobile-menu-button");
const mainBody = document.querySelector(".wd-main");

toggleButton.addEventListener("click", function () {
  contentBody.classList.toggle("wd-sidebar-collapsed");
});

toggleButtonMobile.addEventListener("click", function () {
  contentBody.classList.remove("wd-sidebar-collapsed");
  contentBody.classList.toggle("wd-sidebar-slides-in");
  mainBody.classList.add("overflow-hidden");
});

closeButtonMobile.addEventListener("click", function () {
  if (contentBody.classList.contains("wd-sidebar-slides-in")) {
    contentBody.classList.remove("wd-sidebar-slides-in");
    mainBody.classList.remove("overflow-hidden");
  } else {
  }
});
//  SIDEBAR JS END
// TEXT EDITOR JS START
var richTextEditor = {
  bindEvents: function () {
    this.bindDesignModeToggle();
    this.bindToolbarButtons();
  },

  bindDesignModeToggle: function () {
    $("#page").on("click", function (e) {
      document.designMode = "on";
    });

    $(document.body).on("click", function (e) {
      var $target = $(e.target);

      if ($target.is("body")) {
        document.designMode = "off";
      }
    });
  },

  bindToolbarButtons: function () {
    $("#toolbar").on(
      "mousedown",
      ".icon",
      function (e) {
        e.preventDefault();
        var btnId = $(e.target).attr("id");
        this.editStyle(btnId);
      }.bind(this)
    );
  },

  editStyle: function (btnId) {
    var value = null;

    if (btnId === "createLink") {
      if (this.isSelection()) value = prompt("Enter a link:");
    }

    document.execCommand(btnId, true, value);
  },

  isSelection: function () {
    var selection = window.getSelection();
    return selection.anchorOffset !== selection.focusOffset;
  },

  init: function () {
    this.bindEvents();
  },
};

richTextEditor.init();
// TEXT EDITOR JS END
// multi slider js start
var swiper = new Swiper(".thumbsSliderSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
var swiper2 = new Swiper(".swiperNavigationSwiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
// multi slider js end
