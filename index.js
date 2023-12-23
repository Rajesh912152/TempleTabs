let aboutBtnEl=document.getElementById("about");
let timetoVisitBtnEl=document.getElementById("timetoVisit")
let attractionsBtnEl=document.getElementById("attractions")

let aboutTabEl=document.getElementById("aboutTab")
let timetoVisitTabEl=document.getElementById("timetoVisitTab")
let attractionsTabEl=document.getElementById("attractionsTab")

timetoVisitTabEl.classList.add("d-none")
attractionsTabEl.classList.add("d-none")

function about(){
    aboutBtnEl.style.backgroundColor="white";
    timetoVisitBtnEl.style.backgroundColor="#dae2ec";
    attractionsBtnEl.style.backgroundColor="#dae2ec";
    
    aboutTabEl.classList.remove("d-none")
    timetoVisitTabEl.classList.add("d-none")
    attractionsTabEl.classList.add("d-none")

}
function timetoVisit(){
    aboutBtnEl.style.backgroundColor="#dae2ec";
    timetoVisitBtnEl.style.backgroundColor="white";
    attractionsBtnEl.style.backgroundColor="#dae2ec";

    aboutTabEl.classList.add("d-none")
    timetoVisitTabEl.classList.remove("d-none")
    attractionsTabEl.classList.add("d-none")

}
function attractions(){
    aboutBtnEl.style.backgroundColor="#dae2ec"
    timetoVisitBtnEl.style.backgroundColor="#dae2ec"
    attractionsBtnEl.style.backgroundColor="white"

    aboutTabEl.classList.add("d-none")
    timetoVisitTabEl.classList.add("d-none")
    attractionsTabEl.classList.remove("d-none")


}