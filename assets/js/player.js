import { CONTEXT } from "./config.js";

export class Player {
    constructor({
        position,
        velocity
    }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
    }

    draw() {
        CONTEXT.beginPath();
        CONTEXT.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        CONTEXT.fillStyle = "yellow";
        CONTEXT.fill();
        CONTEXT.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}