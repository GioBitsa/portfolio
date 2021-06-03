const header = document.querySelector(".hero header");

window.addEventListener("scroll", function(){

    
    // animated navigation bar

    if (this.scrollY > 200){
        header.classList.add("scrolling");
    }else{
        header.classList.remove("scrolling");
    }



    // animated progress bar

    if (this.scrollY > 500){
        const htmlProgress = document.getElementById("html");
        const cssProgress = document.getElementById("css");
        const bootstrapProgress = document.getElementById("bootstrap");
        const jqueryProgress = document.getElementById("jquery");
        const scssProgress = document.getElementById("scss");
        const reactProgress = document.getElementById("react");
        
        htmlProgress.classList.add("animate-html")
        cssProgress.classList.add("animate-css")
        bootstrapProgress.classList.add("animate-bootstrap")
        jqueryProgress.classList.add("animate-jquery")
        scssProgress.classList.add("animate-scss")
        reactProgress.classList.add("animate-react")
    }
})


// sidebar


const bar = document.getElementById("open");
const close = document.getElementById("close")
const list = document.querySelector(".hero header ul")
const listLinks = document.querySelectorAll(".hero header ul li a");
const main = document.getElementById("main");

bar.addEventListener("click", function(){
    list.classList.add("opened");
    bar.classList.add("opened")
    if (bar.classList.contains("opened")){
        close.classList.add("opened")
    }
    if (bar.classList.contains("opened") && header.classList.contains("scrolling")){
        close.style.color = "white";
    }
    main.style.position = "relative";
    main.style.zIndex = "-1"
})

close.addEventListener("click", function(){
    list.classList.remove("opened")
    bar.classList.remove("opened")
    if (!bar.classList.contains("opened")){
        close.classList.remove("opened")
    }
    main.style.position = "unset";
    main.style.zIndex = "0"
})

listLinks.forEach(element => {
    element.addEventListener("click", function(){
        if(list.classList.contains("opened")){
            bar.classList.remove("opened")
            list.classList.remove("opened")
            close.classList.remove("opened")
        }
        main.style.position = "unset";
        main.style.zIndex = "0"
    })
});

