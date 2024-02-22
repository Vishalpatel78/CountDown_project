const endDate = "23 May 2024 12:00 AM ";

document.getElementById("end-date").innerText = endDate;

// taking all input for put 
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate); // put end date of event in end in miliseconds
    console.log(end)
    const now = new Date(); // initilize current date as now variable 
    const diff = (end - now)/1000 ; // count the difference of current date and end date of the event in seconds

    if(diff < 0)return;// when the countdown will end .

    // now converting milisecond in days and then store it on inputs first index that is days index
    inputs[0].value = Math.floor(diff / 3600 /24);// cunvert seconds in days 
    inputs[1].value = Math.floor(diff /3600) % 24 ;// convert seconds in hours
    inputs[2].value = Math.floor(diff / 60) % 60 ;
    inputs[3].value = Math.floor(diff) % 60 ;
}

clock();

setInterval(
    () => {
        clock()
    },1000
)
/**
 *  1 day = 24 hrs
 * 1 hr = 60 mins
 * 60mins = 3600 sec
 * 1 sec = 1000 mili sec  
 */