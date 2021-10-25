// button scroll1
//even for show scroll button after scroll 300px
let scroll = document.querySelector("button.scroll")
window.addEventListener("scroll", e => {
    if (window.scrollY > 300 & window.scrollY < 2000) {
        scroll.classList.add("show")
    } else {
        scroll.classList.remove("show")
    }
})

// event for click , when we click button scroll up do .
scroll.addEventListener("click", e => {
    if (scroll.classList.contains("show")) {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
})

// button scroll2
//even for show scroll button after scroll 2000px
let scroll2 = document.querySelector("button.scroll2")
window.addEventListener("scroll", e => {
    if (window.scrollY > 2000) {
        scroll2.classList.add("show")
    } else {
        scroll2.classList.remove("show")
    }
})

// event for click , when we click button scroll up do .
scroll2.addEventListener("click", e => {
    if (scroll2.classList.contains("show")) {
        document.querySelector('#articles').scrollIntoView({ top: 0, behavior: "smooth" })
    }
})