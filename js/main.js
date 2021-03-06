/*get the slider wrapper width*/
let wrapperWidth =  document.querySelector(".slider-wrapper").clientWidth;

console.log( "wrapper", wrapperWidth )

/*slider quantity*/
let slides = 8
/*get the slider tray width*/
document.querySelector(".slider-tray").style.width = `${wrapperWidth * slides}px`

console.log("tray", document.querySelector(".slider-tray").offsetWidth )

console.log(wrapperWidth)

/*get the caption width*/
let captionWidth = document.querySelector(".slider-caption").offsetWidth

/*setting the displacement ( equals to caption width)*/
let displacement = captionWidth * 2;

/*starting slide*/
let slideIndex = 1;

/*setting start position*/

document.querySelector(".slider-tray")
    .style.transform = `translate3d(${-captionWidth}px, 0, 0)`

console.log( document.querySelector(".slider-caption").offsetWidth)

//
document.getElementById("forward").addEventListener("click", () => {
    document.querySelector(".slider-tray")
            .style.transition = `transform 1s ease`
    document.querySelector(".slider-tray").style.transform = `translate3d(${(displacement * -1)}px, 0, 0)`

    displacement += captionWidth
    slideIndex++
    console.log( displacement)
    console.log( slideIndex)
    if( slideIndex === ( slides - 1 ) ){
        setTimeout( () => {
            document.querySelector(".slider-tray")
            .style.transition = `unset`
            document.querySelector(".slider-tray")
            .style.transform = `translate3d(${-captionWidth}px, 0, 0)`
        },1000)
        
        displacement = captionWidth * 2
        slideIndex = 1
    }
    /*if( slideIndex === 7){
        
        displacement = 598.41
        slideIndex = 0
    }*/
})