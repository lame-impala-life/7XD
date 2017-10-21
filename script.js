$(document).ready(function() {

  // PROGRAMMING CONTROLLER

  // m -> PROGRAMMING MODE
  // 0 = patch/memory select
  // 1 = edit
  // 2 = function control
  var m = 0;

  // BUTTON HANDLER
  $(".b").click(function (e) {
    bf[e.target.id]();
  });

  // BUTTON FUNCTION ASSIGNMENTS
  var bf = {
    b1 : function () {/*DECREASE*/},
    b2 : function () {/*INCREASE*/},
    b3 : function () {/*STORE*/},
    b4 : function () {/*MEMORY PROTECT INT*/},
    b5 : function () {/*MEMORY PROTECT CART*/}
  }



});
