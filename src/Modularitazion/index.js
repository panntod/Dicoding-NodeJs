const Tiger = require("./Tiger");
const Wolf = require("./Wolf");

const fighting = (tiger, wolf) => {
  console.log(tiger);
  console.log(wolf);
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if (wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }

  console.log("Tiger and Wolf have same strength");
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);

/* jalankan code ini dengan perintah
 node .\src\Modularitazion\index.js */