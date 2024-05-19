let body = document.querySelector("body")
let main = document.querySelector(".main")


body.addEventListener("click", (e)=>{
    if(e.target.classList[0] == "btn"){
        main.classList.add("main2")
        main.innerHTML = `<img src=${e.target.dataset.url}><i>Close</i>`
    }else{
        main.innerHTML = ""
        main.classList.remove("main2")
    }
})