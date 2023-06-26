
// FOOTNOTES//

document.querySelectorAll(".InTextFootnotes").forEach(function(InTextFootnote){
    InTextFootnote.addEventListener("click", function(){
        // console.log(InTextFootnote.classList[1]);

        document.querySelectorAll("p2").forEach(function(individualp2){
            if(individualp2.classList.contains(InTextFootnote.classList[1])){
                // console.log("found a p2 tag with the same class!");
                individualp2.style.color = '#c4bdb6';
            }
        })
    })
});







 //TEXT APPEARS ON SCROLL//


// Initialize variables
let timer, currSeconds = 0;

const startIdleTimer = () => {
    const log = document.querySelector(".log");
    const active = document.querySelector(".active");

    if (!log && !active) return;

    // Increment the timer seconds
    currSeconds++;

    if (log) {
        // Set the timer text to the new value
        document.querySelector(".log").textContent = currSeconds + ' second' + (currSeconds > 1 ? 's' : '')

        // Show timer
        if (document.querySelector(".log").classList.contains('conceal')) {
            document.querySelector(".log").classList.toggle('conceal')
        }
    }

    if (active) {
        // Hide "Active" notification
        if (!document.querySelector(".active").classList.contains('conceal')) {
            document.querySelector(".active").classList.add('conceal')
        }
    }
}

const resetTimer = () => {
    const log = document.querySelector(".log");
    const active = document.querySelector(".active");

    if (!log && !active) return;

    // Clear the previous interval
    clearInterval(timer);

    // Reset the seconds of the timer
    currSeconds = 0;

    // Set a new interval
    timer = setInterval(startIdleTimer, 1000);

    if (log) {
        // Hide timer
        if (!document.querySelector(".log").classList.contains('conceal')) {
            document.querySelector(".log").classList.toggle('conceal')
        }
    }

    if (active) {
        // Show "Active" notification
        if (document.querySelector(".active").classList.contains('conceal')) {
            document.querySelector(".active").classList.toggle('conceal')
        }
    }
}

// Register several events, not just scroll
var events = ['scroll'];
events.forEach((item) => {
    document.addEventListener(item, resetTimer, true);
});

// Reset timer on start
window.addEventListener('load', resetTimer, true);

var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 700;





   // COLLAPSABLE MENU

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//IMAGES//

document.querySelectorAll(".InTextVisuals").forEach(function(InTextVisual){
    InTextVisual.addEventListener("click", function(){
        // console.log(InTextVisual.classList[1]);

        document.querySelectorAll("div1").forEach(function(individualdiv1){
            if(individualdiv1.classList.contains(InTextVisual.classList[1])){
                // console.log("found a div1 tag with the same class!");
                individualdiv1.style.visibility = 'visible';
            }
        })
    })
});


