function currentDate(){
let date =new Date()
return date
}

function currentMonth(){
    let date = new Date()
    let month = date.getMonth()
    return month+1
}


 function getBatchInfo(){
    let inform = ("batch name - lithium, week-4th, Day-16, the topic being taught today is Nodejs module system ")
return inform
    }

module.exports={currentDate,currentMonth,getBatchInfo}

