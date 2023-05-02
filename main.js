let menuBtn = document.querySelector(".bars")
let menu = document.querySelector("ul")
let roundedText = document.querySelector(".rounded-text")

console.log()
// roundedText.innerHTML = roundedText.innerText.split("").map((ele,i)=>{
//     `<h2>${ele}</h2>`
//     // `<span style="transform:rotate(${i * 5}deg)">${ele}</span>`
//     // let span = document.createElement("span")
//     // span.setAttribute("style",`transform: rotate(${i * 5}deg)`)
//     // span.textContent = ele
//     // roundedText.appendChild(span)
// }).join("")
roundedText.innerHTML = roundedText.innerText.split("").map((ele,i)=>`<span style="transform: rotate(${i * 10}deg)">${ele}</span>`).join("")

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("open-bar")
    menu.classList.toggle("open-menu")

})