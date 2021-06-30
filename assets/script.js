
document.getElementById("count-el")
document.getElementById("save-el")
var saveEl = document.getElementById("save-el")
var countEl = document.getElementById("count-el")


var count = 0




function increament() {


    count += 1
    countEl.textContent = count

}

function save() {

    var register = count + " - "
    saveEl.textContent += register
    countEl.textContent = 0
    count = 0





}




