$(document).ready(function() {
  // PROGRAMMING MODE (0=MEMORY,1=EDIT,2=FUNCTION)
  var pm = 0;

  // FRAMEBUFFER UPDATE
  function fbu (fb) {
    $("#mm").html(fb);
  }

  // LED UPDATE
  function ltu (lt) {
    $("#rn").html(lt);
  }

  // BUTTON HANDLER (REVISE TO CONSIDER MODE)
  $(".b").click(function (e) {
    bf[e.target.id]();
  });

  // MEMORY PROTECT (0=OFF/1=ON)
  var memoryProtect {
    internal: 1,
    cartridge: 1
  }

  // OLD BUTTON FUNCTION ASSIGNMENT, WILL REFER TO COMMENTS FOR NEW STRUCTURES THEN REMOVE IT
  /*
    // DECREASE BUTTON
    b1 : function () {cp -= 1;fbdu(cp,cps);},
    // INCREASE BUTTON
    b2 : function () {cp += 1;fbdu(cp,cps);},

    b3 : function () {STORE},
    // MEMORY PROTECT: INTERNAL
    b4 : function () {
      cp = mpi; // STOPPED HERE, 2017 10 20 -> FIJI WATER
      cps = 1;
      fbu("MEMORY PROTECT<br>INTERNAL=<span id=\'dt\'>"+rat(mpi)+"</span>");
    },
    // MEMORY PROTECT: CARTRIDGE -> PAPA JOHN'S
    b5 : function () {
      cp = mpi;
      cps = 1;
      fbu("MEMORY PROTECT<br>CARTRIDGE=<span id=\'dt\'>"+rat(mpc)+"</span>");
    },
  */

  // INTERNAL MEMORY
  bank="/sysjson/clavs";
  // JSON.parse()
});
