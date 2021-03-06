let wrapperWidth =  document.querySelector(".slider-wrapper").clientWidth;

console.log( "wrapper", wrapperWidth )

document.querySelector(".slider-tray").style.width = `${wrapperWidth * 7}px`

console.log("tray", document.querySelector(".slider-tray").offsetWidth )

console.log(wrapperWidth)


let captionWidth = document.querySelector(".slider-caption").offsetWidth

let displacement = captionWidth;
let slideIndex = 0;

console.log( document.querySelector(".slider-caption").offsetWidth)

document.getElementById("forward").addEventListener("click", () => {
    document.querySelector(".slider-tray")
            .style.transition = `transform 1s ease`
    document.querySelector(".slider-tray").style.transform = `translate3d(${(displacement * -1)}px, 0, 0)`

    displacement += captionWidth
    slideIndex++
    console.log( displacement)
    console.log( slideIndex)
    if( slideIndex === 6 ){
        setTimeout( () => {
            document.querySelector(".slider-tray")
            .style.transition = `unset`
            document.querySelector(".slider-tray")
            .style.transform = `translate3d(0px, 0, 0)`
        },1000)
        
        displacement = captionWidth
        slideIndex = 0
    }
    /*if( slideIndex === 7){
        
        displacement = 598.41
        slideIndex = 0
    }*/
})