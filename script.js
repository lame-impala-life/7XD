$(document).ready(function() {

  // CURRENT PARAMETER
  var cp;
  // FRAMEBUFFER UPDATE
  function fbu (fb) {
    $("#mm").html(fb);
  }

  // READ AS TOGGLE
  function rat (tv) {
    if (tv % 2 == 1) {return "ON";}
    else {return "OFF";}
  }

  // BUTTON HANDLER
  $(".b").click(function (e) {
    bf[e.target.id]();
  });

  // m -> PROGRAMMING MODE (0=MEMORY/1=EDIT/2=FUNCTION)
  var m = 0;

  // MEMORY PROTECT (0=OFF/1=ON)
  var mpi = 1; //INTERNAL
  var mpc = 1; //CARTRIDGE

  // BUTTON FUNCTION ASSIGNMENTS
  var bf = {
    b1 : function () {cp -= 1;},
    b2 : function () {cp += 1;},
    b3 : function () {/*STORE*/},
    b4 : function () {
      cp = mpi; // STOPPED HERE, 2017 10 20
      fbu("MEMORY PROTECT<br>INTERNAL="+rat(mpi));
    },
    b5 : function () {fbu("MEMORY PROTECT<br>CARTRIDGE="+rat(mpc));}
  }



});
