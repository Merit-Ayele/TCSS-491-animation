import states from "./states.js";
import animator from "./animator.js";

export default class pirate {
  constructor() {
    this.state = states.idle;
    this.#createAnimations();
    document.addEventListener("keydown", this.#keydown);
    document.addEventListener("keyup", this.#keyup);
  }

  draw(ctx) {
    this.#setState();
    const animation = this.animations.find((animation) =>
      animation.isFor(this.state)
    );

    const image = animation.getImage();

    const x = 50;
    let y = 600;

    if (this.state == states.attack) {
      y = 600;
    }

    ctx.drawImage(image, x, y);
  }

  #setState() {
    if (this.deadPressed) {
      this.state = states.dead;
    } else if (this.attackPressed) {
      this.state = states.attack;
    } else if (this.jumpPressed) {
      this.state = states.jump;
    } else if (this.runPressed && this.rightPressed) {
      this.state = states.run;
    } else if (this.rightPressed) {
      this.state = states.walk;
    } else {
      this.state = states.idle;
    }
  }

  #createAnimations() {
    this.idleAnimation = new animator(
      "Idle (?).png",
      7,
      6,
      states.idle
    );
    this.walkAnimation = new animator(
      "Walk (?).png",
      7,
      6,
      states.walk
    );

    this.runAnimation = new animator(
      "Run (?).png",
      7,
      3,
      states.run
    );
    this.jumpAnimation = new animator(
      "Jump (?).png",
      7,
      6,
      states.jump
    );

    this.attackAnimation = new animator(
      "Attack (?).png",
      7,
      4,
      states.attack
    );
    this.deadAnimation = new animator(
      "Die (?).png",
      7,
      10,
      states.dead,
      true
    );

    this.animations = [
      this.idleAnimation,
      this.walkAnimation,
      this.runAnimation,
      this.jumpAnimation,
      this.deadAnimation,
      this.attackAnimation,
    ];
  }

  #keydown = (event) => {
    switch (event.code) {
      case "ArrowRight":
        this.rightPressed = true;
        break;
      case "ArrowDown":
        this.attackPressed = true;
        break;
      case "ShiftRight":
        this.runPressed = true;
        break;
      case "Space":
        this.jumpPressed = true;
        break;
      case "KeyD":
        this.deadPressed = true;
        break;
      case "KeyR":
        this.deadPressed = false;
        this.deadAnimation.reset();
        break;
    }
  };

  #keyup = (event) => {
    switch (event.code) {
      case "ArrowRight":
        this.rightPressed = false;
        break;
      case "ArrowDown":
        this.attackPressed = false;
        break;
      case "ShiftRight":
        this.runPressed = false;
        break;
      case "Space":
        this.jumpPressed = false;
        break;
    }
  };
}
