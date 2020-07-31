/*d.style.visibility = "visible";
function hideShowText(){

    if(d.style.visibility == "visible"){
        d.style.visibility = "hidden";
        console.log(d.style.visibility);
    }
    else{
        d.style.visibility = "visible";
        console.log(d.style.visibility);
    }
}
hide.addEventListener("click",hideShowText);*/
function hideShowText(){
    d.classList.toggle("hide");
    console.log(d.classList.toggle("hide"));
    if(d.classList.toggle("hide")==true){
        hide.innerHTML = "Show the text";
    }
    else{
        hide.innerHTML = "Hide the Text";
    }
    
}
hide.addEventListener("click", hideShowText);
