// document.getElementById("count-el").innerText = 5

// //let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + second Batch//
// let count = 0

/// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    console.log("The button was clicked")
    count += 1
    countEl.textContent = count
    console.log(count)
}

// 1. Create a function, save(), which logs out the count when it's called
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}