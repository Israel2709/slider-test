/*slider quantity*/
let slides = 8

/*get the slider wrapper width*/
let wrapperWidth = document.querySelector(".slider-wrapper").clientWidth;

/*set the slider tray width*/
document.querySelector(".slider-tray").style.width = `${wrapperWidth * slides}px`

/*get the caption width*/
let captionWidth = document.querySelector(".slider-caption").offsetWidth

/*setting the displacement ( equals to caption width)*/
//let displacement = -captionWidth;

/*starting slide*/
let slideIndex = 1;

/*setting start position*/

document.querySelector(".slider-tray")
    .style.transform = `translate3d(-${slideIndex * captionWidth}px, 0, 0)`

const forward = () => {
    document.querySelector(".slider-tray")
        .style.transition = `transform 1s ease`
        document.querySelector(".slider-tray")
            .style.transform = `translate3d(-${(slideIndex + 1) * captionWidth}px, 0, 0)`
    slideIndex++
    if( slideIndex === slides - 1 ){
        console.log( "este es el penúltimo slide" )
        setTimeout(() => {
            document.querySelector(".slider-tray")
                .style.transition = `unset`
            slideIndex = 1
            document.querySelector(".slider-tray")
                .style.transform = `translate3d(-${slideIndex * captionWidth}px, 0, 0)`
        }, 1000)
    }
}

const backward = () => {
    document.querySelector(".slider-tray")
        .style.transition = `transform 1s ease`
        document.querySelector(".slider-tray")
            .style.transform = `translate3d(-${(slideIndex - 1) * captionWidth}px, 0, 0)`
    slideIndex--
    if( slideIndex == 0){
        console.log(" este es el primer slide ")
        setTimeout(() => {
            document.querySelector(".slider-tray")
                .style.transition = `unset`
            slideIndex = slides - 2
            document.querySelector(".slider-tray")
                .style.transform = `translate3d(-${slideIndex * captionWidth}px, 0, 0)`
        }, 1000)
    }
}


/*
const forward = () => {
    document.querySelector(".slider-tray")
        .style.transition = `transform 1s ease`

    document.querySelector(".slider-tray").style.transform = `translate3d(${(displacement * -1)}px, 0, 0)`

    console.log( "displacement before", displacement )

    displacement += captionWidth
    console.log( "displacement after", displacement )
    slideIndex++
    console.log(displacement)
    console.log(slideIndex)
    if (slideIndex === (slides - 1)) {
        setTimeout(() => {
            document.querySelector(".slider-tray")
                .style.transition = `unset`
            document.querySelector(".slider-tray")
                .style.transform = `translate3d(${-captionWidth}px, 0, 0)`
        }, 1000)

        displacement = captionWidth * 2
        slideIndex = 1
    }
}


const backward = () => {
    

    if ( slideIndex === 1 ){
        document.querySelector(".slider-tray")
        .style.transition = `transform 1s ease`
            document.querySelector(".slider-tray").style.transform = `translate3d(0px, 0, 0)`
        setTimeout(() => {
            document.querySelector(".slider-tray")
                .style.transition = `unset`
            document.querySelector(".slider-tray")
                .style.transform = `translate3d(${-(captionWidth * (slides - 2))}px, 0, 0)`
        }, 1000)
        displacement = captionWidth * 6
        slideIndex = 6
    } else {
        console.log( slideIndex )
        slideIndex--
        displacement -= captionWidth
        document.querySelector(".slider-tray")
            .style.transition = `transform 1s ease`
    
        document.querySelector(".slider-tray").style.transform = `translate3d(${(displacement * -1)}px, 0, 0)`
    
        
        
    }
}

*/

document.getElementById("forward").addEventListener("click",  forward)
document.getElementById("backward").addEventListener("click",  backward)