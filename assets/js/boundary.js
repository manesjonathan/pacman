import { CONTEXT } from "./config.js";

export class Boundary {
    static width = 40;
    static height = 40;
    constructor({ position, image }) {
        this.position = position;
        this.width = 40;
        this.height = 40;
        this.image = image;
    }

    draw() {
        CONTEXT.fillStyle = "blue";
        CONTEXT.fillRect(this.position.x, this.position.y, this.width, this.height);
        CONTEXT.drawImage(this.image, this.position.x, this.position.y)
    }
}
