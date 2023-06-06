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
// Counting number js end
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
// STEP WIZARD JS START

// STEP WIZARD JS END
