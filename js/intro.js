const skillsPercentage = {
    "Python":[6,"#A16E83"],
    "C/C++" : [6,"#479761"],
    "Shell":[4,"#3AAFA9"],
    "Javascript":[1,"#88DBBC"],
    "HTML/CSS":[2, "#E7717D"],
    "MySQL":[6,"#D79922"],

}


async function updateintroName(){
    let heading =document.querySelectorAll('.name')
    let offset = 0.1
    let start = 1.4
    heading.forEach(span=>{
        // console.log(span)
        span.classList.add("animated","fadeIn")
        span.style.animationDuration = "3s"
   
        let time = start + offset +'s'
        offset +=0.1
        span.style.animationDelay =time
    })
}
async function updateintroDesignation(){
    let designation =document.querySelectorAll('.designation')
    
    let startD1 = 4
    let offsetD1 = 1

    let startD2 = 2.5
    let offsetD2 = 0.1
    designation.forEach(span=>{
        
        span.classList.add("animated","fadeSlow")
        let time1 = startD1 + offsetD1
        offsetD1 +=1
        span.style.animationDuration = time1
   
        let time2 = startD2 + offsetD2 +'s'
        offsetD2 +=0.1
        span.style.animationDelay =time2
    })
}

async function updatebarSection(){

    var ulSkillset= document.querySelector(".skills-set")
    var totalSkills = Object.keys(skillsPercentage).length

    for (let l =0;l<totalSkills;l++){
        let liSk  = document.createElement("li")
        liSk .classList.add("sk")
        
        let divskName = document.createElement("div")
        divskName.innerHTML = Object.keys(skillsPercentage)[l]

        let divBar = document.createElement("div")
        divBar.classList.add("h-25")
        divBar.setAttribute("id","bar")
        
        
        let skWidth = skillsPercentage[Object.keys(skillsPercentage)[l]][0]*10 +"%"
        divBar.style.width= skWidth
        divBar.style.backgroundColor =skillsPercentage[Object.keys(skillsPercentage)[l]][1]


        let expSk = document.createElement("div")
        expSk.setAttribute("id","exp")
        expSk.classList.add("rect")

        let p = document.createElement("p")
        p.classList.add("lead")
        p.innerHTML = skillsPercentage[Object.keys(skillsPercentage)[l]][0] + "year(s)"

        expSk.appendChild(p)

        liSk.appendChild(divskName)
        liSk.appendChild(divBar)    
        liSk.appendChild(expSk)

        ulSkillset.appendChild(liSk )
        
      
        divBar.animate([
            {width:0},

            {width:skWidth}
        ],{
            duration:2000,
            easing:'ease-in-out',
            iterations:1,
            direction:'alternate',

        }

        );
       
    }   


 


   

    // skSection.appendChild(bar)

    


}

document.addEventListener('DOMContentLoaded',function(){
    updateintroName()
    updateintroDesignation()
    updatebarSection()

    
})