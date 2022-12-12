import { CONTEXT } from "./config.js";

export class PowerUp {
    constructor({
        position
    }) {
        this.position = position;
        this.radius = 8;
    }

    draw() {
        CONTEXT.beginPath();
        CONTEXT.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        CONTEXT.fillStyle = "white";
        CONTEXT.fill();
        CONTEXT.closePath();
    }
}