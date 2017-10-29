$(document).ready(function() {
  // INTERNAL MEMORY (Bank-Source) ;)
  var ibs = [
    "/sysjson/superdx", // E0 "my mental age" - Ada
    "/sysjson/rom1a", // E1 star trucker romulins took over this one. LegendEP on lock bruv.
    "/sysjson/rom1b", // E2 FLOOR BASICS:
    "/sysjson/rom2a", // E3 no games here.
    "/sysjson/rom2b", // E4 no game shows here.
    "/sysjson/rom3a", // E5 no horseplay.
    "/sysjson/rom3b", // E6 no jokes.
    "/sysjson/rom4a", // E7 no fun.
    "/sysjson/rom4b", // E8 Oh wait, those are the rules for the Lonrad 05D
    "/sysjson/", // E9 It's just a prank, Lonrad 05D! ;)
    "/sysjson/", // Ea (10) this is for the Apple iDX7 patches to be delivered in the year 7777777 CE
    "/sysjson/", // Eb (11) character name copyrighted by Illumination entertainment or something ok stop killing me ok thanks bye
    "/sysjson/", // Ec (12) 6 + 6 + 2 - 2 = 12 QUICK MATHS
    "/sysjson/", // Ed (13) Check it out! for your health!
    "/sysjson/", // Ee (14) "When I ate Totino's pizza rolls 365/7/25EXACTLY" - Every Lame Impala Freeloader Ever
    "/sysjson/", // Ef (15) lethal and dangerous, handle with rage
    "/sysjson/", // Eg (16) #TogetherWeSaveXOBLRO
    "/sysjson/", // Eh (17) TEENAGE DREAMWAVE PATCHES
    "/sysjson/", // Ei (18) 2 minutes to go..
    "/sysjson/", // Ej (19) SAY NO TO DRUGS
    "/sysjson/", // Ek (20) dedicated to Ethan Klein
    "/sysjson/", // El (21) good for Spanish presets
    "/sysjson/", // Em (22) good for middlepeople
    "/sysjson/", // En (23) good for English presets
    "/sysjson/", // Eo (24) meddling kids
    "/sysjson/", // Ep (25) the Legendary Bank
    "/sysjson/", // Eq (26) beastie bois plus DX7 bank which is sooo magikool dang yagottatrythistuffoutbefore
    "/sysjson/", // Er (27) designer bank by updog
    "/sysjson/", // Es (28) also good for Spanish presets
    "/sysjson/", // Et (29) dedicated to Kevin Spacey the man and Australian band
    "/sysjson/", // Eu (30) free for EU passports and dedicated to our friend the Lonrad 05D
    "/sysjson/", // Ev (31) if you drank POG you are in the DXinner Party
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

});
