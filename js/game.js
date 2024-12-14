import format_data from "./helper.js"; 
window.onload=function(){
    const level=localStorage.getItem("level") || "medium"
    const url=`https://opentdb.com/api.php?amount=10&category=18&difficulty=${level}&type=multiple`;
    let formated_data=null
    let question_index=0
    let correct_answer=0
    const correct_bonus=10
    let score=0
   let is_accepted=true
   const loader=document.getElementById("loader")
   const container=document.getElementById("container")
   const question_text=document.getElementById("question-text")
   const answers_text=document.querySelectorAll(".answer-text")
   const score_text=document.getElementById("score")
   const next_button=document.getElementById("next")
   const finish_button=document.getElementById("finish")
   const quesion_num= document.getElementById("question-number")
   const error= document.getElementById("error")


    const fetch_data=async()=>{
        try{
        const response=await fetch(url)
        const json=await response.json();
        formated_data=format_data(json.results)
        }
        catch(err){
         loader.style.display="none"
         error.style.display="block"
        }


        start()
    }
  
    const start =()=>{
        show_question()
        loader.style.display="none"
        container.style.display="block"

    }
    const show_question=()=>{
        quesion_num.innerText=question_index+1
        const {question , answers, correct_answer_index}=
        formated_data[question_index]
        question_text.innerText=question
        correct_answer=correct_answer_index
        console.log(correct_answer)
        answers_text.forEach((button,index)=>{
            button.innerText=answers[index]

        })

    } 
    const check_answer=(index,event)=>{
        if (!is_accepted ){return}
        is_accepted=false
        console.log(index)
        const is_correct= index === correct_answer? true :false;
        if(is_correct){
         event.target.classList.add("correct")
         score+=correct_bonus
         score_text.innerText=score

        }
        else{
            event.target.classList.add("incorrect")
            answers_text[correct_answer].classList.add("correct")
        }

    }
    const next_handler=()=>{
        question_index++
        if(question_index<formated_data.length){
            is_accepted=true
            remove_class()
            show_question()
        }
        else{
           finish_handler()
        }
    }
    const finish_handler=()=>{
        localStorage.setItem("score",JSON.stringify(score))
        window.location.assign("/end.html") 
    }
    const remove_class=()=>{
        answers_text.forEach((button)=>{button.className="answer-text"})
    }
    fetch_data()
    answers_text.forEach((button,index)=>{
     
        button.addEventListener("click",(event)=>check_answer(index,event))
        next_button.addEventListener("click",next_handler)
        finish_button.addEventListener("click",finish_handler)
    })
}
// window.addEventListener("load",fetch_data)










