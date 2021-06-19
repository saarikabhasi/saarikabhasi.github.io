const skillsPercentage = {
    "Python":6,
    "C/C++" : 6,
    "Shell":4,
    "Javascript":1,
    "HTML/CSS":2,
    "MySQL":6,

}

async function updateintroName(){
    let heading =document.querySelectorAll('.name')
    let offset = 0.1
    let start = 1.4
    heading.forEach(span=>{
        console.log(span)
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
        divBar.classList.add("moveSide","h-25","bar-hover")
        divBar.setAttribute("id","bar")
        divBar.setAttribute("width",skillsPercentage[Object.keys(skillsPercentage)[l]]+'rem')   
        // console.log(skillsPercentage[Object.keys(skillsPercentage)[l]]*100)
        divBar.style.backgroundColor ="palevioletred"


        let expSk = document.createElement("div")
        expSk.setAttribute("id","exp")
        expSk.classList.add("rect")
        expSk.innerHTML = skillsPercentage[Object.keys(skillsPercentage)[l]] + "year(s)"
        
        liSk.appendChild(divskName)
        liSk.appendChild(divBar)
        liSk.appendChild(expSk)

        ulSkillset.appendChild(liSk )
        
    }   


 


   

    // skSection.appendChild(bar)

    


}

document.addEventListener('DOMContentLoaded',function(){
    updateintroName()
    updateintroDesignation()
    updatebarSection()

    
})