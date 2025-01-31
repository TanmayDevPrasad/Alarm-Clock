let timebox = document.getElementById("timeInput")
let submit = document.getElementById(`submit`);
var target; //variable to get user's desired target time for alarm

//getting alarm sound effect
const sound = new Audio("https://assets.mixkit.co/active_storage/sfx/1007/1007-preview.mp3");

//collecting target time for alarm,
submit.addEventListener("click", () => {
    target = timebox.value //collecting user's desired alarm time
    alert(`Alarm set for : ${target.toString()}`);
}
);

//creating button to stop alarm
let btn = document.createElement("button")
btn.className = "butt"
btn.style.display = "none" //display none so it stays hidden until desired
btn.innerHTML = "Stop Alarm"
submit.insertAdjacentElement("afterend", btn)


//getting new time update every second and buzzing alarm if time comes
setInterval(() => {

    //getting new time every second i.e. updating the current time automatically instead of  manually
    const d = new Date()
    let hour = d.getHours()
    let minute = d.getMinutes()

    var usertime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`; //padStart(n,"x") makes sure the string contains n characters, and add x if needed in the start
    console.log(usertime)

    //configuring the 'stop alarm' button to reload the page
    btn.addEventListener("click", () => {
        location.reload()
    }
    )

    if (usertime == target) {
        sound.play() //play the sound till current time is same as target time
        btn.style.display = "block" //makes the button visible

    }

}, 1000);
