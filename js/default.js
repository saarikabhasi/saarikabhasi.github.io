


async function change_active(){
    var current = document.getElementsByClassName("current"); 
    current[0].className = current[0].className.replace("tab current", "tab");
}

async function change_active_state_of_given_button(name){
    
    s = "[href = '#"+name+"']"
    let v = document.querySelector(s)
    v.className = "tab current";
}

function change_status_of_btn(btn_name){
    var btn = change_active()
    btn.then(change_active_state_of_given_button(btn_name))

}

function scroll_down_click(){
    // make 'about' section as current
    change_status_of_btn("about")
    // window.location.hash = "#about"
    
   
    
    
    
}

function handlescroll(){
    scrollTotal = document.documentElement.clientHeight+document.documentElement.scrollHeight
    scrollPosition= document.documentElement.scrollTop/scrollTotal
    
    if (scrollPosition >= 0.01){

        document.querySelector("#nav-wrap").classList.add('opaque')
        document.querySelector(".intro").style.zIndex = "0"
        document.querySelector(".scroll-down").style.zIndex="0"

    }
    else{
        document.querySelector("#nav-wrap").classList.remove('opaque')
        document.querySelector(".intro").style.zIndex = "100"
        document.querySelector(".scroll-down").style.zIndex="100"
    }

    if (scrollPosition <0.06 ){
       
        // make 'home' section as current
        change_status_of_btn("home")

        

    }    
    if (scrollPosition >0.06 && scrollPosition <0.27 ){
       
        
       
        // set 'about' section as current
        change_status_of_btn("about")
        let  abt = document.querySelector("#about").childNodes[1]
        abt.classList.add("fadeIn","animated")
        abt.style.animationDelay = "0.25s"
        abt.style.animationDuration="4s"

        let skHeading = document.querySelector(".heading")
        skHeading.classList.add("fadeIn","animated")
        skHeading.style.animationDelay = "1s"
        skHeading.style.animationDuration="4s"
       



    }
    if (scrollPosition >0.27  && scrollPosition <0.45 ){
        
        // set 'Portfolio' section as current
        change_status_of_btn("portfolio")
        // window.location.hash = "#portfolio"
        let portf = document.querySelector("#portfolio")
        portf.classList.add("fadeIn","animated")
        portf.style.animationDelay = "0.25s"
        portf.style.animationDuration="4s"


       
       
        
    }

    if (scrollPosition >0.45){
        // set 'contact' section as current

        change_status_of_btn("resume")
        // window.location.hash = "#resume"
        let res=document.querySelector("#resume")
        res.classList.add("fadeIn","animated")
        res.style.animationDelay = "0.25s"
        res.style.animationDuration="4s"


     
      
      
        

    }
}



document.addEventListener("scroll", handlescroll)
document.addEventListener('DOMContentLoaded',function(){


    console.log('DOMContentLoaded')
    // Add main nav functionality
    document.querySelectorAll('.tab').forEach(button =>{
        button.onclick = function(){
 

            var current = document.getElementsByClassName("current");    
            
            current[0].className = current[0].className.replace("tab current", "tab");
            this.className ="tab current";

        };

       
       
    
    });
    document.querySelectorAll("#bar").forEach(button =>{
            button.onclick = function(){
                
            }
    })


})  

  
function animationUp(element){
    element.classList.add("animated","moveUp")
    element.style.animationDelay = "0s"
    element.style.animationDuration="0.5s"


}
function animationDown(element){
    element.classList.remove("animated","moveUp")
    element.style.animationDelay = null
    element.style.animationDuration=null
}







