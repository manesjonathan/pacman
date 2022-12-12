import { CONTEXT } from "./config.js";

export class Ghost {
    static speed = 2;
    constructor({
        position,
        velocity,
        color = "red"
    }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
        this.color = color;
        this.prevCollisions = [];
        this.speed = 2;
        this.scared= false;
    }

    draw() {
        CONTEXT.beginPath();
        CONTEXT.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        CONTEXT.fillStyle = this.scared ? "blue" : this.color;
        CONTEXT.fill();
        CONTEXT.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}