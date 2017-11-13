/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/9/19
 *
 * 描述 ：
 */
function AutoScroll(obj) {
  // debugger
  var container = $(obj);
  container.find(".notice-item").eq(0).animate({
      marginTop: "-1rem"
    },
    500,
    function() {
      //debugger
      $(this).css({
        marginTop: "0px"
      });
      container.find(".notice-item").eq(0).appendTo(container);
    });
}
$(document).ready(function() {
  setInterval('AutoScroll("#notice")', 3000)
});
