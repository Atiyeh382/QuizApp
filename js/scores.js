console.log(23456789)
const high_score=JSON.parse(localStorage.getItem("highScore")) || []
console.log(high_score)
const list=document.querySelector("ol")
const content=high_score.map((score,index)=>{
    return `
    <li>
      <span>${index +1}</span>
      <p>${score.name}</p>
      <span>${score.score}</span>
    </li>
    `
})
console.log(content)
list.innerHTML=content.join("")