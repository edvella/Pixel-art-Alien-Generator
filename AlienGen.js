
var generator = {
    numBlocks: 10, // the width and height of each alien in 'blocks'
    pixelSize: 5, // the width and height of each block in pixels
    alienContent: [], // the place where the alien will be stored
    generateAlien: function () { // generates a single alien
        for (var y = 0; y < this.numBlocks; y++) {
            for (var x = 0; x < this.numBlocks; x++) {
                if (x < Math.round(this.numBlocks / 2)) {
                    this.alienContent[x + y * this.numBlocks] = Math.round(Math.random());
                }
                else {
                    this.alienContent[x + y * this.numBlocks] =
                        this.alienContent[(this.numBlocks - x - 1) + y * this.numBlocks];
                }
            }
        }
    },
    renderAlien: function (canvas) { // renders the generated alien on the selected canvas
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < this.numBlocks * this.numBlocks; i++) {
            if (this.alienContent[i] != 0) {
                var x = i % this.numBlocks;
                var y = Math.floor(i / this.numBlocks);
                context.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
            }
        }
    },
    generateAndRender: function (canvas) { // generates and draws one alien on the selected canvas
        this.generateAlien();
        this.renderAlien(canvas);
    }
};

// Generates and draws all the aliens on the page. Call again to refresh the page with new content.
function UpdatePage() { 
    for (var i = 0; i < document.getElementsByClassName("alienCanvas").length ; i++) {
        var canvas = document.getElementById("alienCanvas" + i);
        generator.generateAndRender(canvas);
    }
}