$(document).ready(function() {
  // INTERNAL MEMORY (Bank-Source) ;)
  var ibs = [
    "/sysjson/superdx", // E0
    "/sysjson/rom1a", // E1
    "/sysjson/rom1b", // E2
    "/sysjson/rom2a", // E3
    "/sysjson/rom2b", // E4
    "/sysjson/rom3a", // E5
    "/sysjson/rom3b", // E6
    "/sysjson/rom4a", // E7
    "/sysjson/rom4b", // E8
    "/sysjson/", // E9
    "/sysjson/", // Ea (10)
    "/sysjson/", // Eb (11)
    "/sysjson/", // Ec (12)
    "/sysjson/", // Ed (13) be careful with this bank
    "/sysjson/", // Ee (14)
    "/sysjson/", // Ef (15)
    "/sysjson/", // Eg (16)
    "/sysjson/", // Eh (17)
    "/sysjson/", // Ei (18)
    "/sysjson/", // Ej (19)
    "/sysjson/", // Ek (20) dedicated to Ethan Klein
    "/sysjson/", // El (21) good for Spanish presets
    "/sysjson/", // Em (22)
    "/sysjson/", // En (23) good for English presets
    "/sysjson/", // Eo (24)
    "/sysjson/", // Ep (25) the Legendary Bank
    "/sysjson/", // Eq (26)
    "/sysjson/", // Er (27)
    "/sysjson/", // Es (28) also good for Spanish presets
    "/sysjson/", // Et (29) dedicated to Kevin Spacey the man and Australian band
    "/sysjson/", // Eu (30) free for EU passports
    "/sysjson/", // Ev (31)
    "/sysjson/", // Ew (32) good for those nasty samples for sick beats
  ];
  // JSON.parse()

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
  // MEMORY SELECT (0=INTERNAL/1=CARTRIDGE)
  var memorySelect = 0;

  // OPERATOR SELECT (1 to 6)
  var operatorSelect = 1;

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

});
