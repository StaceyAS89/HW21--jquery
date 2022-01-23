let test = document.querySelectorAll('.test');
for (let item of test) {
    item.style.color = "red";
}
let testH2 = document.querySelectorAll('h2.test')
for (let item of testH2) {
    item.style.color = "red";
}

let paragraph = document.querySelectorAll('p ~ p')
paragraph[0].style.color = "red"

let liWWW = document.querySelectorAll("li.www ~ li")
liWWW[0].style.color = "red"

let iH2 = document.querySelectorAll("h2  i")
iH2[0].style.color = "red"

let iH2direct = document.querySelectorAll("h2 > i")
iH2[0].style.color = "red"

let h1notTest$ = $("h2").not(".test")
h1notTest$.css({
    color: "red"
})

let hnotTest$ = $(':header').not(".test")
hnotTest$.css({
    color: "red"
})

$(':header + :header').css({
    color: "red"
})

$(":header.test + :header.test").css({
    color: "red"
})