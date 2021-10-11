class Puffy{
    constructor({x, y}, size){
        this.x = x
        this.y = y
        this.startY = y
        this.size = size
        this.images = []
        this.imageCounter = 0
        this.direction = 1
        this.accelerationX = 8
        this.accelerationY = 1
        this.velocityX = 0
        this.velocityY = 0
        this.drag = 2
        this.gravity = 2
        this.jumping = false
        this.jumpValue = 0
        this.jumpInterval = null
    }

    animateJump = () => {
        if(this.direction > 0){
            this.imageCounter = 5
            this.velocityY += this.accelerationY
        }
    }

    clearJump = () => {
        clearInterval(this.jumpInterval)
        this.jumpValue = 1
    }

    jump(){
        if(!this.jumping){
            this.jumpInterval = setInterval(this.animateJump, 20)
            setTimeout(this.clearJump, 500)
            this.jumping = true
            this.jumpValue = -1
        }
    }

    move(){
        this.velocityX += this.accelerationX
    }

    nextImage(start, end){
        if(this.imageCounter < start){
            this.imageCounter = start
        } else if(this.imageCounter > end){
            this.imageCounter = start
        } else {
            this.imageCounter += this.direction
        }
    }

    render(){
        image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
    }

    runLeft(){
        this.direction = -1
        this.move()
        this.imageCounter = 5
    }


    runRight(){
        this.direction = 1
        this.move()
        this.imageCounter = 7
    }

    towardsRest(){
        if(this.velocityX > 0){
            this.velocityX -= this. drag
        } else {
            if(this.x > 500){
                this.imageCounter = 3
            } else {
                this.imageCounter = 2
            }
            
        }
        if(this.y < this.startY){
            this.velocity += this.gravity
            this.jumping = true
        }else{
            this.velocityY = 0
            this.jumping = false
        }
    }

    keepOnScreen(){
        if(this.x < 0){
            this.x = 0
            this.velocityX = 0
        }
        if(this.x > 800){
            this.x = 800
            this.velocityX = 0
        }
        if(this.y > this.startY){
            this.y = this.startY
        }
        if(this.y < 50){
            this.jumpValue = 0
        }
    }

    update(){
        this.x += this.direction * this.velocityX
        this.y += this.jumpValue * this.velocityY
        this.towardsRest()
        this.keepOnScreen()
    }



}