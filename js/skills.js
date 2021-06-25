const projects = {
    "title":["the-Book-fair","chat-application","post-it","wikipedia","social-network"]
    
}
const project_description = {
    "the-Book-fair" :"A book reviewing website. User can find books and their reviews",
    "chat-application":"This application allows its user to communicate with each other through channels.",
    "post-it":"PostIT is web application to find Handyman, Electrician or Plumber.",
    "wikipedia":"Design of Wikipedia-like online encyclopedia. Uses Github Markdown syntax to write the contents of encyclopedia",
    "social-network":"Design of Social Network website"

}
const project_tech_list = {
    "the-Book-fair" :["Flask","Python","Html","CSS"],
    "chat-application": ["Flask","Python","Html/CSS"],
    "post-it":["Django","JavaScript", "Html/CSS"],
    "wikipedia":["Django","Python","Python Regex"],
    "social-network":["Django","Python","JavaScript"]
}




const skillsPercentage = {
    "Python":[6,"#A16E83"],
    "C/C++" : [6,"#479761"],
    "Shell":[4,"#3AAFA9"],
    "Javascript":[1,"#88DBBC"],
    "HTML/CSS":[2, "#E7717D"],
    "MySQL":[6,"#D79922"],


}


async function animatebarSection(){

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
        
      
       
    }   


 


   



    


}


document.addEventListener('DOMContentLoaded',function(){
    animatebarSection()
    
})