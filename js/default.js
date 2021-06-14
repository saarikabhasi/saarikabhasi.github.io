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
   // s= '"#"+btn_name'
    //console.log(s)
    // document.querySelector(s).classList.remove('hide')
    // window.location = window.location.pathname +"#"+btn_name
}

function scroll_down_click(){
    // make 'about' section as current
    change_status_of_btn("about")
    // document.querySelector("#about").classList.remove('hide')
   
    
    
    
}


function handlescroll(){
    scrollTotal = document.documentElement.clientHeight+document.documentElement.scrollHeight
    scrollPosition= document.documentElement.scrollTop/scrollTotal
    console.log(scrollPosition)
    if (scrollPosition >= 0.03){

        document.querySelector("#nav-wrap").classList.add('opaque')
        document.querySelector(".intro").style.zIndex = "0"

    }
    else{
        document.querySelector("#nav-wrap").classList.remove('opaque')
        document.querySelector(".intro").style.zIndex = "100"
    }

    if (scrollPosition <0.07 ){
       
        // make 'home' section as current
        change_status_of_btn("home")
        

    }    
    if (scrollPosition >0.07 && scrollPosition <0.3 ){
        // set 'about' section as current
        change_status_of_btn("about")
        
        // document.querySelector("#about").classList.remove('hide')


    }
    if (scrollPosition >0.3  && scrollPosition <0.45 ){
        // set 'Portfolio' section as current
        change_status_of_btn("portfolio")
        // document.querySelector("#portfolio").classList.remove('hide')
        

    }
    if (scrollPosition >0.45 && scrollPosition<0.6 ){
        // set 'contact' section as current
        change_status_of_btn("contact")
        // document.querySelector("#contact").classList.remove('hide')
      
        

    }
    if (scrollPosition >0.6){
        // set 'contact' section as current
        change_status_of_btn("resume")
      
        

    }
}
document.addEventListener("scroll", handlescroll)
document.addEventListener('DOMContentLoaded',function(){

       
    console.log('DOMContentLoaded')
    // Add section functionality
    document.querySelectorAll('.tab').forEach(button =>{
        button.onclick = function(){
 

            var current = document.getElementsByClassName("current");    
            
            current[0].className = current[0].className.replace("tab current", "tab");
            this.className ="tab current";

        };
       
    
        
    });
  
});


