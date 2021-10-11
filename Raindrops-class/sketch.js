const numRaindrops = 22
const Raindrops = Array.from({length: numRaindrops}, (el, i) => {
    return new Raindrop({ x: 45 * i, y:100 }, 75)
})
const heroPuffy = new Puffy({x:400, y:250}, 200)

function preload(){
    objectsImg = loadImage('assets/Raindrops.png')
    PuffyImg = loadImage('assets/Puffy.png')
}

function setup(){
    createCanvas(1000, 600)
    background(209,231,243)
    frameRate(12)
     // assign images
    Raindrops.forEach( Raindrop => Raindrop.images = loadRaindropImages(objectsImg))
    heroPuffy.images = loadPuffyImages(PuffyImg)
}
    
    // for(let i = 0; i < 12; i++ ){
    //     if( i < numRaindrops){
    //         Raindrops.push(objectsImg.get(i * 160, 0, 200, 380))
    //     }else{
    //         Raindrops.push(objectsImg.get(0 * 160, 0, 200, 380))
    //     }
    // }

function draw(){
    background(209,231,243)
    
    // this is the ground
    stroke(110, 159, 210)
    fill(110, 159, 210)
    rect(0, 450, 1000, 200)
    
    // draw the Raindrops
    Raindrops.forEach(Raindrop => {
        Raindrop.update()
        Raindrop.render()
    })
    checkKeys()
    heroPuffy.update()
    heroPuffy.render()
}

function checkKeys(){
    if(keyIsDown(UP_ARROW)){
        heroPuffy.jump()
        return
    } else if (keyIsDown(LEFT_ARROW)){
        heroPuffy.runLeft()
        return
    } else if(keyIsDown(RIGHT_ARROW)){
        heroPuffy.runRight()
        return
    }
}

function keyReleased(){
    if(keyCode === UP_ARROW){
        heroPuffy.clearJump()
    }
}
