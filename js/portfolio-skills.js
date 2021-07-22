const projects = {
    "title":["markdown-to-html","the-book-fair","chat-application","post-it","wikipedia","social-network"]
    
}
const project_title_documentation_link ={
    "markdown-to-html":"https://pypi.org/project/markd2html/",
    "the-book-fair" :"https://saarikabhasi.github.io/Book-Website/",
    "chat-application":"https://saarikabhasi.github.io/Chat-application",
    "post-it":"https://saarikabhasi.github.io/postIT",
    "wikipedia":"https://saarikabhasi.github.io/Cs50w-Wiki",
    "social-network":"https://saarikabhasi.github.io/cs50W-network"
}

const project_description = {
    "markdown-to-html":"markd2html is a python package to convert Github Markdown syntax to Html",
    "the-book-fair" :"A book reviewing website. User can find books and their reviews",
    "chat-application":"This application allows its user to communicate with each other through channels.",
    "post-it":"PostIT is web application to find Handyman, Electrician or Plumber.",
    "wikipedia":"Design of Wikipedia-like online encyclopedia. Uses Github Markdown syntax to write the contents of encyclopedia",
    "social-network":"Design of Social Network website"

}
const project_tech_list = {
    "markdown-to-html":["Python","Regex","markdown"],
    "the-book-fair" :["Flask","Python","Html","CSS"],
    "chat-application": ["Flask","Python","Html/CSS"],
    "post-it":["Django","JavaScript", "Html/CSS"],
    "wikipedia":["Django","Python","Python Regex"],
    "social-network":["Django","Python","JavaScript"]
}


const project_title_folder ={
    "markdown-to-html":"https://github.com/saarikabhasi/markdown-to-html",
    "the-book-fair" :"https://github.com/saarikabhasi/Book-Website",
    "chat-application":"https://github.com/saarikabhasi/Chat-application",
    "post-it":"https://github.com/saarikabhasi/postIT",
    "wikipedia":"https://github.com/saarikabhasi/Cs50w-Wiki",
    "social-network":"https://github.com/saarikabhasi/cs50w-network"
}


const skillsPercentage = {
    "Python":[6,"#A16E83"],
    "C/C++" : [6,"#479761"],
    "Shell":[4,"#3AAFA9"],
    "Javascript":[1,"#88DBBC"],
    "HTML/CSS":[2, "#E7717D"],
    "MySQL":[6,"#D79922"],


}
//creating project 
async function createeachProject(){
    var parentDiv = document.querySelector("#projects")
    let project_length = projects["title"].length

    for (let i=0;i<project_length;i++){
        let project_id = projects["title"][i]
        

        let mainDiv = document.createElement("div")
        mainDiv.className = "col-lg-4";
    
        let projectDiv = document.createElement("div")
        projectDiv.className="project-inner"
    
        projectDiv.setAttribute("onmouseover","animationUp(this)")
        projectDiv.setAttribute("onmouseout","animationDown(this)")
    
        let header = document.createElement("header")
    
        let h3Header = document.createElement("h3")
        h3Header.classList.add("project-title" ,"p-4")
    
        let aHeader = document.createElement("a")
        aHeader.setAttribute("href",project_title_documentation_link[project_id])
        aHeader.setAttribute("rel","noopener noreferrer")
        aHeader.setAttribute("target","_blank")
        aHeader.innerHTML = project_id.replace(/-/g, " ").toUpperCase()

        h3Header.appendChild(aHeader)
        header.appendChild(h3Header)

        let divHeader = document.createElement("div")
        divHeader.classList.add("project-description")
        let pHeader = document.createElement("p")
        pHeader.innerHTML = project_description[project_id]
        divHeader.appendChild(pHeader)
        header.appendChild(divHeader)

      

        let footer = document.createElement("footer")

        let ulfooterTech = document.createElement("ul")
        ulfooterTech.className = "project-tech-list"
        //tech list

        for (let techName=0;techName<project_tech_list[project_id].length;techName++){
            let li = document.createElement("li")
            li.innerHTML = project_tech_list [project_id][techName]
            ulfooterTech.appendChild(li)
        }

        footer.appendChild(ulfooterTech)

        let div = document.createElement("div")

        let ulfooterFolder = document.createElement("ul")
        ulfooterFolder.classList.add("folder")

        let liFolder = document.createElement("li")
        let liFile = document.createElement("li")


        let afooterFolder = document.createElement("a")
        afooterFolder.setAttribute("href",project_title_folder[project_id])
        afooterFolder.innerHTML  ='<svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="true" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" onmouseover=highlight(this) onmouseout=dim(this) stroke="rgba(255, 145, 0, 0.411)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></g></svg>'


        let afooterFile = document.createElement("a")
        afooterFile.setAttribute("href",project_title_documentation_link[project_id])

        afooterFile.innerHTML  = '<svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" onmouseover=highlight(this) onmouseout=dim(this)  stroke="rgba(255, 145, 0, 0.411)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 10V4H6v16h6v-4a2 2 0 0 1 2-2h4z" /></g></svg>'


        
        liFolder.appendChild(afooterFolder)
        liFile.appendChild(afooterFile)
        
        ulfooterFolder.appendChild(liFolder)
        ulfooterFolder.appendChild(liFile)
        div.appendChild(ulfooterFolder)
       
        footer.appendChild(div)
        
        projectDiv.appendChild(header)
        projectDiv.appendChild(footer)

        mainDiv.appendChild(projectDiv)

        
        parentDiv.appendChild(mainDiv)



    }
    


}


//skills bar creation
async function createskillsBar(){

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
    createskillsBar()
    createeachProject()
    
})