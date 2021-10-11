class Raindrop{
    constructor({x, y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images = []
        this.imageCounter = 0
        this.speed = Math.random() * 0.5

    }

    render(){
        image(this.images[Math.floor(this.imageCounter)], this.x, this.y, this.size, this.size)

    }

    update(){
        if(this.imageCounter < this.images.length - 1){
            this.imageCounter += this. speed
        } else {
            this.imageCounter = 0
        }
    }

}

// image(Raindrops[RaindropCounter], 100, 100, 100, 200)
// image(Raindrops[RaindropCounter], 200, 100, 100, 200)
// image(Raindrops[RaindropCounter], 300, 100, 100, 200)
// image(Raindrops[RaindropCounter], 400, 100, 100, 200)

// if(RaindropCounter < Raindrops.length - 1){
//     RaindropCounter ++
// }else{
//     RaindropCounter = 0
// }