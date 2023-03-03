let cl = console.log;

const jump = document.getElementById("jump");
let text = [...jump.innerHTML]
cl(text)
let spanEle = text.map(ele => {
    return `<span>${ele}</span>`
})
cl(spanEle.join(""))
jump.innerHTML = spanEle.join("")

const colorBtn = document.getElementById("color")

const CustomColor = (eve => {
    let color = prompt("Enter Name of Color");
    document.body.style.background = color;
})

colorBtn.addEventListener("click", CustomColor)