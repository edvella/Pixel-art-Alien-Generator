var c = document.getElementById("alienCanvas");
var ctx = c.getContext("2d");

var generator = {
    numPixels: 10,
    pixelSize: 5,
    alienContent: [],
    generateAlien: function () {
        for (var y = 0; y < this.numPixels; y++) {
            for (var x = 0; x < this.numPixels; x++) {
                if (x < Math.round(this.numPixels / 2)) {
                    this.alienContent[x + y * this.numPixels] = Math.round(Math.random());
                }
                else {
                    this.alienContent[x + y * this.numPixels] =
                        this.alienContent[(this.numPixels - x - 1) + y * this.numPixels];
                }
            }
        }
    },
    renderAlien: function () {
        ctx.clearRect(0, 0, c.width, c.height);
        for (var i = 0; i < this.numPixels * this.numPixels; i++) {
            if (this.alienContent[i] != 0) {
                var x = i % this.numPixels;
                var y = Math.floor(i / this.numPixels);
                ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
            }
        }
    },
    generateAndRender: function () {
        this.generateAlien();
        this.renderAlien();
    }
};

generator.generateAndRender();