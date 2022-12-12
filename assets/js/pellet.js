import { CONTEXT } from "./config.js";

export class Pellet {
    constructor({
        position
    }) {
        this.position = position;
        this.radius = 3;
    }

    draw() {
        CONTEXT.beginPath();
        CONTEXT.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        CONTEXT.fillStyle = "white";
        CONTEXT.fill();
        CONTEXT.closePath();
    }
}