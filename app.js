//declration
let start = document.querySelector('.start');
let staMenu = document.querySelector('.start-boxes');
let cortana = document.querySelector('.cortana-icon');
let corMenu = document.querySelector('.cortana-box');
let welcome = document.querySelector('.welcome');
let close1 = document.querySelector('.txt');
let btn = document.querySelectorAll('.btn');
let close2 = document.querySelector('.clo');
let main = document.querySelector('main');
let shutDown = document.querySelector('.shutDown');
let shutMenu = document.querySelector('.shut-down');
let side = document.querySelector('.noti-slide');
let notify = document.querySelector('.notifications');
let maximize = document.querySelector('.max');
let act = document.querySelectorAll('.e');
let launch = document.querySelector('.comp');
let launch1 = document.querySelector('.sss');
let launch2 = document.querySelector('.fff');
let myComp = document.querySelector('.myComp');
let cl = document.querySelector('.x');
let menu = document.querySelector('.menu');
let btn1 = btn[0];
let btn2 = btn[1];
let act0 = act[0];
let act1 = act[1];
let act2 = act[2];
let act3 = act[3];


// event listeners
 start.addEventListener('click', openStartMenu);
 cortana.addEventListener('click', openCortanaMenu);
 close1.addEventListener('click', closeWelcomeWindow);
btn1.addEventListener('click', closeWelcomeWindow);
btn2.addEventListener('click', closeWelcomeWindow);
close2.addEventListener('click', closeCortanaMenu);
shutDown.addEventListener('click', openshutdown);
notify.addEventListener('click', openNotification);
maximize.addEventListener('click', maximizeEle);
act0.addEventListener('click', addAtv0);
act1.addEventListener('click', addAtv1);
act2.addEventListener('click', addAtv2);
act3.addEventListener('click', addAtv3);
launch.addEventListener('click', addDiv);
launch1.addEventListener('click', addDiv1);
launch2.addEventListener('click', addDiv2);
launch.addEventListener('dblclick', openImg);
cl.addEventListener('click', closeImg);

 //functions
function addDiv() {
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else {
        menu.classList.toggle('active');  
    }
}

function addDiv1(){
    if(menu.classList.contains('active')){
        launch1.classList.remove('active');
    }else {
        launch1.classList.toggle('active');
    }  
}

function addDiv2(){
    if(menu.classList.contains('active')){
        launch2.classList.remove('active');
    }else{
        launch2.classList.toggle('active');
    }   
}

function closeImg() {
    myComp.classList.remove('active');
}

function openImg() {
    myComp.classList.toggle('active');
}

function addAtv0() {
    console.log("hello")
    act0.classList.toggle("active")
}

function addAtv1() {
    act1.classList.toggle("active")
}

function addAtv2() {
    act2.classList.toggle("active")
}

function addAtv3() {
    act3.classList.toggle("active")
}

function closeNotification() {
    side.classList.remove("active");
}

function openNotification() {
    side.classList.toggle('active');
    main.addEventListener('click', closeNotification);
}

function closeEle() {
    corMenu.classList.remove('active');
}

function maximizeEle() {
    corMenu.classList.toggle("active");
    main.addEventListener('.click', closeEle)
}
 
function openshutdown() {
    shutMenu.style.display = "block";
}

function closeCortanaMenu() {
    corMenu.style.display = "none";
}

function closeWelcomeWindow() {
    welcome.style.display = "none";
}

 function openCortanaMenu(){
     if(corMenu.style.display === "block") {
        corMenu.style.display = "none";
     }else {
        corMenu.style.display = "block";
        corMenu.style.position = "absolute";
        corMenu.style.top = "8%";
        corMenu.style.left = "17%";
        main.addEventListener('click', closeCortanaMenu);
     }
 }

 function closeStartMenu(){
    staMenu.style.display = "none";
 }

 function openStartMenu() {
     if ( staMenu.style.display === "block") {
        staMenu.style.display = "none";
     }else {
        staMenu.style.display = "block";
        staMenu.style.position = "absolute";
        staMenu.style.border = "none";
        staMenu.style.bottom = "5%";
        staMenu.style.left = "0%"; 
        console.log("here they are")
        main.addEventListener('click', closeStartMenu);
     }  
 }


//Date and time 
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

var dt = new Date();
document.getElementById("datetime1").innerHTML = dt.toLocaleTimeString();

//draggable
//cortana drag 
dragElement(document.getElementById("mydiv1"));
//wlecome drag
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// windows.js
// For the Windows 10 CSS3 project 
// (c) 2016 Nitin Seshadri
//
// Checking if device is a mobile phone and alerting the user if that is the case
// If not, checks that screen is wide enough
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log("Please access this page using a computer for the best experience.");
   // Hides Notepad and winver windows so it doesn't crowd the viewport
   $("#winver").hide()
   } else {
   // Checking if screen is big enough and alerting the user if not
   if($(window).width() < 800){
     alert("Please make the window larger for the best experience.");
   }
   }
   // JQuery functions that handle most of the magic
   $(document).ready(function() {
       // Changes focus of clicked window to be on top
       $(".window").click(function() {
           $('div[class^="window"]').css('z-index', '0');
           $(this).css('z-index', '10');
       });
       // Draggable windows
       $('.window').draggable({
           containment: "parent"
       });
       var handle = $(".window").draggable("option", "handle");
       $('.window').draggable("option", "handle", ".titleFrame");
       // winver
       // Closing the winver dialog
       $("#winverClose").click(function() {
           $("#winver").fadeOut(300);
       });
       $("#winverOK").click(function() {
           $("#winver").fadeOut(300);
       });
       });
   