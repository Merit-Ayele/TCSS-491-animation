import img from "./img.js";
import Player from "./pirate.js";

const canvas = document.createElement("canvas");
document.body.append(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 1763 / 1.5;
canvas.height = 1766 / 1.5;

const background = img("pbg.png");
const player = new Player();

function game() {
  ctx.drawImage(background, 0, 0, 1763, 1766, 0, 0, 1763 / 1.5, 1766 / 1.5);
  player.draw(ctx);
}

setInterval(game, 1000 / 60);
