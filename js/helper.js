const format_data=(data)=>{
    const result=data.map((item)=>{
        const questions={question: item.question};
        const answers=[...item.incorrect_answers]
        const correct_answer_index=Math.floor(Math.random()*4);
        answers.splice(correct_answer_index,0,item.correct_answer)
        questions.answers=answers;
        questions.correct_answer_index=correct_answer_index;
        return questions   

   });

   return result
}
export default format_data