// Session 29's Mouse constructor function

function Mouse(color) {
    this.color = color;
    this.isDead = false;
};

Mouse.prototype.die = function() {
    this.isDead = true;
};

module.exports = Mouse; // Each .js file is a module, we need to export it so other files can refer to the exported function
// After exporting, we only need to reference to this file as `Session29-mouse`, instead of `Session29-mouse.js`