window.onload =function(){
 const score=JSON.parse(localStorage.getItem("score"))
  const high_score=JSON.parse(localStorage.getItem("highScore")) || []
 const score_el=document.querySelector("p")
 const button = document.querySelector("button")
 const input = document.querySelector("input")
 score_el.innerText = score
 const sava_handler=()=>{
    if(!input.value || !score){
        alert("Invalid username or score");
    }
    else{
     const final_score={name: input.value , score}
     high_score.push(final_score)
     high_score.sort((a,b)=> b.score-a.score);
     high_score.splice(10);
     
     localStorage.setItem("highScore",JSON.stringify(high_score))
     localStorage.removeItem("score")
     window.location.assign("/")

    }
 }
 button.addEventListener("click",sava_handler)
} 
