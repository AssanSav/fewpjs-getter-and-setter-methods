class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return  Math.PI * (this.radius + this.radius)
    }
    get area() {
        return this.radius * this.radius * Math.PI
    }
    set diameter(newDiameter) {
        return this.radius = newDiameter / 2
    }
    set circumference(newCircumference) {
        return this.radius = (newCircumference / Math.PI) / 2
    }
}