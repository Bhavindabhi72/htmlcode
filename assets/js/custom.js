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
// ------------------------ CALENDAR JS START ----------------------------
$(document).ready(function () {
  $(".fc-button-group button").click(function () {
    $(".fc-left").removeClass("open-week-time");
  })
  $(".fc-agendaWeek-button").click(function () {
    $(".fc-left").addClass("open-week-time");
  })
})
// ------------------------ CALENDAR JS END ----------------------------