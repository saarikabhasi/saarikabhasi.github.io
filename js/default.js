const contact = {
    "github":["fa-github","https://github.com/saarikabhasi"],
    "linkedin": ["fa-linkedin","https://www.linkedin.com/in/nair-saarika-bhasi"],
    "email":["fa-envelope","mailto:saarikabhasi@yahoo.com"]
}

async function createfooterContact(){
    let div = document.createElement("div")
    // div.setAttribute("id","contact")
    div.classList.add("footer-contact","d-none")
    

    let ul=document.createElement("ul")
    
    for (c=0;c<Object.keys(contact).length;c++){
        let li = document.createElement("li")
        
        let a = document.createElement("a")
        a.classList.add("icon")
        a.setAttribute("href",contact[Object.keys(contact)[c]][1])
       
        let i = document.createElement("i")
        i.classList.add("fa",contact[Object.keys(contact)[c]][0])

        a.appendChild(i)
        li.appendChild(a)
        ul.appendChild(li)
        console.log(ul)
    }

    div.appendChild(ul)
    
    var footer = document.getElementById("footer-main")
    footer.insertBefore(div,footer.childNodes[0])
    // footer.prepend(div)
    
}

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

    // var maincontactSection = document.querySelector(".main")
    var aside = document.querySelector(".side")
    var footerContact = document.querySelector(".footer-contact")
    if (window.innerWidth<1000) {
        
       
        //maincontactSection.innerHTML = aside.innerHTML
        // createfooterContact()
        footerContact.classList.remove("d-none")
        aside.style.opacity ="0"
    }
    else{
        // maincontactSection.innerHTML =""
        aside.style.opacity ="1"
        if (footerContact.className.split(' ').indexOf("d-none")==-1){
            footerContact.classList.add("d-none")
        }
        
    }
   

    

}
//window resize contact section changes
window.addEventListener('resize',moveasideContact)

//scroll
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
  
    createfooterContact();
    if (window.innerWidth < 1000) {
       moveasideContact()
    }

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





