let content = "ScoobyDoobyDoo"

document.addEventListener("DOMContentLoaded", init);

function init(){
    mainFrame = document.getElementById("main-frame");
    let df = new DocumentFragment();
    let p = document.createElement("p");
    p.textContent = content;
    df.appendChild(p);
    mainFrame.appendChild(df);
}