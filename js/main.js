async function animateintroName(){
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
async function animateintroDesignation(){
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


document.addEventListener('DOMContentLoaded',function(){
    animateintroName()
    animateintroDesignation()
 
    
    
})
