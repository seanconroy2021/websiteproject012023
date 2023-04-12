/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Hello this is the Note keeper App");

$(".delnote").click(() => confirm('Really delete this note?'))
$(".delnotecollection").click(() => confirm('Really delete this note collection?'))
$('.ui.selection.dropdown')
  .dropdown();



const button1 = document.querySelector("#b1");

button1 &&
  button1.addEventListener("click", () => {
    let toComeDiv = document.querySelector("#tocome");
    let imagesStart = document.querySelector("#imagesStart");
  
  
    if (toComeDiv.style.display === "block") {
      toComeDiv.style.display = "none";
      imagesStart.style.display = "block";
    } else {
      toComeDiv.style.display = "block";
       imagesStart.style.display = "none";
    }
  });

const button2 = document.querySelector("#b2");

button2 &&
  button2.addEventListener("click", () => alert("Thanks! You for like are Note Keeper App"));



const button3 = document.querySelector("#b3");
const welcomeUserDiv = document.querySelector("#welcomeusernotekeeper");
const welcomeuserNOUSER = document.querySelector("#welcomeusernotekeeperNOUSER");
button3 &&
  button3.addEventListener("click", () => {
  let username = prompt("What's your name?");
  let welcomeuserNOUSER = document.querySelector("#welcomeusernotekeeperNOUSER");
  welcomeuserNOUSER.style.display = "none";
  welcomeUserDiv.style.display = "block";
   
    document.querySelector("#welcomeusernotekeeper").innerHTML = `<p> Hello, ${username}, 
    this app is designed to make note-taking quick, easy, and hassle-free. With a simple and intuitive interface, you can create, edit, and organize notes in seconds.
    ${username} your preoductivity will now greatly increase as a result of utilizing Note Keeper App.</p> <br>`;
    welcomeUserDiv.style.cursor = "pointer";
  });

/*
not needed as chnaged it to top of the page 

welcomeUserDiv &&
  welcomeUserDiv.addEventListener("click", (evt) => {
  welcomeUserDiv.style.display = "none";
  welcomeuserNOUSER.style.display = "block";
  });*/


