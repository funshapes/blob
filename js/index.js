const rangeInputs = document.querySelectorAll("input[type=range]");
const code = document.querySelector(".code");
let root = window.getComputedStyle(document.documentElement);
let radius = [
  root.getPropertyValue("--radius-1"),
  root.getPropertyValue("--radius-2"),
  root.getPropertyValue("--radius-3"),
  root.getPropertyValue("--radius-4"),
  "/ " + root.getPropertyValue("--radius-5"),
  root.getPropertyValue("--radius-6"),
  root.getPropertyValue("--radius-7"),
  root.getPropertyValue("--radius-8")
];

code.innerHTML = "border-radius: " + radius.join(' ') + ";";
rangeInputs.forEach((el, index) => {
  el.addEventListener("input", (e) =>{
    document.documentElement.style.setProperty("--radius-" + (index + 1), e.target.value + "%");
    el.setAttribute("data-value", e.target.value + "%");
    if(index === 4){
      radius[index] = "/ " + e.target.value + "%";
    }else{
      radius[index] = e.target.value + "%";
    }
    code.innerHTML = `
    border-radius:  ${radius.join(' ')};
    `;
  });
})


document.querySelector(".open-sidebar").addEventListener('click',()=>{
const opacity = document.querySelector("#sidebar").style.opacity
if(opacity == 1){
document.querySelector("#sidebar").style.opacity="0"

}else{
    document.querySelector("#sidebar").style.opacity="1"   

}
})

function Handlecolor(){
const backcolor = document.querySelector('#color').value
document.querySelector('.blob').style.background =  `${backcolor}`;
document.querySelector('#color').style.background =  `${backcolor}`;
document.getElementsByClassName('.color').innerHTML=`background-color: ${backcolor}`
 

}
