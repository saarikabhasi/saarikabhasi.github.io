


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

async function animateskillsBar(){
    // updatebarSection()
    let divBar = document.querySelectorAll("#bar")
    var offset = 1
    divBar.forEach(div =>{
        
        div.classList.add("moveBar")
        div.style.animationDelay = "0.1s"
        div.style.animationDuration="4s"
        offset +=1

    })
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
        // let  abt = document.querySelector("#about").childNodes[1]
        
       
        let  abt = document.querySelector("#about-me")
            abt.classList.add("fadeUp")
            abt.style.animationDelay = "0.01s"
            abt.style.animationDuration="0.5s"
            //animateskillsBar();

       

       



    }
    if (scrollPosition >0.2 && scrollPosition <0.35 ){
        console.log("skills")
        let  sk = document.querySelector("#skills")
            sk.classList.add("fadeUp")
            sk.style.opacity = 1
            sk.style.animationDelay = "0.1s"
            sk.style.animationDuration="0.5s"
            animateskillsBar();


    }
    if (scrollPosition >0.35  && scrollPosition <0.55 ){
        
        // set 'Portfolio' section as current
        change_status_of_btn("portfolio")
        // window.location.hash = "#portfolio"
        let portf = document.querySelector("#portfolio")
        portf.classList.add("fadeUp","animated")
        portf.style.opacity = 1
        portf.style.animationDelay = "0.5s"
        portf.style.animationDuration="0.5s"

        var eachProject = document.querySelector("#projects").querySelectorAll(".col-lg-4")
        var offset = 1
        eachProject.forEach(divs =>{
         
            divs.classList.add("fadeUp")
            divs.style.animationDelay = "0.1s"
            divs.style.animationDuration="0.5s"
            offset+=1
        })
       
        
    }

    if (scrollPosition >0.55){
        // set 'contact' section as current

        change_status_of_btn("resume")
        // window.location.hash = "#resume"
        let res=document.querySelector("#resume")
        res.classList.add("fadeIn","animated")
        res.style.animationDelay = "0.25s"
        res.style.animationDuration="4s"


     
      
      
        

    }
}

function moveasideContact(){
    console.log(window.innerWidth)
    var destinationContact = document.querySelector(".main")
    if (window.innerWidth <1024) {
        var aside = document.querySelectorAll(".side")
        aside.forEach(div =>{
            
            div.classList.replace("col","row")
            destinationContact.appendChild(div)
        })

       

        //destinationContact.innerHTML = aside.innerHTML
    }

}
window.addEventListener('resize',moveasideContact)

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
    // var cont =document.querySelector("a[href='#contact']").className.split(' ');
   
    if (window.innerWidth <= 1024) {
        moveasideContact()
    //     //for smaller screen, show contact button
    //     if (cont.indexOf("d-none")!= -1 && cont.indexOf("d-inline")==-1){
    //         document.querySelector("a[href='#contact']").classList.remove("d-none")
    //         document.querySelector("a[href='#contact']").classList.add("d-inline-block")
    //         // document.querySelector("a[href='#contact']").classList.toggle("d-inline")    
    //     }

    //     // take contact section

    //     let aside = document.getElementsByTagName("aside")
        
    //     console.log(aside)
        

        


    }
    // else{
    //     if (cont.indexOf("d-inline-block")==-1){
    //         // document.querySelector("a[href='#contact']").classList.remove("d-none")
    //         document.querySelector("a[href='#contact']").classList.add("d-none")
    //         // document.querySelector("a[href='#contact']").classList.toggle("d-none")    
    //     }
        

        
    // }
    
    
    


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





