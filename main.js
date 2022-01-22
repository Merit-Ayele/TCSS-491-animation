import img from "./img.js";
import Player from "./pirate.js";

const canvas = document.createElement("canvas");
document.body.append(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 2000 ;
canvas.height = 1766;

ctx.font = "40px Georgia";
ctx.fillText("Right-arrow: walk", 1200, 70);
ctx.fillText("Shift-right + Right-arrow: run",1200,130);
ctx.fillText("Down-arrow: attack",1200,190);
ctx.fillText("Space: jump",1200,250);
ctx.fillText("D: dead",1200,310);
ctx.fillText("R: restore after dead",1200,370);

const background = img("pbg.png");
const player = new Player();

function game() {
  ctx.drawImage(background, 0, 0, 1763, 1766, 0, 0, 1763 / 1.5, 1766 / 1.5);
  player.draw(ctx);
}

setInterval(game, 1000 / 60);
 