
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0
    var hiddenElem = document.querySelectorAll(".hidden")

    function revealContent() {
        if (currentIndex > 0) {
            hiddenElem[currentIndex - 1].classList.remove("show")
            hiddenElem[currentIndex].classList.add("hidden")
        }

        hiddenElem[currentIndex].classList.add("show")


        currentIndex++
        if (currentIndex < hiddenElem.length) {
            setTimeout(revealContent, 2000)
        }else if (currentIndex === hiddenElem.length){
            console.log("H");
            
            setTimeout(function() {
                window.scrollBy({
                    top: 800,
                    behavior: "smooth"
                });
            }, 2000); // Adjust the delay time in milliseconds (1000 milliseconds = 1 second)
        }
    }

    revealContent();

})



let path = document.querySelector("path")
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var drawLength = pathLength * scrollPercentage;
    drawLength = drawLength * 0.5; // Adjust this factor to control the speed

    path.style.strokeDashoffset = pathLength - drawLength;

    
})



