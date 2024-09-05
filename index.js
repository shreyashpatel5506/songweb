document.querySelectorAll(".card").forEach(container => {
    let playIcon = container.querySelector(".play");

    container.addEventListener("mouseenter", function() {
        playIcon.style.display = "block";
        playIcon.classList.remove("remove")
    });

    container.addEventListener("mouseleave", function() {
        playIcon.classList.add("remove")
        setTimeout(() => {
            playIcon.style.display = "none";
        },500);
    });
});

document.getElementById("moreartistlist").addEventListener("click",()=>{
    document.getElementById("main").style.display="none";
    document.getElementById("moreartist").style.display="block";
})

function artistback(){
    document.getElementById("main").style.display="block";
    document.getElementById("moreartist").style.display="none";
}

document.getElementById("arjit").addEventListener("click",()=>{
    document.getElementById("main").style.display="none";
    document.getElementById("ArjitSingh").style.display="block";
})
document.getElementById("sajni").addEventListener("click",()=>{
    document.getElementById("sajnire").style.display="block";
    
})