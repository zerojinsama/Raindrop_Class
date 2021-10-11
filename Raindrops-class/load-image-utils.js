const loadRaindropImages = (objectsImg) => {
    const RaindropImages = Array.from({length: 10}, (el, i) => {
        if(i < 4){
            return objectsImg.get(i * 160, 0, 200, 200)
        } else {
            return objectsImg.get(0 * 160, 0, 200, 200)
        }
        
    })  
    return RaindropImages 
}


const loadPuffyImages = (PuffyImg) => {

    const runImages = Array.from({length: 16}, (el, i) => {
        return PuffyImg.get(i * 160, 0, 160, 160)
    })
    const jumpLeftImages = Array.from({ length: 11}, (el, i) => {
        return PuffyImg.get(i * 160, 0, 160, 160)
    })
    const jumpRightImages = Array.from({length: 11}, (el, i) => {
        return PuffyImg.get(i * 160, 0, 160, 160)
    })

    const arr = runImages.concat(jumpLeftImages).concat(jumpRightImages)

    return arr
}


