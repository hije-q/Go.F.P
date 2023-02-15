let mainText = document.querySelectorAll("h1");


window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY", value);

    if(value>800){
        mainText.styles.animation = "disappear 1s ease-out forwards";
    }else{

        mainText.styles.animation = "slide 1s";
    }
});

    