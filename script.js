$(document).ready(function() {

  // CURRENT PARAMETER
  var cp;

  // CURRENT PARAMETER SIEVE (0=NUMBER,1=TEXT)
  var cps;

  // FRAMEBUFFER UPDATE
  function fbu (fb) {
    $("#mm").html(fb);
  }

  // DATA VALUE UPDATE - WIP
  function fbdu (cp, cps) {
    if (cps) {
      $("#dt").html(rat(cp));
    }
    else {
      $("#dt").html(cp);
    }
  }

  // LED UPDATE
  function ltu (lt) {
    $("#rn").html(lt);
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
    // DECREASE BUTTON
    b1 : function () {cp -= 1;fbdu(cp,cps);},
    // INCREASE BUTTON
    b2 : function () {cp += 1;fbdu(cp,cps);},

    b3 : function () {/*STORE*/},
    // MEMORY PROTECT: INTERNAL
    b4 : function () {
      cp = mpi; // STOPPED HERE, 2017 10 20
      cps = 1;
      fbu("MEMORY PROTECT<br>INTERNAL=<span id=\'dt\'>"+rat(mpi)+"</span>");
    },
    // MEMORY PROTECT: CARTRIDGE
    b5 : function () {
      cp = mpi;
      cps = 1;
      fbu("MEMORY PROTECT<br>CARTRIDGE=<span id=\'dt\'>"+rat(mpc)+"</span>");
    },
    // OPERATOR SELECT
    b6: function () {},

    // EDIT/COMPARE
    b7: function () {},
    // MEMORY SELECT : INTERNAL
    b8: function () {},
    // MEMORY SELECT : CARTRIDGE
    b9: function () {},
    // FUNCTION
    ba: function () {},

    // 1
    bb: function () {},
    // 2
    bc: function () {},
    // 3
    bd: function () {},
    // 4
    be: function () {},
    // 5
    bf: function () {},
    // 6
    b10: function () {},
    // 7
    b11: function () {},
    // 8
    b12: function () {},

    // 9
    b13: function () {},
    // 10
    b14: function () {},
    // 11
    b15: function () {},
    // 12
    b16: function () {},
    // 13
    b17: function () {},
    // 14
    b18: function () {},
    // 15
    b19: function () {},
    // 16
    b1a: function () {},

    // 17
    b1b: function () {},
    // 18
    b1c: function () {},
    // 19
    b1d: function () {},
    // 20
    b1e: function () {},
    // 21
    b1f: function () {},
    // 22
    b20: function () {},
    // 23
    b21: function () {},
    // 24
    b22: function () {},

    // 25
    b23: function () {},
    // 26
    b24: function () {},
    // 27
    b25: function () {},
    // 28
    b26: function () {},
    // 29
    b27: function () {},
    // 30
    b28: function () {},
    // 31
    b29: function () {},
    // 32
    b2a: function () {}
  }

  // INTERNAL MEMORY
  // Parse JSON in internal memory directory

});
