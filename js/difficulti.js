window.onload=function(){
    const buttons=document.querySelectorAll("button")
    console.log(56789)
    const select_handler=(event)=>{
       const level=event.target.innerText.toLowerCase()
       localStorage.setItem("level", level)
       window.location.assign("/")
    }


    buttons.forEach((button)=>{
        button.addEventListener("click",select_handler)

    })
}