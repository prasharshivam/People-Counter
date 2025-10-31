let saveEl = document.getElementById("save-El")
let countEl = document.getElementById("count-El")
console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}
