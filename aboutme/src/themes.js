darkTheme = true;


function changeMode(){
    if(darkTheme){
        document.getElementById("mode").innerHTML = "Dark Mode"
        document.getElementById("background").style.backgroundColor = "white";
        var elements = document.getElementsByName("mod");
        for(var i=0; i<elements.length; i++){
            elements[i].style.color = "black";
        }

        darkTheme = false;
    }
    else if(!darkTheme){
        document.getElementById("mode").innerHTML = "Light Mode"
        document.getElementById("background").style.backgroundColor = "rgb(32, 32, 32)";
        var elements = document.getElementsByName("mod");
        for(var i=0; i<elements.length; i++){
            elements[i].style.color = "white";
        }

        darkTheme = true;
    }
    
}