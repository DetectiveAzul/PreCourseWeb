minimumvalue = 1; // The minimum value that can be rolled by a die is set here
rnd.today=new Date();
rnd.seed=rnd.today.getTime();

function rnd() {
  rnd.seed = (rnd.seed*9301+49297) % 233280;
  return rnd.seed/(233280.0);
};

function rand(number) {
  return Math.ceil(rnd()*number);
};

function docreset() {
  document.form1.reset();
  document.form1.runningtotal.value = "This field records your latest rolls."
}

function rolldX() {
   dXrolls = parseInt(document.form1.dXn.value);
   dXmod = parseInt(document.form1.dXmo.value);
   dXsides = parseInt(document.form1.dXs.value);
   dtotal = ""
   dXres = 0
   rtotal = document.form1.runningtotal.value;

  for (i=0; i<2; i++) {
    if (document.form1.dXm[i].checked) {
    dXpm = i }
  }

  if (dXpm == 0) {
        dtotal = dtotal + "Roll(" + dXrolls.toString() + "d" + dXsides + ")" +  dXmod.toString() + "="
  }

  if (dXpm == 1) {
        dtotal = dtotal +  "Roll(" + dXrolls.toString() + "d" + dXsides + ")" +  dXmod.toString() + "="
  }

  for (r=0; r<dXrolls; r++) {
       var dX = Math.floor((Math.random() * dXsides) + 1);
       dXres = dXres + dX;
     dtotal = dtotal + dX.toString() + ","
    }

  if (dXpm == 0) {
       dXres = dXres + dXmod;
     dtotal = dtotal + dXmod + "\n" + "Total:" + dXres
  }

  if (dXpm == 1) {
       dXres = dXres - dXmod;
     if (dXres <= minimumvalue) {
        dXres = minimumvalue;
      }
     dtotal = dtotal + dXmod + "\n" + "Total:" + dXres
  }

   document.form1.dXr.value = dXres;
   rtotal = dtotal + "\n" + rtotal;
   document.form1.runningtotal.value = rtotal;
}
